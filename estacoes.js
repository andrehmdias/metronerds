// Este array vai guardar os nomes das linhas que o jogador acertar
let linhasDescobertas = [];

let estacaoAlvo = null;

const mapaJs = new maplibregl.Map({
    container: 'mapaDiv',
    style: 'https://tiles.openfreemap.org/styles/bright',
    center: [-46.6333, -23.5505], // Centralizado na Sé
    zoom: 11, // Zoom ajustado para ver a malha toda
    interactive: false,          // Desativa todas as interações de uma vez
    scrollZoom: false,           // Garante que o scroll não mude o zoom
    boxZoom: false,              // Desativa zoom por caixa (Shift+arrastar)
    dragRotate: false,           // Desativa rotação
    dragPan: false,              // Desativa o arrasto (pan)
    keyboard: false,             // Desativa comandos de teclado
    doubleClickZoom: false,      // Desativa zoom no duplo clique
    touchZoomRotate: false       // Desativa zoom/rotação no touch (celular)
});



// Remove acentos, til, cedilha e deixa tudo minúsculo
function normalizarTexto(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}


function configurarAutocompletar() {
    const input = document.getElementById('palpiteInput');
    const caixaSugestoes = document.getElementById('lista-sugestoes');

    // Toda vez que o jogador digitar uma letra, isso roda:
    input.addEventListener('input', function() {
        const termoDigitado = normalizarTexto(this.value.trim());

        // Se o campo estiver vazio, esconde a lista
        if (termoDigitado.length === 0) {
            caixaSugestoes.innerHTML = '';
            caixaSugestoes.classList.add('escondido');
            return;
        }

        // Filtra as estações que contém o que foi digitado
        const sugestoes = todasEstacoes.filter(estacao => {
            const termoLimpo = normalizarTexto(termoDigitado);
            
            // 1. Checa se o termo está no nome da estação
            const nomeEstacaoLimpo = normalizarTexto(estacao.nome);
            const bateNome = nomeEstacaoLimpo.includes(termoLimpo);

            // 2. Checa se o termo bate com alguma das cores da linha (ex: "verd" -> "verde")
            // O some() retorna true se pelo menos uma linha da estação bater com a busca
            const bateLinha = estacao.linha.some(cor => {
                const corLimpa = normalizarTexto(cor);
                return corLimpa.includes(termoLimpo);
            });

            return bateNome || bateLinha;
        });

        // 3. Ordena as sugestões em ordem alfabética (para não dar spoiler da sequência da linha)
        sugestoes.sort((a, b) => a.nome.localeCompare(b.nome));

        // Monta o visual da lista
        caixaSugestoes.innerHTML = '';
        if (sugestoes.length > 0) {
            sugestoes.forEach(estacao => {
                const itemLista = document.createElement('li');
                itemLista.textContent = estacao.nome;
                
                // O que acontece quando o cara clica na sugestão:
                itemLista.onclick = function() {
                    input.value = estacao.nome; // Preenche o input bonitinho
                    caixaSugestoes.innerHTML = ''; // Limpa a lista
                    caixaSugestoes.classList.add('escondido'); // Esconde a caixa
                };
                
                caixaSugestoes.appendChild(itemLista);
            });
            caixaSugestoes.classList.remove('escondido');
        } else {
            caixaSugestoes.classList.add('escondido');
        }
    });

    // Se o jogador clicar fora do input ou da lista, ela some
    document.addEventListener('click', function(evento) {
        if (evento.target !== input && evento.target !== caixaSugestoes) {
            caixaSugestoes.classList.add('escondido');
        }
    });
}


function iniciarJogo() {
    // 1. Sorteia um índice aleatório da lista
    const indiceAleatorio = Math.floor(Math.random() * todasEstacoes.length);
    estacaoAlvo = todasEstacoes[indiceAleatorio];

    atualizarBolinha(estacaoAlvo.coordx, estacaoAlvo.coordy);

    // Usamos as coordenadas que você já tem no objeto da estação
    mapaJs.flyTo({
        center: [estacaoAlvo.coordx, estacaoAlvo.coordy],
        zoom: 14, // O zoom que você quer testar
        essential: true 
    });

    console.log("Estação secreta sorteada! (Dica para o dev: " + estacaoAlvo.nome + ")");
}


// Função específica para mexer na bolinha
function atualizarBolinha(lon, lat) {
    const dadoPonto = {
        'type': 'FeatureCollection',
        'features': [{
            'type': 'Feature',
            'geometry': { 'type': 'Point', 'coordinates': [lon, lat] }
        }]
    };
    mapaJs.getSource('ponto-alvo').setData(dadoPonto);
}


function configurarCamadaBolinha() {
    // 1. Criar a fonte de dados (Source)
    mapaJs.addSource('ponto-alvo', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [] // Começa vazio
        }
    });

    // 2. Criar a aparência (Layer)
    mapaJs.addLayer({
        'id': 'camada-ponto-alvo',
        'type': 'circle',
        'source': 'ponto-alvo',
        'paint': {
            'circle-radius': 10,
            'circle-color': '#5a5a5a',
            'circle-stroke-width': 3,
            'circle-stroke-color': '#FFFFFF'
        }
    });
}

function calcularDirecao(estacaoChutada, estacaoAlvo) {
    // Diferença entre as coordenadas
    const dx = estacaoAlvo.coordx - estacaoChutada.coordx;
    const dy = estacaoAlvo.coordy - estacaoChutada.coordy;

    // Calcula o ângulo em radianos e converte para graus
    // Math.atan2 devolve o ângulo entre o eixo X e o ponto (dx, dy)
    let angulo = Math.atan2(dy, dx) * (180 / Math.PI);

    // Normaliza para 0-360 graus
    if (angulo < 0) angulo += 360;

    // Define a seta baseada no ângulo (dividindo os 360° em 8 fatias de 45°)
    if (angulo >= 337.5 || angulo < 22.5) return "→";
    if (angulo >= 22.5 && angulo < 67.5) return "↗";
    if (angulo >= 67.5 && angulo < 112.5) return "↑";
    if (angulo >= 112.5 && angulo < 157.5) return "↖";
    if (angulo >= 157.5 && angulo < 202.5) return "←";
    if (angulo >= 202.5 && angulo < 247.5) return "↙";
    if (angulo >= 247.5 && angulo < 292.5) return "↓";
    if (angulo >= 292.5 && angulo < 337.5) return "↘";

    return ""; 
}


// O famoso BFS (Busca em Largura)
function calcularDistancia(idInicio, idAlvo) {
    // Se ele chutou a própria estação secreta, distância é zero!
    if (idInicio === idAlvo) return 0;

    // Fila para analisar: começa com a estação chutada e distância 0
    let fila = [{ id: idInicio, distancia: 0 }];
    
    // Memória para não andar em círculos (não voltar pra estação que já passou)
    let visitados = new Set();
    visitados.add(idInicio);

    while (fila.length > 0) {
        let atual = fila.shift(); // Tira o primeiro da fila para analisar

        // Puxa os dados completos da estação atual
        let dadosEstacao = todasEstacoes.find(e => e.id === atual.id);

        // Se ela tem vizinhos, vamos olhar um por um
        if (dadosEstacao && dadosEstacao.conexoes) {
            for (let vizinhoId of dadosEstacao.conexoes) {
                // Se o vizinho é o nosso alvo, ACHAMOS!
                if (vizinhoId === idAlvo) {
                    return atual.distancia + 1;
                }

                // Se não é o alvo, e ainda não visitamos, coloca na fila pra próxima rodada
                if (!visitados.has(vizinhoId)) {
                    visitados.add(vizinhoId);
                    fila.push({ id: vizinhoId, distancia: atual.distancia + 1 });
                }
            }
        }
    }
    
    // Se esvaziar a fila inteira e não achar (ou se faltar as conexões no banco de dados)
    return "N/A"; 
}



function gerarCardPalpite(estacao, alvo) {
    const novoCard = document.createElement('div');
    novoCard.className = 'card-palpite';

    const seta = calcularDirecao(estacao, alvo);
    
    // --- A MÁGICA ACONTECE AQUI ---
    const distReal = calcularDistancia(estacao.id, alvo.id);
    
    // Se a distância for zero, ele acertou. Vamos colocar um ícone festivo!
    const textoDistancia = distReal === 0 ? "🎉" : `${distReal} est.`;
    // ------------------------------

    novoCard.innerHTML = `
        <div class="card-conteudo">
            <span>${estacao.nome}</span>
            <div class="info-palpite" style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.2rem;">${seta}</span>
                <span style="margin-right: 15px; font-weight: bold;">${textoDistancia}</span>
            </div>
        </div>
    `;

    // Cria a barra de cores na direita
    const containerCores = document.createElement('div');
    containerCores.className = 'barra-cores';

    estacao.linha.forEach(cor => {
        const pedacoCor = document.createElement('div');
        pedacoCor.className = 'faixa-cor';
        pedacoCor.style.backgroundColor = coresHex[cor];
        containerCores.appendChild(pedacoCor);
    });

    novoCard.appendChild(containerCores);
    return novoCard;
}




mapaJs.on('load', function() {

    
    // 1. Limpeza: Esconde as labels do mapa base para não poluir
    const camadas = mapaJs.getStyle().layers;
    camadas.forEach(function(camada) {
        if (camada.type === 'symbol') {
            mapaJs.setLayoutProperty(camada.id, 'visibility', 'none');
        }
    });

    // 2. Importa o seu arquivo GeoJSON
    mapaJs.addSource('dados-metro-sp', {
        'type': 'geojson',
        'data': 'linhas_metro.geojson'
    });

    // 3. Desenha as linhas começando TODAS pretas
    mapaJs.addLayer({
        'id': 'linhas-visuais',
        'type': 'line',
        'source': 'dados-metro-sp',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-width': 4,
            // AQUI O SEGREDO: A lógica já nasce aqui dentro
            'line-color': [
                'case',
                ['in', ['get', 'name'], ['literal', linhasDescobertas]],
                ['get', 'colour'],
                '#000000' // Começa tudo preto pois linhasDescobertas está vazio []
            ]
        }
    });

    console.log("Mapa e camadas carregadas com sucesso!");

    configurarCamadaBolinha();
    configurarAutocompletar();
    iniciarJogo();

});


function verificarPalpite() {
    const chute = document.getElementById('palpiteInput').value.toLowerCase().trim();

    const estacaoEncontrada = todasEstacoes.find(estacao => 
        estacao.nome.toLowerCase() === chute
    );

    if (estacaoEncontrada) {
        // [PASSO 2 e 3 Juntos] Percorre as linhas da estação e adiciona na memória
        estacaoEncontrada.linha.forEach(cor => {
            const listaDeNomesLongos = nomesOficiaisDasLinhas[cor];

            if (listaDeNomesLongos) {
                // Como 'listaDeNomesLongos' agora é um Array, percorremos ele:
                listaDeNomesLongos.forEach(nomeUnico => {
                    if (!linhasDescobertas.includes(nomeUnico)) {
                        linhasDescobertas.push(nomeUnico);
                    }
                });
            }
        });

        // [PASSO 4] Atualiza o mapa (Note que agora ele vem logo após o fechamento do forEach)
        mapaJs.setPaintProperty('linhas-visuais', 'line-color', [
            'case',
            ['in', ['get', 'name'], ['literal', linhasDescobertas]],
            ['get', 'colour'],
            '#000000'
        ]);

        const lista = document.getElementById('lista-palpites');

        // Chamamos a função mestre que cria o card pronto
        const cardPronto = gerarCardPalpite(estacaoEncontrada, estacaoAlvo);
        
        lista.prepend(cardPronto);


        // Limpa o input para o próximo palpite
        document.getElementById('palpiteInput').value = '';

        if (estacaoEncontrada.id === estacaoAlvo.id) {
            // 1. O que acontece se ele acertar? 
            alert("Parabéns!")
            // - Mudar a cor do input?
            // - Mostrar um botão de "Jogar Novamente"?
        }


    } else {
        alert("Estação não encontrada. Tente outra!");
    }
}