import { normalizarTexto } from './utils.js';
import { mapaJs, atualizarBolinha, configurarCamadaBolinha, atualizarCoresLinhas } from './mapa.js';
import { configurarAutocompletar, gerarCardPalpite, exibirModalVitoria, atualizarPlacarSprint } from './ui.js';

// Puxa as variáveis globais que estão no seu dados.js
const DB_ESTACOES = window.todasEstacoes;
const DB_CORES = window.coresHex;
const DB_LINHAS = window.nomesOficiaisDasLinhas;

// Variáveis do Estado do Jogo Clássico
let linhasDescobertas = [];
let totalPalpites = 0;
let estacaoAlvo = null;

// Variáveis do Modo Sprint
let modoAtual = "classico"; 
let tempoSprint = 100;
let intervaloTimer = null;
let sprintAcertos = 0;
let sprintPulos = 0;
let sprintPalpites = 0;

// ==========================================
// INICIALIZAÇÃO DO MAPA
// ==========================================
mapaJs.on('load', function() {
    // Esconde as labels base
    const camadas = mapaJs.getStyle().layers;
    camadas.forEach(function(camada) {
        if (camada.type === 'symbol') {
            mapaJs.setLayoutProperty(camada.id, 'visibility', 'none');
        }
    });

    // Importa o GeoJSON
    mapaJs.addSource('dados-metro-sp', {
        'type': 'geojson',
        'data': 'linhas_metro.geojson'
    });

    // Desenha as linhas começando TODAS pretas
    mapaJs.addLayer({
        'id': 'linhas-visuais',
        'type': 'line',
        'source': 'dados-metro-sp',
        'layout': { 'line-join': 'round', 'line-cap': 'round' },
        'paint': {
            'line-width': 4,
            'line-color': '#000000' 
        }
    });

    console.log("Mapa e camadas carregadas com sucesso!");
    configurarCamadaBolinha();
    configurarAutocompletar(DB_ESTACOES);

    preencherPlaceholders();
    iniciarJogo();
});



// ==========================================
// FUNÇÃO DOS ESPAÇOS VAZIOS (PLACEHOLDERS)
// ==========================================
function preencherPlaceholders() {
    const lista = document.getElementById('lista-palpites');
    lista.innerHTML = ''; // Limpa tudo
    
    // Cria 4 blocos cinzas
    for(let i = 0; i < 4; i++) {
        const bloco = document.createElement('div');
        bloco.className = 'card-placeholder';
        lista.appendChild(bloco);
    }
}



// ==========================================
// FUNÇÕES BASE DO JOGO
// ==========================================


function iniciarJogo() {
    const indiceAleatorio = Math.floor(Math.random() * DB_ESTACOES.length);
    estacaoAlvo = DB_ESTACOES[indiceAleatorio];
    console.log("dica para dev", estacaoAlvo.nome);
    atualizarBolinha(estacaoAlvo.coordx, estacaoAlvo.coordy);
    mapaJs.jumpTo({
        center: [estacaoAlvo.coordx, estacaoAlvo.coordy],
        zoom: 14.5,
        essential: true 
    });
}

function reiniciarJogo() {
    // 1. Volta os textos principais para o estado original "Clássico"
    document.getElementById('modal-emoji').textContent = "🎉";
    document.getElementById('modal-titulo').textContent = "VOCÊ CONSEGUIU!";
    document.getElementById('texto-vitoria').innerHTML = `A estação secreta era <strong id="nome-estacao-alvo">---</strong>.`;
    
    // 2. Injeta as caixinhas do modo Clássico com emojis
    const caixaEstatisticas = document.querySelector('.estatisticas-vitoria');
    if (caixaEstatisticas) {
        caixaEstatisticas.innerHTML = `
            <div class="estat-item">
                <span id="contagem-palpites">0</span>
                <p>🎯 Palpites</p>
            </div>
            <div class="estat-item">
                <span id="contagem-extra">--</span>
                <p>⏱️ Tempo</p>
            </div>
        `;
    }

    // 3. Esconde o modal de vitória
    document.getElementById('modal-vitoria').classList.add('escondido');
    
    // 4. Reseta as variáveis de controle
    totalPalpites = 0;
    linhasDescobertas = [];
    
    // 5. LIMPEZA DA TELA: Apaga os palpites e volta o scroll pro topo
    document.getElementById('lista-palpites').innerHTML = '';
    preencherPlaceholders();

    const painelResultados = document.getElementById('painel-resultados');
    if (painelResultados) {
        painelResultados.scrollTop = 0;
    }
    
    // 6. Sorteia nova estação e reseta o mapa
    iniciarJogo();
    atualizarCoresLinhas(linhasDescobertas);
}


// ==========================================
// LÓGICA DO MODO SPRINT
// ==========================================
function ativarModoSprint() {
    modoAtual = "sprint";
    document.getElementById('indicador-modo').textContent = "⏱️ 100s!";
    tempoSprint = 100;
    sprintAcertos = 0;
    sprintPulos = 0;
    sprintPalpites = 0;
    
    document.getElementById('painel-sprint').classList.remove('escondido');
    
    // Chamamos o reset do jogo para começar do zero no novo modo
    reiniciarJogo();
    atualizarPlacarSprint(sprintAcertos, sprintPulos, sprintPalpites);
    
    clearInterval(intervaloTimer);
    intervaloTimer = setInterval(rodarRelogio, 1000);
}

function sairModoSprint() {
    modoAtual = "classico";
    document.getElementById('indicador-modo').textContent = "✨ Padrão";
    clearInterval(intervaloTimer);
    
    document.getElementById('painel-sprint').classList.add('escondido');
    
    reiniciarJogo();
}

function rodarRelogio() {
    if (modoAtual !== "sprint") return; 

    tempoSprint--;
    const elementoTempo = document.getElementById('tempo-sprint');
    if (elementoTempo) {
        elementoTempo.textContent = `⏳ ${tempoSprint}s`;
    }
    
    if (tempoSprint <= 0) {
        clearInterval(intervaloTimer);
        
        // Exibe o modal com os resultados
        document.getElementById('modal-emoji').textContent = "⏰";
        document.getElementById('modal-titulo').textContent = "TEMPO ESGOTADO!";
        document.getElementById('texto-vitoria').innerHTML = `A rodada acabou! Veja seu desempenho:`;
        
        const caixaEstatisticas = document.querySelector('.estatisticas-vitoria');
        caixaEstatisticas.innerHTML = `
            <div class="estat-item">
                <span>${sprintAcertos}</span>
                <p>✅ Acertos</p>
            </div>
            <div class="estat-item">
                <span>${sprintPalpites}</span>
                <p>❌ Erros</p>
            </div>
            <div class="estat-item">
                <span>${sprintPulos}</span>
                <p>⏭️ Pulos</p>
            </div>
        `;

        document.getElementById('modal-vitoria').classList.remove('escondido');
        
        // Finaliza o modo e esconde o painel
        modoAtual = "classico"; 
        document.getElementById('painel-sprint').classList.add('escondido');
        document.getElementById('indicador-modo').textContent = "✨ Padrão";
    }
}

function pularEstacaoSprint() {
    if (modoAtual !== "sprint") return;
    
    sprintPulos++;
    // No pulo em tempo real, não somamos os palpites aqui, 
    // pois os erros já foram contados um a um no verificarPalpite!
    atualizarPlacarSprint(sprintAcertos, sprintPulos, sprintPalpites);
    
    totalPalpites = 0;
    document.getElementById('lista-palpites').innerHTML = ''; 
    preencherPlaceholders();
    
    linhasDescobertas = [];
    atualizarCoresLinhas(linhasDescobertas);
    iniciarJogo();
}


// ==========================================
// LÓGICA PRINCIPAL (Verificar Palpite)
// ==========================================
function verificarPalpite() {
    const input = document.getElementById('palpiteInput');
    const chuteLimpo = normalizarTexto(input.value.trim());

    const estacaoEncontrada = DB_ESTACOES.find(estacao => 
        normalizarTexto(estacao.nome) === chuteLimpo
    );

    if (estacaoEncontrada) {
        totalPalpites++; // Contador da rodada atual (limpa a cada estação)

        // Se errou no modo Sprint: soma 1 erro global IMEDIATAMENTE
        if (modoAtual === "sprint" && estacaoEncontrada.id !== estacaoAlvo.id) {
            sprintPalpites++; 
            atualizarPlacarSprint(sprintAcertos, sprintPulos, sprintPalpites);
        }

        // Pintar linhas no mapa
        estacaoEncontrada.linha.forEach(cor => {
            const listaDeNomesLongos = DB_LINHAS[cor];
            if (listaDeNomesLongos) {
                listaDeNomesLongos.forEach(nomeUnico => {
                    if (!linhasDescobertas.includes(nomeUnico)) {
                        linhasDescobertas.push(nomeUnico);
                    }
                });
            }
        });
        atualizarCoresLinhas(linhasDescobertas);

        // Gerar card visual
        const cardPronto = gerarCardPalpite(estacaoEncontrada, estacaoAlvo, DB_ESTACOES, DB_CORES);

        const listaPalpites = document.getElementById('lista-palpites');
        const blocosVazios = listaPalpites.querySelectorAll('.card-placeholder');

        // A MÁGICA INTELIGENTE DA ROLAGEM
        const painelResultados = document.getElementById('painel-resultados');

        if (blocosVazios.length > 0) {
            // Se substituiu um bloco cinza (topo da lista), garante que a tela fique no topo
            blocosVazios[0].replaceWith(cardPronto);
            if (painelResultados) {
                painelResultados.scrollTop = 0; 
            }
        } else {
            // Se acabaram os blocos cinzas e a lista está crescendo, rola para o fundo
            listaPalpites.appendChild(cardPronto);
            if (painelResultados) {
                painelResultados.scrollTop = painelResultados.scrollHeight;
            }
        }

        input.value = '';

        // CONDIÇÃO DE ACERTO
        if (estacaoEncontrada.id === estacaoAlvo.id) {
            if (modoAtual === "sprint") {
                sprintAcertos++;
                // ATENÇÃO: Removemos a linha "sprintPalpites += totalPalpites" que causava o erro!
                atualizarPlacarSprint(sprintAcertos, sprintPulos, sprintPalpites);
                
                // Limpa a rodada para a próxima estação
                totalPalpites = 0;
                document.getElementById('lista-palpites').innerHTML = '';
                preencherPlaceholders();

                linhasDescobertas = [];
                atualizarCoresLinhas(linhasDescobertas);
                iniciarJogo(); 
            } else {
                exibirModalVitoria(estacaoAlvo.nome, totalPalpites);
            }
        }
    } else {
        alert("Estação não encontrada!");
    }
}

// ==========================================
// LIGAÇÃO DOS BOTÕES (Event Listeners)
// ==========================================
document.getElementById('btn-enviar').addEventListener('click', verificarPalpite);
document.getElementById('btn-jogar-novamente').addEventListener('click', reiniciarJogo);
document.getElementById('btn-pular').addEventListener('click', pularEstacaoSprint);

// ==========================================
// CONTROLES DO MENU DE MODOS
// ==========================================
const btnMenuModos = document.getElementById('btn-menu-modos');
const dropdownModos = document.getElementById('dropdown-modos');
const opcaoPadrao = document.getElementById('opcao-padrao');
const opcaoSprint = document.getElementById('opcao-sprint');

// 1. Abre/Fecha o menu quando clica no botão "Modos"
btnMenuModos.addEventListener('click', function(e) {
    e.stopPropagation(); // Impede o clique de fechar o menu imediatamente
    dropdownModos.classList.toggle('escondido');
});

// 2. Esconde o menu se o jogador clicar em qualquer outro lugar da tela
document.addEventListener('click', function(e) {
    if (!dropdownModos.classList.contains('escondido')) {
        dropdownModos.classList.add('escondido');
    }
});

// 3. Ao clicar na opção "Padrão"
opcaoPadrao.addEventListener('click', function() {
    // Só faz alguma coisa se já não estiver no modo padrão
    if (typeof modoAtual !== 'undefined' && modoAtual !== "classico") {
        sairModoSprint(); // Chama a sua função que já existe
    }
    dropdownModos.classList.add('escondido'); // Fecha o menu
});

// 4. Ao clicar na opção "100 Segundos"
opcaoSprint.addEventListener('click', function() {
    // Só ativa se já não estiver no modo sprint
    if (typeof modoAtual === 'undefined' || modoAtual !== "sprint") {
        ativarModoSprint(); // Chama a sua função que já existe
    }
    dropdownModos.classList.add('escondido'); // Fecha o menu
});



// ==========================================
// CONTROLES DO TECLADO VIRTUAL
// ==========================================
const inputPalpite = document.getElementById('palpiteInput');
const teclas = document.querySelectorAll('.tecla');
const areaTeclado = document.getElementById('teclado-virtual'); // <--- Pega o teclado todo

// 1. O ESCUDO: Impede que qualquer clique no teclado avise o ui.js para fechar a lista
areaTeclado.addEventListener('click', function(e) {
    e.stopPropagation();
});

areaTeclado.addEventListener('pointerdown', function(e) {
    e.stopPropagation();
});



// ==========================================
// SUPORTE AO TECLADO FÍSICO (GLOBAL)
// ==========================================
document.addEventListener('keydown', function(e) {
    const input = document.getElementById('palpiteInput');
    const modalVitoria = document.getElementById('modal-vitoria');

    // 1. Trava de segurança: Se a tela de vitória estiver aberta, o teclado físico desliga
    if (!modalVitoria.classList.contains('escondido')) {
        return; 
    }

    // 2. Se a pessoa apertar ENTER
    if (e.key === 'Enter') {
        if (input.value.trim() !== '') {
            e.preventDefault(); 
            verificarPalpite();
            
            // Esconde a lista de sugestões após enviar
            const listaSugestoes = document.getElementById('lista-sugestoes');
            if(listaSugestoes) listaSugestoes.classList.add('escondido');
            
            input.focus(); // Já deixa engatilhado pro próximo palpite
        }
        return;
    }

    // 3. A MÁGICA DO FOCO AUTOMÁTICO:
    // Se o jogador digitar uma letra, número, apagar ou espaço E não estiver clicado na caixa...
    if (document.activeElement !== input) {
        // Verifica se a tecla apertada tem apenas 1 caractere (como 'a', 'x', '1') ou se é o Backspace
        if (e.key.length === 1 || e.key === 'Backspace') {
            input.focus(); // Joga o cursor pra caixa invisivelmente antes da letra cair lá
        }
    }
});




// 2. A MÁQUINA DE ESCREVER (Abaixo fica o seu código que já estava funcionando)
teclas.forEach(tecla => {
    tecla.addEventListener('pointerdown', function(e) {
        e.preventDefault(); 

        const valorTecla = this.textContent;

        if (this.id === 'tecla-apagar') {
            inputPalpite.value = inputPalpite.value.slice(0, -1);
        } 
        else if (this.id === 'tecla-espaco') {
            inputPalpite.value += ' ';
        } 
        else {
            inputPalpite.value += valorTecla;
        }

        inputPalpite.focus();

        const eventoInput = new Event('input', { bubbles: true });
        inputPalpite.dispatchEvent(eventoInput);
    });
});