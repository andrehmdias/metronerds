const todasEstacoes = [
    // ==========================================
    // LINHA 1 - AZUL 
    // ==========================================
    { "id": "tucuruvi", "nome": "Tucuruvi", "linha": ["azul"], "zona": "norte", "coordy": -23.480397, "coordx": -46.603886, "conexoes": ["parada_inglesa"] },
    { "id": "parada_inglesa", "nome": "Parada Inglesa", "linha": ["azul"], "zona": "norte", "coordy": -23.487814, "coordx": -46.608354, "conexoes": ["tucuruvi", "jardim_sao_paulo"] },
    { "id": "jardim_sao_paulo", "nome": "Jardim São Paulo-Ayrton Sena", "linha": ["azul"], "zona": "norte", "coordy": -23.492500, "coordx": -46.616667, "conexoes": ["parada_inglesa", "santana"] },
    { "id": "santana", "nome": "Santana", "linha": ["azul"], "zona": "norte", "coordy": -23.502555, "coordx": -46.624722, "conexoes": ["jardim_sao_paulo", "carandiru"] },
    { "id": "carandiru", "nome": "Carandiru", "linha": ["azul"], "zona": "norte", "coordy": -23.508889, "coordx": -46.624722, "conexoes": ["santana", "tiete"] },
    { "id": "tiete", "nome": "Tietê", "linha": ["azul"], "zona": "norte", "coordy": -23.516111, "coordx": -46.625556, "conexoes": ["carandiru", "armenia"] },
    { "id": "armenia", "nome": "Armênia", "linha": ["azul"], "zona": "centro", "coordy": -23.525556, "coordx": -46.628333, "conexoes": ["tiete", "tiradentes"] },
    { "id": "tiradentes", "nome": "Tiradentes", "linha": ["azul"], "zona": "centro", "coordy": -23.530556, "coordx": -46.632222, "conexoes": ["armenia", "luz"] },
    { "id": "luz", "nome": "Luz", "linha": ["azul", "amarela"], "zona": "centro", "coordy": -23.536389, "coordx": -46.633889, "conexoes": ["tiradentes", "sao_bento", "republica"] }, 
    { "id": "sao_bento", "nome": "São Bento", "linha": ["azul"], "zona": "centro", "coordy": -23.543056, "coordx": -46.633056, "conexoes": ["luz", "se"] },
    { "id": "se", "nome": "Sé", "linha": ["azul", "vermelha"], "zona": "centro", "coordy": -23.550100, "coordx": -46.633300, "conexoes": ["sao_bento", "liberdade", "anhangabau", "pedro_ii"] }, 
    { "id": "liberdade", "nome": "Japão-Liberdade", "linha": ["azul"], "zona": "centro", "coordy": -23.558333, "coordx": -46.635833, "conexoes": ["se", "sao_joaquim"] },
    { "id": "sao_joaquim", "nome": "São Joaquim", "linha": ["azul"], "zona": "centro", "coordy": -23.561944, "coordx": -46.638611, "conexoes": ["liberdade", "vergueiro"] },
    { "id": "vergueiro", "nome": "Vergueiro", "linha": ["azul"], "zona": "sul", "coordy": -23.568333, "coordx": -46.639722, "conexoes": ["sao_joaquim", "paraiso"] },
    { "id": "paraiso", "nome": "Paraíso", "linha": ["azul", "verde"], "zona": "sul", "coordy": -23.576800, "coordx": -46.639700, "conexoes": ["vergueiro", "ana_rosa", "brigadeiro"] }, 
    { "id": "ana_rosa", "nome": "Ana Rosa", "linha": ["azul", "verde"], "zona": "sul", "coordy": -23.582222, "coordx": -46.638056, "conexoes": ["paraiso", "vila_mariana", "chacara_klabin"] }, 
    { "id": "vila_mariana", "nome": "Vila Mariana", "linha": ["azul"], "zona": "sul", "coordy": -23.589581630851754, "coordx": -46.634376600362, "conexoes": ["ana_rosa", "santa_cruz"] },
    { "id": "santa_cruz", "nome": "Santa Cruz", "linha": ["azul", "lilas"], "zona": "sul", "coordy": -23.598889, "coordx": -46.636389, "conexoes": ["vila_mariana", "praca_da_arvore", "hospital_sao_paulo", "chacara_klabin"] }, 
    { "id": "praca_da_arvore", "nome": "Praça da Árvore", "linha": ["azul"], "zona": "sul", "coordy": -23.610556, "coordx": -46.638400, "conexoes": ["santa_cruz", "saude"] },
    { "id": "saude", "nome": "Saúde", "linha": ["azul"], "zona": "sul", "coordy": -23.618611, "coordx": -46.639444, "conexoes": ["praca_da_arvore", "sao_judas"] },
    { "id": "sao_judas", "nome": "São Judas", "linha": ["azul"], "zona": "sul", "coordy": -23.625278, "coordx": -46.640278, "conexoes": ["saude", "conceicao"] },
    { "id": "conceicao", "nome": "Conceição", "linha": ["azul"], "zona": "sul", "coordy": -23.635556, "coordx": -46.640556, "conexoes": ["sao_judas", "jabaquara"] },
    { "id": "jabaquara", "nome": "Jabaquara", "linha": ["azul"], "zona": "sul", "coordy": -23.646500, "coordx": -46.641389, "conexoes": ["conceicao"] },

    // ==========================================
    // LINHA 2 - VERDE 
    // ==========================================
    { "id": "vila_madalena", "nome": "Vila Madalena", "linha": ["verde"], "zona": "oeste", "coordy": -23.544722, "coordx": -46.690000, "conexoes": ["clinicas"] },
    { "id": "clinicas", "nome": "Clínicas", "linha": ["verde"], "zona": "oeste", "coordy": -23.554722, "coordx": -46.671389, "conexoes": ["vila_madalena", "consolacao"] },
    { "id": "consolacao", "nome": "Consolação", "linha": ["verde"], "zona": "centro", "coordy": -23.558000, "coordx": -46.660000, "conexoes": ["clinicas", "trianon_masp", "paulista"] },
    { "id": "trianon_masp", "nome": "Trianon-Masp", "linha": ["verde"], "zona": "centro", "coordy": -23.563056, "coordx": -46.653611, "conexoes": ["consolacao", "brigadeiro"] },
    { "id": "brigadeiro", "nome": "Brigadeiro", "linha": ["verde"], "zona": "centro", "coordy": -23.568611, "coordx": -46.648056, "conexoes": ["trianon_masp", "paraiso"] },
    { "id": "chacara_klabin", "nome": "Chácara Klabin", "linha": ["verde", "lilas"], "zona": "sul", "coordy": -23.592500, "coordx": -46.629722, "conexoes": ["ana_rosa", "santos_imigrantes", "santa_cruz"] },
    { "id": "santos_imigrantes", "nome": "Santos-Imigrantes", "linha": ["verde"], "zona": "sul", "coordy": -23.595556, "coordx": -46.620278, "conexoes": ["chacara_klabin", "alto_do_ipiranga"] },
    { "id": "alto_do_ipiranga", "nome": "Alto do Ipiranga", "linha": ["verde"], "zona": "sul", "coordy": -23.602222, "coordx": -46.612500, "conexoes": ["santos_imigrantes", "sacoma"] },
    { "id": "sacoma", "nome": "Sacomã", "linha": ["verde"], "zona": "sul", "coordy": -23.602778, "coordx": -46.592778, "conexoes": ["alto_do_ipiranga", "tamanduatei"] },
    { "id": "tamanduatei", "nome": "Tamanduateí", "linha": ["verde"], "zona": "leste", "coordy": -23.592778, "coordx": -46.589444, "conexoes": ["sacoma", "vila_prudente"] },
    { "id": "vila_prudente", "nome": "Vila Prudente", "linha": ["verde", "prata"], "zona": "leste", "coordy": -23.584444, "coordx": -46.581667, "conexoes": ["tamanduatei", "oratorio"] },

    // ==========================================
    // LINHA 3 - VERMELHA 
    // ==========================================
    { "id": "palmeiras_barra_funda", "nome": "Palmeiras-Barra Funda", "linha": ["vermelha"], "zona": "oeste", "coordy": -23.525556, "coordx": -46.667222, "conexoes": ["marechal_deodoro"] },
    { "id": "marechal_deodoro", "nome": "Marechal Deodoro", "linha": ["vermelha"], "zona": "centro", "coordy": -23.533056, "coordx": -46.655278, "conexoes": ["palmeiras_barra_funda", "santa_cecilia"] },
    { "id": "santa_cecilia", "nome": "Santa Cecília", "linha": ["vermelha"], "zona": "centro", "coordy": -23.538333, "coordx": -46.648611, "conexoes": ["marechal_deodoro", "republica"] },
    { "id": "anhangabau", "nome": "Anhangabaú", "linha": ["vermelha"], "zona": "centro", "coordy": -23.547778, "coordx": -46.638333, "conexoes": ["republica", "se"] },
    { "id": "pedro_ii", "nome": "Pedro II", "linha": ["vermelha"], "zona": "centro", "coordy": -23.549444, "coordx": -46.626111, "conexoes": ["se", "bras"] },
    { "id": "bras", "nome": "Brás", "linha": ["vermelha"], "zona": "centro", "coordy": -23.547222, "coordx": -46.616111, "conexoes": ["pedro_ii", "bresser_mooca"] },
    { "id": "bresser_mooca", "nome": "Bresser-Mooca", "linha": ["vermelha"], "zona": "leste", "coordy": -23.546389, "coordx": -46.606389, "conexoes": ["bras", "belem"] },
    { "id": "belem", "nome": "Belém", "linha": ["vermelha"], "zona": "leste", "coordy": -23.543333, "coordx": -46.592222, "conexoes": ["bresser_mooca", "tatuape"] },
    { "id": "tatuape", "nome": "Tatuapé", "linha": ["vermelha"], "zona": "leste", "coordy": -23.540278, "coordx": -46.576667, "conexoes": ["belem", "carrao"] },
    { "id": "carrao", "nome": "Carrão", "linha": ["vermelha"], "zona": "leste", "coordy": -23.537778, "coordx": -46.564167, "conexoes": ["tatuape", "penha"] },
    { "id": "penha", "nome": "Penha", "linha": ["vermelha"], "zona": "leste", "coordy": -23.533333, "coordx": -46.539722, "conexoes": ["carrao", "vila_matilde"] },
    { "id": "vila_matilde", "nome": "Vila Matilde", "linha": ["vermelha"], "zona": "leste", "coordy": -23.531389, "coordx": -46.531111, "conexoes": ["penha", "guilhermina_esperanca"] },
    { "id": "guilhermina_esperanca", "nome": "Guilhermina-Esperança", "linha": ["vermelha"], "zona": "leste", "coordy": -23.529444, "coordx": -46.516667, "conexoes": ["vila_matilde", "patriarca"] },
    { "id": "patriarca", "nome": "Patriarca", "linha": ["vermelha"], "zona": "leste", "coordy": -23.531128842298784, "coordx": -46.50150244451661, "conexoes": ["guilhermina_esperanca", "artur_alvim"] },
    { "id": "artur_alvim", "nome": "Artur Alvim", "linha": ["vermelha"], "zona": "leste", "coordy": -23.539722, "coordx": -46.484444, "conexoes": ["patriarca", "corinthians_itaquera"] },
    { "id": "corinthians_itaquera", "nome": "Corinthians-Itaquera", "linha": ["vermelha"], "zona": "leste", "coordy": -23.542778, "coordx": -46.473056, "conexoes": ["artur_alvim"] },

    // ==========================================
    // LINHA 4 - AMARELA 
    // ==========================================
    { "id": "republica", "nome": "República", "linha": ["amarela", "vermelha"], "zona": "centro", "coordy": -23.543611, "coordx": -46.642500, "conexoes": ["luz", "higienopolis_mackenzie", "santa_cecilia", "anhangabau"] },
    { "id": "higienopolis_mackenzie", "nome": "Higienópolis-Mackenzie", "linha": ["amarela"], "zona": "centro", "coordy": -23.548611, "coordx": -46.652222, "conexoes": ["republica", "paulista"] },
    { "id": "paulista", "nome": "Paulista", "linha": ["amarela"], "zona": "centro", "coordy": -23.555278, "coordx": -46.661389, "conexoes": ["higienopolis_mackenzie", "oscar_freire", "consolacao"] },
    { "id": "oscar_freire", "nome": "Oscar Freire", "linha": ["amarela"], "zona": "oeste", "coordy": -23.560556, "coordx": -46.671944, "conexoes": ["paulista", "fradique_coutinho"] },
    { "id": "fradique_coutinho", "nome": "Fradique Coutinho", "linha": ["amarela"], "zona": "oeste", "coordy": -23.566111, "coordx": -46.684167, "conexoes": ["oscar_freire", "faria_lima"] },
    { "id": "faria_lima", "nome": "Faria Lima", "linha": ["amarela"], "zona": "oeste", "coordy": -23.567222, "coordx": -46.693889, "conexoes": ["fradique_coutinho", "pinheiros"] },
    { "id": "pinheiros", "nome": "Pinheiros", "linha": ["amarela"], "zona": "oeste", "coordy": -23.566667, "coordx": -46.702778, "conexoes": ["faria_lima", "butanta"] },
    { "id": "butanta", "nome": "Butantã", "linha": ["amarela"], "zona": "oeste", "coordy": -23.571400, "coordx": -46.708000, "conexoes": ["pinheiros", "sao_paulo_morumbi"] },
    { "id": "sao_paulo_morumbi", "nome": "São Paulo-Morumbi", "linha": ["amarela"], "zona": "oeste", "coordy": -23.585556, "coordx": -46.723333, "conexoes": ["butanta", "vila_sonia"] },
    { "id": "vila_sonia", "nome": "Vila Sônia", "linha": ["amarela"], "zona": "oeste", "coordy": -23.593500, "coordx": -46.735600, "conexoes": ["sao_paulo_morumbi"] },

    // ==========================================
    // LINHA 5 - LILÁS
    // ==========================================
    { "id": "capao_redondo", "nome": "Capão Redondo", "linha": ["lilas"], "zona": "sul", "coordy": -23.645556, "coordx": -46.776667, "conexoes": ["campo_limpo"] },
    { "id": "campo_limpo", "nome": "Campo Limpo", "linha": ["lilas"], "zona": "sul", "coordy": -23.649271, "coordx": -46.758994, "conexoes": ["capao_redondo", "vila_das_belezas"] },
    { "id": "vila_das_belezas", "nome": "Vila das Belezas", "linha": ["lilas"], "zona": "sul", "coordy": -23.642778, "coordx": -46.746111, "conexoes": ["campo_limpo", "giovanni_gronchi"] },
    { "id": "giovanni_gronchi", "nome": "Giovanni Gronchi", "linha": ["lilas"], "zona": "sul", "coordy": -23.644167, "coordx": -46.733333, "conexoes": ["vila_das_belezas", "santo_amaro"] },
    { "id": "santo_amaro", "nome": "Santo Amaro", "linha": ["lilas"], "zona": "sul", "coordy": -23.654722, "coordx": -46.718333, "conexoes": ["giovanni_gronchi", "largo_treze"] },
    { "id": "largo_treze", "nome": "Largo Treze", "linha": ["lilas"], "zona": "sul", "coordy": -23.654167, "coordx": -46.708056, "conexoes": ["santo_amaro", "adolfo_pinheiro"] },
    { "id": "adolfo_pinheiro", "nome": "Adolfo Pinheiro", "linha": ["lilas"], "zona": "sul", "coordy": -23.648333, "coordx": -46.705278, "conexoes": ["largo_treze", "alto_da_boa_vista"] },
    { "id": "alto_da_boa_vista", "nome": "Alto da Boa Vista", "linha": ["lilas"], "zona": "sul", "coordy": -23.640278, "coordx": -46.699167, "conexoes": ["adolfo_pinheiro", "borba_gato"] },
    { "id": "borba_gato", "nome": "Borba Gato", "linha": ["lilas"], "zona": "sul", "coordy": -23.633333, "coordx": -46.694167, "conexoes": ["alto_da_boa_vista", "brooklin"] },
    { "id": "brooklin", "nome": "Brooklin", "linha": ["lilas"], "zona": "sul", "coordy": -23.626111, "coordx": -46.688056, "conexoes": ["borba_gato", "campo_belo"] },
    { "id": "campo_belo", "nome": "Campo Belo", "linha": ["lilas"], "zona": "sul", "coordy": -23.620000, "coordx": -46.684444, "conexoes": ["brooklin", "eucaliptos"] },
    { "id": "eucaliptos", "nome": "Eucaliptos", "linha": ["lilas"], "zona": "sul", "coordy": -23.612500, "coordx": -46.671389, "conexoes": ["campo_belo", "moema"] },
    { "id": "moema", "nome": "Moema", "linha": ["lilas"], "zona": "sul", "coordy": -23.604167, "coordx": -46.662222, "conexoes": ["eucaliptos", "aacd_servidor"] },
    { "id": "aacd_servidor", "nome": "AACD-Servidor", "linha": ["lilas"], "zona": "sul", "coordy": -23.597500, "coordx": -46.650278, "conexoes": ["moema", "hospital_sao_paulo"] },
    { "id": "hospital_sao_paulo", "nome": "Hospital São Paulo", "linha": ["lilas"], "zona": "sul", "coordy": -23.598333, "coordx": -46.643333, "conexoes": ["aacd_servidor", "santa_cruz"] },

    // ==========================================
    // LINHA 15 - PRATA (Monotrilho)
    // ==========================================
    { "id": "oratorio", "nome": "Oratório", "linha": ["prata"], "zona": "leste", "coordy": -23.586389, "coordx": -46.566111, "conexoes": ["vila_prudente", "sao_lucas"] },
    { "id": "sao_lucas", "nome": "São Lucas", "linha": ["prata"], "zona": "leste", "coordy": -23.588611, "coordx": -46.551111, "conexoes": ["oratorio", "camilo_haddad"] },
    { "id": "camilo_haddad", "nome": "Camilo Haddad", "linha": ["prata"], "zona": "leste", "coordy": -23.592500, "coordx": -46.541389, "conexoes": ["sao_lucas", "vila_tolstoi"] },
    { "id": "vila_tolstoi", "nome": "Vila Tolstói", "linha": ["prata"], "zona": "leste", "coordy": -23.598611, "coordx": -46.532222, "conexoes": ["camilo_haddad", "vila_uniao"] },
    { "id": "vila_uniao", "nome": "Vila União", "linha": ["prata"], "zona": "leste", "coordy": -23.604444, "coordx": -46.520278, "conexoes": ["vila_tolstoi", "jardim_planalto"] },
    { "id": "jardim_planalto", "nome": "Jardim Planalto", "linha": ["prata"], "zona": "leste", "coordy": -23.608611, "coordx": -46.510278, "conexoes": ["vila_uniao", "sapopemba"] },
    { "id": "sapopemba", "nome": "Sapopemba", "linha": ["prata"], "zona": "leste", "coordy": -23.613611, "coordx": -46.498611, "conexoes": ["jardim_planalto", "fazenda_da_juta"] },
    { "id": "fazenda_da_juta", "nome": "Fazenda da Juta", "linha": ["prata"], "zona": "leste", "coordy": -23.616667, "coordx": -46.486667, "conexoes": ["sapopemba", "sao_mateus"] },
    { "id": "sao_mateus", "nome": "São Mateus", "linha": ["prata"], "zona": "leste", "coordy": -23.612265129057654, "coordx": -46.47739610771946, "conexoes": ["fazenda_da_juta", "jardim_colonial"] },
    { "id": "jardim_colonial", "nome": "Jardim Colonial", "linha": ["prata"], "zona": "leste", "coordy": -23.614444, "coordx": -46.452222, "conexoes": ["sao_mateus"] }
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
        "Linha 15 - Prata: Vila Prudente → Jardim Colonial", 
        "Linha 15 - Prata: Jardim Colonial → Vila Prudente"
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