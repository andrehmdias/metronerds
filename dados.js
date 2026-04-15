const todasEstacoes = [
    // ==========================================
    // LINHA 1 - AZUL 
    // ==========================================
    { "id": "tucuruvi", "nome": "Tucuruvi", "linha": ["azul"], "zona": "norte", "coordy": -23.4804, "coordx": -46.6038, "conexoes": ["parada_inglesa"] },
    { "id": "parada_inglesa", "nome": "Parada Inglesa", "linha": ["azul"], "zona": "norte", "coordy": -23.4876, "coordx": -46.6088, "conexoes": ["tucuruvi", "jardim_sao_paulo"] },
    { "id": "jardim_sao_paulo", "nome": "Jardim São Paulo-Ayrton Sena", "linha": ["azul"], "zona": "norte", "coordy": -23.4923, "coordx": -46.6171, "conexoes": ["parada_inglesa", "santana"] },
    { "id": "santana", "nome": "Santana", "linha": ["azul"], "zona": "norte", "coordy": -23.5026, "coordx": -46.6247, "conexoes": ["jardim_sao_paulo", "carandiru"] },
    { "id": "carandiru", "nome": "Carandiru", "linha": ["azul"], "zona": "norte", "coordy": -23.5090, "coordx": -46.6247, "conexoes": ["santana", "tiete"] },
    { "id": "tiete", "nome": "Tietê", "linha": ["azul"], "zona": "norte", "coordy": -23.5165, "coordx": -46.6263, "conexoes": ["carandiru", "armenia"] },
    { "id": "armenia", "nome": "Armênia", "linha": ["azul"], "zona": "centro", "coordy": -23.5252, "coordx": -46.6284, "conexoes": ["tiete", "tiradentes"] },
    { "id": "tiradentes", "nome": "Tiradentes", "linha": ["azul"], "zona": "centro", "coordy": -23.5303, "coordx": -46.6322, "conexoes": ["armenia", "luz"] },
    { "id": "luz", "nome": "Luz", "linha": ["azul", "amarela"], "zona": "centro", "coordy": -23.5361, "coordx": -46.6342, "conexoes": ["tiradentes", "sao_bento", "republica"] }, 
    { "id": "sao_bento", "nome": "São Bento", "linha": ["azul"], "zona": "centro", "coordy": -23.5434, "coordx": -46.6331, "conexoes": ["luz", "se"] },
    { "id": "se", "nome": "Sé", "linha": ["azul", "vermelha"], "zona": "centro", "coordy": -23.5499, "coordx": -46.6333, "conexoes": ["sao_bento", "liberdade", "anhangabau", "pedro_ii"] }, 
    { "id": "liberdade", "nome": "Japão-Liberdade", "linha": ["azul"], "zona": "centro", "coordy": -23.5583, "coordx": -46.6358, "conexoes": ["se", "sao_joaquim"] },
    { "id": "sao_joaquim", "nome": "São Joaquim", "linha": ["azul"], "zona": "centro", "coordy": -23.5618, "coordx": -46.6388, "conexoes": ["liberdade", "vergueiro"] },
    { "id": "vergueiro", "nome": "Vergueiro", "linha": ["azul"], "zona": "sul", "coordy": -23.5684, "coordx": -46.6397, "conexoes": ["sao_joaquim", "paraiso"] },
    { "id": "paraiso", "nome": "Paraíso", "linha": ["azul", "verde"], "zona": "sul", "coordy": -23.5768, "coordx": -46.6397, "conexoes": ["vergueiro", "ana_rosa", "brigadeiro"] }, 
    { "id": "ana_rosa", "nome": "Ana Rosa", "linha": ["azul", "verde"], "zona": "sul", "coordy": -23.5822, "coordx": -46.6381, "conexoes": ["paraiso", "vila_mariana", "chacara_klabin"] }, 
    { "id": "vila_mariana", "nome": "Vila Mariana", "linha": ["azul"], "zona": "sul", "coordy": -23.5894, "coordx": -46.6329, "conexoes": ["ana_rosa", "santa_cruz"] },
    { "id": "santa_cruz", "nome": "Santa Cruz", "linha": ["azul", "lilas"], "zona": "sul", "coordy": -23.5990, "coordx": -46.6366, "conexoes": ["vila_mariana", "praca_da_arvore", "hospital_sao_paulo", "chacara_klabin"] }, 
    { "id": "praca_da_arvore", "nome": "Praça da Árvore", "linha": ["azul"], "zona": "sul", "coordy": -23.6105, "coordx": -46.6384, "conexoes": ["santa_cruz", "saude"] },
    { "id": "saude", "nome": "Saúde", "linha": ["azul"], "zona": "sul", "coordy": -23.6186, "coordx": -46.6394, "conexoes": ["praca_da_arvore", "sao_judas"] },
    { "id": "sao_judas", "nome": "São Judas", "linha": ["azul"], "zona": "sul", "coordy": -23.6253, "coordx": -46.6402, "conexoes": ["saude", "conceicao"] },
    { "id": "conceicao", "nome": "Conceição", "linha": ["azul"], "zona": "sul", "coordy": -23.6358, "coordx": -46.6409, "conexoes": ["sao_judas", "jabaquara"] },
    { "id": "jabaquara", "nome": "Jabaquara", "linha": ["azul"], "zona": "sul", "coordy": -23.6465, "coordx": -46.6416, "conexoes": ["conceicao"] },

    // ==========================================
    // LINHA 2 - VERDE 
    // ==========================================
    { "id": "vila_madalena", "nome": "Vila Madalena", "linha": ["verde"], "zona": "oeste", "coordy": -23.5460, "coordx": -46.6890, "conexoes": ["clinicas"] },
    { "id": "clinicas", "nome": "Clínicas", "linha": ["verde"], "zona": "oeste", "coordy": -23.5550, "coordx": -46.6710, "conexoes": ["vila_madalena", "consolacao"] },
    { "id": "consolacao", "nome": "Consolação", "linha": ["verde"], "zona": "centro", "coordy": -23.5580, "coordx": -46.6600, "conexoes": ["clinicas", "trianon_masp", "paulista"] }, // Túnel para L4!
    { "id": "trianon_masp", "nome": "Trianon-Masp", "linha": ["verde"], "zona": "centro", "coordy": -23.5630, "coordx": -46.6540, "conexoes": ["consolacao", "brigadeiro"] },
    { "id": "brigadeiro", "nome": "Brigadeiro", "linha": ["verde"], "zona": "centro", "coordy": -23.5680, "coordx": -46.6480, "conexoes": ["trianon_masp", "paraiso"] },
    { "id": "chacara_klabin", "nome": "Chácara Klabin", "linha": ["verde", "lilas"], "zona": "sul", "coordy": -23.5930, "coordx": -46.6300, "conexoes": ["ana_rosa", "santos_imigrantes", "santa_cruz"] },
    { "id": "santos_imigrantes", "nome": "Santos-Imigrantes", "linha": ["verde"], "zona": "sul", "coordy": -23.5960, "coordx": -46.6200, "conexoes": ["chacara_klabin", "alto_do_ipiranga"] },
    { "id": "alto_do_ipiranga", "nome": "Alto do Ipiranga", "linha": ["verde"], "zona": "sul", "coordy": -23.6020, "coordx": -46.6120, "conexoes": ["santos_imigrantes", "sacoma"] },
    { "id": "sacoma", "nome": "Sacomã", "linha": ["verde"], "zona": "sul", "coordy": -23.6030, "coordx": -46.5930, "conexoes": ["alto_do_ipiranga", "tamanduatei"] },
    { "id": "tamanduatei", "nome": "Tamanduateí", "linha": ["verde"], "zona": "leste", "coordy": -23.5930, "coordx": -46.5890, "conexoes": ["sacoma", "vila_prudente"] },
    { "id": "vila_prudente", "nome": "Vila Prudente", "linha": ["verde", "prata"], "zona": "leste", "coordy": -23.5840, "coordx": -46.5810, "conexoes": ["tamanduatei", "oratorio"] },

    // ==========================================
    // LINHA 3 - VERMELHA 
    // ==========================================
    { "id": "palmeiras_barra_funda", "nome": "Palmeiras-Barra Funda", "linha": ["vermelha"], "zona": "oeste", "coordy": -23.5250, "coordx": -46.6670, "conexoes": ["marechal_deodoro"] },
    { "id": "marechal_deodoro", "nome": "Marechal Deodoro", "linha": ["vermelha"], "zona": "centro", "coordy": -23.5330, "coordx": -46.6550, "conexoes": ["palmeiras_barra_funda", "santa_cecilia"] },
    { "id": "santa_cecilia", "nome": "Santa Cecília", "linha": ["vermelha"], "zona": "centro", "coordy": -23.5380, "coordx": -46.6490, "conexoes": ["marechal_deodoro", "republica"] },
    { "id": "anhangabau", "nome": "Anhangabaú", "linha": ["vermelha"], "zona": "centro", "coordy": -23.5480, "coordx": -46.6380, "conexoes": ["republica", "se"] },
    { "id": "pedro_ii", "nome": "Pedro II", "linha": ["vermelha"], "zona": "centro", "coordy": -23.5490, "coordx": -46.6260, "conexoes": ["se", "bras"] },
    { "id": "bras", "nome": "Brás", "linha": ["vermelha"], "zona": "centro", "coordy": -23.5470, "coordx": -46.6160, "conexoes": ["pedro_ii", "bresser_mooca"] },
    { "id": "bresser_mooca", "nome": "Bresser-Mooca", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5460, "coordx": -46.6060, "conexoes": ["bras", "belem"] },
    { "id": "belem", "nome": "Belém", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5430, "coordx": -46.5920, "conexoes": ["bresser_mooca", "tatuape"] },
    { "id": "tatuape", "nome": "Tatuapé", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5400, "coordx": -46.5760, "conexoes": ["belem", "carrao"] },
    { "id": "carrao", "nome": "Carrão", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5370, "coordx": -46.5640, "conexoes": ["tatuape", "penha"] },
    { "id": "penha", "nome": "Penha", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5330, "coordx": -46.5390, "conexoes": ["carrao", "vila_matilde"] },
    { "id": "vila_matilde", "nome": "Vila Matilde", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5310, "coordx": -46.5310, "conexoes": ["penha", "guilhermina_esperanca"] },
    { "id": "guilhermina_esperanca", "nome": "Guilhermina-Esperança", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5290, "coordx": -46.5160, "conexoes": ["vila_matilde", "patriarca"] },
    { "id": "patriarca", "nome": "Patriarca", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5260, "coordx": -46.5010, "conexoes": ["guilhermina_esperanca", "artur_alvim"] },
    { "id": "artur_alvim", "nome": "Artur Alvim", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5390, "coordx": -46.4840, "conexoes": ["patriarca", "corinthians_itaquera"] },
    { "id": "corinthians_itaquera", "nome": "Corinthians-Itaquera", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5420, "coordx": -46.4730, "conexoes": ["artur_alvim"] },

    // ==========================================
    // LINHA 4 - AMARELA 
    // ==========================================
    { "id": "republica", "nome": "República", "linha": ["amarela", "vermelha"], "zona": "centro", "coordy": -23.5434, "coordx": -46.6425, "conexoes": ["luz", "higienopolis_mackenzie", "santa_cecilia", "anhangabau"] },
    { "id": "higienopolis_mackenzie", "nome": "Higienópolis-Mackenzie", "linha": ["amarela"], "zona": "centro", "coordy": -23.5489, "coordx": -46.6521, "conexoes": ["republica", "paulista"] },
    { "id": "paulista", "nome": "Paulista", "linha": ["amarela"], "zona": "centro", "coordy": -23.5552, "coordx": -46.6617, "conexoes": ["higienopolis_mackenzie", "oscar_freire", "consolacao"] },
    { "id": "oscar_freire", "nome": "Oscar Freire", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5606, "coordx": -46.6719, "conexoes": ["paulista", "fradique_coutinho"] },
    { "id": "fradique_coutinho", "nome": "Fradique Coutinho", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5663, "coordx": -46.6841, "conexoes": ["oscar_freire", "faria_lima"] },
    { "id": "faria_lima", "nome": "Faria Lima", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5673, "coordx": -46.6946, "conexoes": ["fradique_coutinho", "pinheiros"] },
    { "id": "pinheiros", "nome": "Pinheiros", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5664, "coordx": -46.7030, "conexoes": ["faria_lima", "butanta"] },
    { "id": "butanta", "nome": "Butantã", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5714, "coordx": -46.7082, "conexoes": ["pinheiros", "sao_paulo_morumbi"] },
    { "id": "sao_paulo_morumbi", "nome": "São Paulo-Morumbi", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5855, "coordx": -46.7235, "conexoes": ["butanta", "vila_sonia"] },
    { "id": "vila_sonia", "nome": "Vila Sônia", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5935, "coordx": -46.7356, "conexoes": ["sao_paulo_morumbi"] },

    // ==========================================
    // LINHA 5 - LILÁS
    // ==========================================
    { "id": "capao_redondo", "nome": "Capão Redondo", "linha": ["lilas"], "zona": "sul", "coordy": -23.6450, "coordx": -46.7760, "conexoes": ["campo_limpo"] },
    { "id": "campo_limpo", "nome": "Campo Limpo", "linha": ["lilas"], "zona": "sul", "coordy": -23.6450, "coordx": -46.7620, "conexoes": ["capao_redondo", "vila_das_belezas"] },
    { "id": "vila_das_belezas", "nome": "Vila das Belezas", "linha": ["lilas"], "zona": "sul", "coordy": -23.6420, "coordx": -46.7460, "conexoes": ["campo_limpo", "giovanni_gronchi"] },
    { "id": "giovanni_gronchi", "nome": "Giovanni Gronchi", "linha": ["lilas"], "zona": "sul", "coordy": -23.6440, "coordx": -46.7330, "conexoes": ["vila_das_belezas", "santo_amaro"] },
    { "id": "santo_amaro", "nome": "Santo Amaro", "linha": ["lilas"], "zona": "sul", "coordy": -23.6550, "coordx": -46.7180, "conexoes": ["giovanni_gronchi", "largo_treze"] },
    { "id": "largo_treze", "nome": "Largo Treze", "linha": ["lilas"], "zona": "sul", "coordy": -23.6540, "coordx": -46.7080, "conexoes": ["santo_amaro", "adolfo_pinheiro"] },
    { "id": "adolfo_pinheiro", "nome": "Adolfo Pinheiro", "linha": ["lilas"], "zona": "sul", "coordy": -23.6480, "coordx": -46.7050, "conexoes": ["largo_treze", "alto_da_boa_vista"] },
    { "id": "alto_da_boa_vista", "nome": "Alto da Boa Vista", "linha": ["lilas"], "zona": "sul", "coordy": -23.6400, "coordx": -46.6990, "conexoes": ["adolfo_pinheiro", "borba_gato"] },
    { "id": "borba_gato", "nome": "Borba Gato", "linha": ["lilas"], "zona": "sul", "coordy": -23.6330, "coordx": -46.6940, "conexoes": ["alto_da_boa_vista", "brooklin"] },
    { "id": "brooklin", "nome": "Brooklin", "linha": ["lilas"], "zona": "sul", "coordy": -23.6260, "coordx": -46.6880, "conexoes": ["borba_gato", "campo_belo"] },
    { "id": "campo_belo", "nome": "Campo Belo", "linha": ["lilas"], "zona": "sul", "coordy": -23.6200, "coordx": -46.6840, "conexoes": ["brooklin", "eucaliptos"] },
    { "id": "eucaliptos", "nome": "Eucaliptos", "linha": ["lilas"], "zona": "sul", "coordy": -23.6120, "coordx": -46.6710, "conexoes": ["campo_belo", "moema"] },
    { "id": "moema", "nome": "Moema", "linha": ["lilas"], "zona": "sul", "coordy": -23.6040, "coordx": -46.6620, "conexoes": ["eucaliptos", "aacd_servidor"] },
    { "id": "aacd_servidor", "nome": "AACD-Servidor", "linha": ["lilas"], "zona": "sul", "coordy": -23.5970, "coordx": -46.6500, "conexoes": ["moema", "hospital_sao_paulo"] },
    { "id": "hospital_sao_paulo", "nome": "Hospital São Paulo", "linha": ["lilas"], "zona": "sul", "coordy": -23.5980, "coordx": -46.6430, "conexoes": ["aacd_servidor", "santa_cruz"] },

    // ==========================================
    // LINHA 15 - PRATA (Monotrilho)
    // ==========================================
    { "id": "oratorio", "nome": "Oratório", "linha": ["prata"], "zona": "leste", "coordy": -23.5860, "coordx": -46.5660, "conexoes": ["vila_prudente", "sao_lucas"] },
    { "id": "sao_lucas", "nome": "São Lucas", "linha": ["prata"], "zona": "leste", "coordy": -23.5880, "coordx": -46.5510, "conexoes": ["oratorio", "camilo_haddad"] },
    { "id": "camilo_haddad", "nome": "Camilo Haddad", "linha": ["prata"], "zona": "leste", "coordy": -23.5920, "coordx": -46.5410, "conexoes": ["sao_lucas", "vila_tolstoi"] },
    { "id": "vila_tolstoi", "nome": "Vila Tolstói", "linha": ["prata"], "zona": "leste", "coordy": -23.5980, "coordx": -46.5320, "conexoes": ["camilo_haddad", "vila_uniao"] },
    { "id": "vila_uniao", "nome": "Vila União", "linha": ["prata"], "zona": "leste", "coordy": -23.6040, "coordx": -46.5200, "conexoes": ["vila_tolstoi", "jardim_planalto"] },
    { "id": "jardim_planalto", "nome": "Jardim Planalto", "linha": ["prata"], "zona": "leste", "coordy": -23.6080, "coordx": -46.5100, "conexoes": ["vila_uniao", "sapopemba"] },
    { "id": "sapopemba", "nome": "Sapopemba", "linha": ["prata"], "zona": "leste", "coordy": -23.6130, "coordx": -46.4980, "conexoes": ["jardim_planalto", "fazenda_da_juta"] },
    { "id": "fazenda_da_juta", "nome": "Fazenda da Juta", "linha": ["prata"], "zona": "leste", "coordy": -23.6160, "coordx": -46.4860, "conexoes": ["sapopemba", "sao_mateus"] },
    { "id": "sao_mateus", "nome": "São Mateus", "linha": ["prata"], "zona": "leste", "coordy": -23.6150, "coordx": -46.4630, "conexoes": ["fazenda_da_juta", "jardim_colonial"] },
    { "id": "jardim_colonial", "nome": "Jardim Colonial", "linha": ["prata"], "zona": "leste", "coordy": -23.6140, "coordx": -46.4520, "conexoes": ["sao_mateus"] }
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