// Remove acentos, til, cedilha e deixa tudo minúsculo
export function normalizarTexto(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Define a seta baseada no ângulo
export function calcularDirecao(estacaoChutada, estacaoAlvo) {
    const dx = estacaoAlvo.coordx - estacaoChutada.coordx;
    const dy = estacaoAlvo.coordy - estacaoChutada.coordy;
    let angulo = Math.atan2(dy, dx) * (180 / Math.PI);
    if (angulo < 0) angulo += 360;

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
export function calcularDistancia(idInicio, idAlvo, listaEstacoes) {
    if (idInicio === idAlvo) return 0;
    let fila = [{ id: idInicio, distancia: 0 }];
    let visitados = new Set();
    visitados.add(idInicio);

    while (fila.length > 0) {
        let atual = fila.shift();
        let dadosEstacao = listaEstacoes.find(e => e.id === atual.id);

        if (dadosEstacao && dadosEstacao.conexoes) {
            for (let vizinhoId of dadosEstacao.conexoes) {
                if (vizinhoId === idAlvo) return atual.distancia + 1;
                if (!visitados.has(vizinhoId)) {
                    visitados.add(vizinhoId);
                    fila.push({ id: vizinhoId, distancia: atual.distancia + 1 });
                }
            }
        }
    }
    return "N/A"; 
}