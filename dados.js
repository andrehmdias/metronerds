const todasEstacoes = [
    // ==========================================
    // LINHA 1 - AZUL (Norte para Sul)
    // ==========================================
    { "id": "tucuruvi", "nome": "Tucuruvi", "linha": ["azul"], "zona": "norte", "coordy": -23.4804, "coordx": -46.6038, "conexoes": ["parada_inglesa"] },
    { "id": "parada_inglesa", "nome": "Parada Inglesa", "linha": ["azul"], "zona": "norte", "coordy": -23.4876, "coordx": -46.6088, "conexoes": ["tucuruvi", "jardim_sao_paulo"] },
    { "id": "jardim_sao_paulo", "nome": "Jardim São Paulo", "linha": ["azul"], "zona": "norte", "coordy": -23.4923, "coordx": -46.6171, "conexoes": ["parada_inglesa", "santana"] },
    { "id": "santana", "nome": "Santana", "linha": ["azul"], "zona": "norte", "coordy": -23.5026, "coordx": -46.6247, "conexoes": ["jardim_sao_paulo", "carandiru"] },
    { "id": "carandiru", "nome": "Carandiru", "linha": ["azul"], "zona": "norte", "coordy": -23.5090, "coordx": -46.6247, "conexoes": ["santana", "tiete"] },
    { "id": "tiete", "nome": "Tietê", "linha": ["azul"], "zona": "norte", "coordy": -23.5165, "coordx": -46.6263, "conexoes": ["carandiru", "armenia"] },
    { "id": "armenia", "nome": "Armênia", "linha": ["azul"], "zona": "centro", "coordy": -23.5252, "coordx": -46.6284, "conexoes": ["tiete", "tiradentes"] },
    { "id": "tiradentes", "nome": "Tiradentes", "linha": ["azul"], "zona": "centro", "coordy": -23.5303, "coordx": -46.6322, "conexoes": ["armenia", "luz"] },
    { "id": "luz", "nome": "Luz", "linha": ["azul", "amarela"], "zona": "centro", "coordy": -23.5361, "coordx": -46.6342, "conexoes": ["tiradentes", "sao_bento", "republica"] }, // Luz conecta com a Amarela!
    { "id": "sao_bento", "nome": "São Bento", "linha": ["azul"], "zona": "centro", "coordy": -23.5434, "coordx": -46.6331, "conexoes": ["luz", "se"] },
    { "id": "se", "nome": "Sé", "linha": ["azul", "vermelha"], "zona": "centro", "coordy": -23.5499, "coordx": -46.6333, "conexoes": ["sao_bento", "liberdade"] }, // Vamos ignorar a conexão vermelha por enquanto
    { "id": "liberdade", "nome": "Liberdade", "linha": ["azul"], "zona": "centro", "coordy": -23.5583, "coordx": -46.6358, "conexoes": ["se", "sao_joaquim"] },
    { "id": "sao_joaquim", "nome": "São Joaquim", "linha": ["azul"], "zona": "centro", "coordy": -23.5618, "coordx": -46.6388, "conexoes": ["liberdade", "vergueiro"] },
    { "id": "vergueiro", "nome": "Vergueiro", "linha": ["azul"], "zona": "sul", "coordy": -23.5684, "coordx": -46.6397, "conexoes": ["sao_joaquim", "paraiso"] },
    { "id": "paraiso", "nome": "Paraíso", "linha": ["azul", "verde"], "zona": "sul", "coordy": -23.5768, "coordx": -46.6397, "conexoes": ["vergueiro", "ana_rosa"] },
    { "id": "ana_rosa", "nome": "Ana Rosa", "linha": ["azul", "verde"], "zona": "sul", "coordy": -23.5822, "coordx": -46.6381, "conexoes": ["paraiso", "vila_mariana"] },
    { "id": "vila_mariana", "nome": "Vila Mariana", "linha": ["azul"], "zona": "sul", "coordy": -23.5894, "coordx": -46.6329, "conexoes": ["ana_rosa", "santa_cruz"] },
    { "id": "santa_cruz", "nome": "Santa Cruz", "linha": ["azul", "lilas"], "zona": "sul", "coordy": -23.5990, "coordx": -46.6366, "conexoes": ["vila_mariana", "praca_da_arvore"] },
    { "id": "praca_da_arvore", "nome": "Praça da Árvore", "linha": ["azul"], "zona": "sul", "coordy": -23.6105, "coordx": -46.6384, "conexoes": ["santa_cruz", "saude"] },
    { "id": "saude", "nome": "Saúde", "linha": ["azul"], "zona": "sul", "coordy": -23.6186, "coordx": -46.6394, "conexoes": ["praca_da_arvore", "sao_judas"] },
    { "id": "sao_judas", "nome": "São Judas", "linha": ["azul"], "zona": "sul", "coordy": -23.6253, "coordx": -46.6402, "conexoes": ["saude", "conceicao"] },
    { "id": "conceicao", "nome": "Conceição", "linha": ["azul"], "zona": "sul", "coordy": -23.6358, "coordx": -46.6409, "conexoes": ["sao_judas", "jabaquara"] },
    { "id": "jabaquara", "nome": "Jabaquara", "linha": ["azul"], "zona": "sul", "coordy": -23.6465, "coordx": -46.6416, "conexoes": ["conceicao"] },

    // ==========================================
    // LINHA 4 - AMARELA (Centro para Oeste)
    // Obs: A Luz já foi declarada lá em cima!
    // ==========================================
    { "id": "republica", "nome": "República", "linha": ["amarela", "vermelha"], "zona": "centro", "coordy": -23.5434, "coordx": -46.6425, "conexoes": ["luz", "higienopolis_mackenzie"] },
    { "id": "higienopolis_mackenzie", "nome": "Higienópolis-Mackenzie", "linha": ["amarela"], "zona": "centro", "coordy": -23.5489, "coordx": -46.6521, "conexoes": ["republica", "paulista"] },
    { "id": "paulista", "nome": "Paulista", "linha": ["amarela"], "zona": "centro", "coordy": -23.5552, "coordx": -46.6617, "conexoes": ["higienopolis_mackenzie", "oscar_freire"] },
    { "id": "oscar_freire", "nome": "Oscar Freire", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5606, "coordx": -46.6719, "conexoes": ["paulista", "fradique_coutinho"] },
    { "id": "fradique_coutinho", "nome": "Fradique Coutinho", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5663, "coordx": -46.6841, "conexoes": ["oscar_freire", "faria_lima"] },
    { "id": "faria_lima", "nome": "Faria Lima", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5673, "coordx": -46.6946, "conexoes": ["fradique_coutinho", "pinheiros"] },
    { "id": "pinheiros", "nome": "Pinheiros", "linha": ["amarela", "esmeralda"], "zona": "oeste", "coordy": -23.5664, "coordx": -46.7030, "conexoes": ["faria_lima", "butanta"] },
    { "id": "butanta", "nome": "Butantã", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5714, "coordx": -46.7082, "conexoes": ["pinheiros", "sao_paulo_morumbi"] },
    { "id": "sao_paulo_morumbi", "nome": "São Paulo-Morumbi", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5855, "coordx": -46.7235, "conexoes": ["butanta", "vila_sonia"] },
    { "id": "vila_sonia", "nome": "Vila Sônia", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5935, "coordx": -46.7356, "conexoes": ["sao_paulo_morumbi"] }
];

// Apenas para converter a cor simples no nome complexo do GeoJSON
const nomesOficiaisDasLinhas = {
    "azul": [
        "Linha 1 - Azul: Tucuruvi ⇒ Jabaquara", 
        "Linha 1 - Azul: Jabaquara ⇒ Tucuruvi"
    ],
    "verde": [
        "Linha 2 - Verde: Vila Madalena ⇒ Vila Prudente", 
        "Linha 2 - Verde: Vila Prudente ⇒ Vila Madalena"
    ],
    "vermelha": [
        "Linha 3 - Vermelha: Palmeiras - Barra Funda ⇒ Corinthians - Itaquera", 
        "Linha 3 - Vermelha: Corinthians - Itaquera ⇒ Palmeiras - Barra Funda"
    ],
    "amarela": [
        "Linha 4 - Amarela: Luz → Vila Sônia", 
        "Linha 4 - Amarela: Vila Sônia → Luz"
    ],
    "lilas": [
        "Linha 5 - Lilás: Capão Redondo → Chácara Klabin", 
        "Linha 5 - Lilás: Chácara Klabin → Capão Redondo"
    ],
    "prata": [
        "Linha 15 - Prata: Vila Prudente ⇒ Jardim Colonial", 
        "Linha 15 - Prata: Jardim Colonial ⇒ Vila Prudente"
    ]
};

const coresHex = { 
    "azul": "#0455A1", 
    "verde": "#008061", 
    "vermelha": "#EE3E34", 
    "amarela": "#F0D200", 
    "lilas": "#A54499", 
    "prata": "#8A8C8E" 
    };