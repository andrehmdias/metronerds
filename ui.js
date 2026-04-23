import { normalizarTexto, calcularDirecao, calcularDistancia } from './utils.js';

export function configurarAutocompletar(listaEstacoes) {
    const input = document.getElementById('palpiteInput');
    const caixaSugestoes = document.getElementById('lista-sugestoes');

    input.addEventListener('input', function() {
        const termoDigitado = normalizarTexto(this.value.trim());

        if (termoDigitado.length === 0) {
            caixaSugestoes.innerHTML = '';
            caixaSugestoes.classList.add('escondido');
            return;
        }

        const sugestoes = listaEstacoes.filter(estacao => {
            const termoLimpo = normalizarTexto(termoDigitado);
            const bateNome = normalizarTexto(estacao.nome).includes(termoLimpo);
            const bateLinha = estacao.linha.some(cor => normalizarTexto(cor).includes(termoLimpo));
            return bateNome || bateLinha;
        });

        sugestoes.sort((a, b) => a.nome.localeCompare(b.nome));

        caixaSugestoes.innerHTML = '';
        if (sugestoes.length > 0) {
            sugestoes.forEach(estacao => {
                const itemLista = document.createElement('li');
                itemLista.textContent = estacao.nome;
                itemLista.onclick = function() {
                    input.value = estacao.nome;
                    caixaSugestoes.innerHTML = '';
                    caixaSugestoes.classList.add('escondido');
                };
                caixaSugestoes.appendChild(itemLista);
            });
            caixaSugestoes.classList.remove('escondido');
        } else {
            caixaSugestoes.classList.add('escondido');
        }
    });

    document.addEventListener('click', function(evento) {
        if (evento.target !== input && evento.target !== caixaSugestoes) {
            caixaSugestoes.classList.add('escondido');
        }
    });
}

export function gerarCardPalpite(estacao, alvo, listaEstacoes, cores) {
    const novoCard = document.createElement('div');
    novoCard.className = 'card-palpite';

    const seta = calcularDirecao(estacao, alvo);
    const distReal = calcularDistancia(estacao.id, alvo.id, listaEstacoes);
    const textoDistancia = distReal === 0 ? "🎉" : `${distReal} est.`;

    novoCard.innerHTML = `
        <div class="card-conteudo">
            <span>${estacao.nome}</span>
            <div class="info-palpite" style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.2rem;">${seta}</span>
                <span style="margin-right: 15px; font-weight: bold;">${textoDistancia}</span>
            </div>
        </div>
    `;

    const containerCores = document.createElement('div');
    containerCores.className = 'barra-cores';

    estacao.linha.forEach(cor => {
        const pedacoCor = document.createElement('div');
        pedacoCor.className = 'faixa-cor';
        pedacoCor.style.backgroundColor = cores[cor];
        containerCores.appendChild(pedacoCor);
    });

    novoCard.appendChild(containerCores);
    return novoCard;
}

export function exibirModalVitoria(nomeEstacao, qtdPalpites) {
    document.getElementById('nome-estacao-alvo').textContent = nomeEstacao;
    document.getElementById('contagem-palpites').textContent = qtdPalpites;
    document.getElementById('modal-vitoria').classList.remove('escondido');
}

export function atualizarPlacarSprint(acertos, pulos, palpites) {
    document.getElementById('placar-sprint').textContent = `✅ ${acertos} | ⏭️ ${pulos} | ❌ ${palpites}`;
}