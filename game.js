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
    iniciarJogo();
});


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

    document.getElementById('modal-vitoria').classList.add('escondido');
    
    totalPalpites = 0;
    linhasDescobertas = [];
    document.getElementById('lista-palpites').innerHTML = '';
    
    iniciarJogo();
    atualizarCoresLinhas(linhasDescobertas);
}


// ==========================================
// LÓGICA DO MODO SPRINT
// ==========================================
function ativarModoSprint() {
    modoAtual = "sprint";
    tempoSprint = 100;
    sprintAcertos = 0;
    sprintPulos = 0;
    sprintPalpites = 0;
    
    document.getElementById('painel-sprint').classList.remove('escondido');
    const btnTopo = document.getElementById('btn-modo-sprint');
    btnTopo.innerHTML = "❌ Sair do Sprint";
    btnTopo.style.backgroundColor = "#d63031";
    
    reiniciarJogo();
    atualizarPlacarSprint(sprintAcertos, sprintPulos, sprintPalpites);
    
    clearInterval(intervaloTimer);
    intervaloTimer = setInterval(rodarRelogio, 1000);
}

function sairModoSprint() {
    modoAtual = "classico";
    clearInterval(intervaloTimer);
    
    document.getElementById('painel-sprint').classList.add('escondido');
    const btnTopo = document.getElementById('btn-modo-sprint');
    btnTopo.innerHTML = "⏱️ 100 segundos!";
    btnTopo.style.backgroundColor = ""; // Reseta a cor para o padrão do CSS
    
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
        
        // 1. Textos principais do modal
        document.getElementById('modal-emoji').textContent = "⏰";
        document.getElementById('modal-titulo').textContent = "TEMPO ESGOTADO!";
        document.getElementById('texto-vitoria').innerHTML = `A rodada acabou! Veja seu desempenho:`;
        
        // 2. Injeta apenas as 3 caixinhas de dados reais (Acertos, Erros e Pulos)
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
        
        // Finaliza o modo e reseta botões
        modoAtual = "classico"; 
        document.getElementById('painel-sprint').classList.add('escondido');
        const btnTopo = document.getElementById('btn-modo-sprint');
        btnTopo.innerHTML = "⏱️ 100 segundos!";
        btnTopo.style.backgroundColor = "";
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
        document.getElementById('lista-palpites').prepend(cardPronto);
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

document.getElementById('btn-modo-sprint').addEventListener('click', function() {
    if (modoAtual === "classico") {
        ativarModoSprint();
    } else {
        sairModoSprint();
    }
});