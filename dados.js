const todasEstacoes = [
    // ==========================================
    // LINHA 1 - AZUL 
    // ==========================================
    { "id": "tucuruvi", "nome": "Tucuruvi", "linha": ["azul"], "zona": "norte", "coordy": -23.4800747, "coordx": -46.6032701, "conexoes": ["parada_inglesa"] },
    { "id": "parada_inglesa", "nome": "Parada Inglesa", "linha": ["azul"], "zona": "norte", "coordy": -23.4870228, "coordx": -46.6089306, "conexoes": ["tucuruvi", "jardim_sao_paulo"] },
    { "id": "jardim_sao_paulo", "nome": "Jardim São Paulo-Ayrton Sena", "linha": ["azul"], "zona": "norte", "coordy": -23.4924029, "coordx": -46.6170103, "conexoes": ["parada_inglesa", "santana"] },
    { "id": "santana", "nome": "Santana", "linha": ["azul"], "zona": "norte", "coordy": -23.5024374, "coordx": -46.6250887, "conexoes": ["jardim_sao_paulo", "carandiru"] },
    { "id": "carandiru", "nome": "Carandiru", "linha": ["azul"], "zona": "norte", "coordy": -23.5091285, "coordx": -46.6252025, "conexoes": ["santana", "tiete"] },
    { "id": "tiete", "nome": "Tietê", "linha": ["azul"], "zona": "norte", "coordy": -23.5162359, "coordx": -46.6254001, "conexoes": ["carandiru", "armenia"] },
    { "id": "armenia", "nome": "Armênia", "linha": ["azul"], "zona": "centro", "coordy": -23.5251483, "coordx": -46.6288763, "conexoes": ["tiete", "tiradentes"] },
    { "id": "tiradentes", "nome": "Tiradentes", "linha": ["azul"], "zona": "centro", "coordy": -23.5309113, "coordx": -46.6325376, "conexoes": ["armenia", "luz"] },
    { "id": "luz", "nome": "Luz", "linha": ["azul", "amarela"], "zona": "centro", "coordy": -23.5353887, "coordx": -46.6344383, "conexoes": ["tiradentes", "sao_bento", "republica"] }, 
    { "id": "sao_bento", "nome": "São Bento", "linha": ["azul"], "zona": "centro", "coordy": -23.5440297, "coordx": -46.6343110, "conexoes": ["luz", "se"] },
    { "id": "se", "nome": "Sé", "linha": ["azul", "vermelha"], "zona": "centro", "coordy": -23.5504428, "coordx": -46.6334463, "conexoes": ["sao_bento", "liberdade", "anhangabau", "pedro_ii"] }, 
    { "id": "liberdade", "nome": "Japão-Liberdade", "linha": ["azul"], "zona": "centro", "coordy": -23.5551768, "coordx": -46.6356017, "conexoes": ["se", "sao_joaquim"] },
    { "id": "sao_joaquim", "nome": "São Joaquim", "linha": ["azul"], "zona": "centro", "coordy": -23.5615965, "coordx": -46.6386084, "conexoes": ["liberdade", "vergueiro"] },
    { "id": "vergueiro", "nome": "Vergueiro", "linha": ["azul"], "zona": "sul", "coordy": -23.5685349, "coordx": -46.6399175, "conexoes": ["sao_joaquim", "paraiso"] },
    { "id": "paraiso", "nome": "Paraíso", "linha": ["azul", "verde"], "zona": "sul", "coordy": -23.5753859, "coordx": -46.6409603, "conexoes": ["vergueiro", "ana_rosa", "brigadeiro"] }, 
    { "id": "ana_rosa", "nome": "Ana Rosa", "linha": ["azul", "verde"], "zona": "sul", "coordy": -23.5813085, "coordx": -46.6383960, "conexoes": ["paraiso", "vila_mariana", "chacara_klabin"] }, 
    { "id": "vila_mariana", "nome": "Vila Mariana", "linha": ["azul"], "zona": "sul", "coordy": -23.589581630851754, "coordx": -46.634376600362, "conexoes": ["ana_rosa", "santa_cruz"] }, // <--- Manteve a sua manual
    { "id": "santa_cruz", "nome": "Santa Cruz", "linha": ["azul", "lilas"], "zona": "sul", "coordy": -23.5984141, "coordx": -46.6370429, "conexoes": ["vila_mariana", "praca_da_arvore", "hospital_sao_paulo", "chacara_klabin"] }, 
    { "id": "praca_da_arvore", "nome": "Praça da Árvore", "linha": ["azul"], "zona": "sul", "coordy": -23.6105051, "coordx": -46.6379193, "conexoes": ["santa_cruz", "saude"] },
    { "id": "saude", "nome": "Saúde", "linha": ["azul"], "zona": "sul", "coordy": -23.6182458, "coordx": -46.6391896, "conexoes": ["praca_da_arvore", "sao_judas"] },
    { "id": "sao_judas", "nome": "São Judas", "linha": ["azul"], "zona": "sul", "coordy": -23.6258085, "coordx": -46.6409209, "conexoes": ["saude", "conceicao"] },
    { "id": "conceicao", "nome": "Conceição", "linha": ["azul"], "zona": "sul", "coordy": -23.6350111, "coordx": -46.6412950, "conexoes": ["sao_judas", "jabaquara"] },
    { "id": "jabaquara", "nome": "Jabaquara", "linha": ["azul"], "zona": "sul", "coordy": -23.6463382, "coordx": -46.6410462, "conexoes": ["conceicao"] },

    // ==========================================
    // LINHA 2 - VERDE 
    // ==========================================
    { "id": "vila_madalena", "nome": "Vila Madalena", "linha": ["verde"], "zona": "oeste", "coordy": -23.5464956, "coordx": -46.6911243, "conexoes": ["clinicas"] },
    { "id": "clinicas", "nome": "Clínicas", "linha": ["verde"], "zona": "oeste", "coordy": -23.5540510, "coordx": -46.6708841, "conexoes": ["vila_madalena", "consolacao"] },
    { "id": "consolacao", "nome": "Consolação", "linha": ["verde"], "zona": "centro", "coordy": -23.5578180, "coordx": -46.6605373, "conexoes": ["clinicas", "trianon_masp", "paulista"] },
    { "id": "trianon_masp", "nome": "Trianon-Masp", "linha": ["verde"], "zona": "centro", "coordy": -23.5633121, "coordx": -46.6542028, "conexoes": ["consolacao", "brigadeiro"] },
    { "id": "brigadeiro", "nome": "Brigadeiro", "linha": ["verde"], "zona": "centro", "coordy": -23.5685890, "coordx": -46.6477629, "conexoes": ["trianon_masp", "paraiso"] },
    { "id": "chacara_klabin", "nome": "Chácara Klabin", "linha": ["verde", "lilas"], "zona": "sul", "coordy": -23.5926813, "coordx": -46.6306807, "conexoes": ["ana_rosa", "santos_imigrantes", "santa_cruz"] },
    { "id": "santos_imigrantes", "nome": "Santos-Imigrantes", "linha": ["verde"], "zona": "sul", "coordy": -23.5955675, "coordx": -46.6204040, "conexoes": ["chacara_klabin", "alto_do_ipiranga"] },
    { "id": "alto_do_ipiranga", "nome": "Alto do Ipiranga", "linha": ["verde"], "zona": "sul", "coordy": -23.6022366, "coordx": -46.6124857, "conexoes": ["santos_imigrantes", "sacoma"] },
    { "id": "sacoma", "nome": "Sacomã", "linha": ["verde"], "zona": "sul", "coordy": -23.602269656735114, "coordx": -46.60287440676241, "conexoes": ["alto_do_ipiranga", "tamanduatei"] }, // <--- Manteve a sua manual
    { "id": "tamanduatei", "nome": "Tamanduateí", "linha": ["verde"], "zona": "leste", "coordy": -23.5927867, "coordx": -46.5895167, "conexoes": ["sacoma", "vila_prudente"] },
    { "id": "vila_prudente", "nome": "Vila Prudente", "linha": ["verde", "prata"], "zona": "leste", "coordy": -23.5844270, "coordx": -46.5819380, "conexoes": ["tamanduatei", "oratorio"] },

    // ==========================================
    // LINHA 3 - VERMELHA 
    // ==========================================
    { "id": "palmeiras_barra_funda", "nome": "Palmeiras-Barra Funda", "linha": ["vermelha"], "zona": "oeste", "coordy": -23.5259743, "coordx": -46.6674683, "conexoes": ["marechal_deodoro"] },
    { "id": "marechal_deodoro", "nome": "Marechal Deodoro", "linha": ["vermelha"], "zona": "centro", "coordy": -23.5339809, "coordx": -46.6558993, "conexoes": ["palmeiras_barra_funda", "santa_cecilia"] },
    { "id": "santa_cecilia", "nome": "Santa Cecília", "linha": ["vermelha"], "zona": "centro", "coordy": -23.5393238, "coordx": -46.6489566, "conexoes": ["marechal_deodoro", "republica"] },
    { "id": "anhangabau", "nome": "Anhangabaú", "linha": ["vermelha"], "zona": "centro", "coordy": -23.5477693, "coordx": -46.6393237, "conexoes": ["republica", "se"] },
    { "id": "pedro_ii", "nome": "Pedro II", "linha": ["vermelha"], "zona": "centro", "coordy": -23.5496994, "coordx": -46.6259819, "conexoes": ["se", "bras"] },
    { "id": "bras", "nome": "Brás", "linha": ["vermelha"], "zona": "centro", "coordy": -23.5478581, "coordx": -46.6159196, "conexoes": ["pedro_ii", "bresser_mooca"] },
    { "id": "bresser_mooca", "nome": "Bresser-Mooca", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5465040, "coordx": -46.6069301, "conexoes": ["bras", "belem"] },
    { "id": "belem", "nome": "Belém", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5428718, "coordx": -46.5896150, "conexoes": ["bresser_mooca", "tatuape"] },
    { "id": "tatuape", "nome": "Tatuapé", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5402524, "coordx": -46.5766424, "conexoes": ["belem", "carrao"] },
    { "id": "carrao", "nome": "Carrão", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5378874, "coordx": -46.5642624, "conexoes": ["tatuape", "penha"] },
    { "id": "penha", "nome": "Penha", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5334949, "coordx": -46.5426688, "conexoes": ["carrao", "vila_matilde"] },
    { "id": "vila_matilde", "nome": "Vila Matilde", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5319166, "coordx": -46.5308731, "conexoes": ["penha", "guilhermina_esperanca"] },
    { "id": "guilhermina_esperanca", "nome": "Guilhermina-Esperança", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5293046, "coordx": -46.5166401, "conexoes": ["vila_matilde", "patriarca"] },
    { "id": "patriarca", "nome": "Patriarca", "linha": ["vermelha"], "zona": "leste", "coordy": -23.531128842298784, "coordx": -46.50150244451661, "conexoes": ["guilhermina_esperanca", "artur_alvim"] }, // <--- Manteve a sua manual
    { "id": "artur_alvim", "nome": "Artur Alvim", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5402438, "coordx": -46.4847063, "conexoes": ["patriarca", "corinthians_itaquera"] },
    { "id": "corinthians_itaquera", "nome": "Corinthians-Itaquera", "linha": ["vermelha"], "zona": "leste", "coordy": -23.5422994, "coordx": -46.4712065, "conexoes": ["artur_alvim"] },

    // ==========================================
    // LINHA 4 - AMARELA 
    // ==========================================
    { "id": "republica", "nome": "República", "linha": ["amarela", "vermelha"], "zona": "centro", "coordy": -23.5440945, "coordx": -46.6426650, "conexoes": ["luz", "higienopolis_mackenzie", "santa_cecilia", "anhangabau"] },
    { "id": "higienopolis_mackenzie", "nome": "Higienópolis-Mackenzie", "linha": ["amarela"], "zona": "centro", "coordy": -23.5489592, "coordx": -46.6523049, "conexoes": ["republica", "paulista"] },
    { "id": "paulista", "nome": "Paulista", "linha": ["amarela"], "zona": "centro", "coordy": -23.5552461, "coordx": -46.6622682, "conexoes": ["higienopolis_mackenzie", "oscar_freire", "consolacao"] },
    { "id": "oscar_freire", "nome": "Oscar Freire", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5606675, "coordx": -46.6719139, "conexoes": ["paulista", "fradique_coutinho"] },
    { "id": "fradique_coutinho", "nome": "Fradique Coutinho", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5662284, "coordx": -46.6841386, "conexoes": ["oscar_freire", "faria_lima"] },
    { "id": "faria_lima", "nome": "Faria Lima", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5672551, "coordx": -46.6939585, "conexoes": ["fradique_coutinho", "pinheiros"] },
    { "id": "pinheiros", "nome": "Pinheiros", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5672490, "coordx": -46.7019515, "conexoes": ["faria_lima", "butanta"] },
    { "id": "butanta", "nome": "Butantã", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5718995, "coordx": -46.7080896, "conexoes": ["pinheiros", "sao_paulo_morumbi"] },
    { "id": "sao_paulo_morumbi", "nome": "São Paulo-Morumbi", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5861368, "coordx": -46.7239121, "conexoes": ["butanta", "vila_sonia"] },
    { "id": "vila_sonia", "nome": "Vila Sônia", "linha": ["amarela"], "zona": "oeste", "coordy": -23.5934343, "coordx": -46.7348090, "conexoes": ["sao_paulo_morumbi"] },

    // ==========================================
    // LINHA 5 - LILÁS
    // ==========================================
    { "id": "capao_redondo", "nome": "Capão Redondo", "linha": ["lilas"], "zona": "sul", "coordy": -23.659087945692665, "coordx": -46.76802781726823, "conexoes": ["campo_limpo"] }, // <--- Manteve a sua manual
    { "id": "campo_limpo", "nome": "Campo Limpo", "linha": ["lilas"], "zona": "sul", "coordy": -23.6492871, "coordx": -46.7589484, "conexoes": ["capao_redondo", "vila_das_belezas"] },
    { "id": "vila_das_belezas", "nome": "Vila das Belezas", "linha": ["lilas"], "zona": "sul", "coordy": -23.6402476, "coordx": -46.7457694, "conexoes": ["campo_limpo", "giovanni_gronchi"] },
    { "id": "giovanni_gronchi", "nome": "Giovanni Gronchi", "linha": ["lilas"], "zona": "sul", "coordy": -23.6439301, "coordx": -46.7339828, "conexoes": ["vila_das_belezas", "santo_amaro"] },
    { "id": "santo_amaro", "nome": "Santo Amaro", "linha": ["lilas"], "zona": "sul", "coordy": -23.6556547, "coordx": -46.7209734, "conexoes": ["giovanni_gronchi", "largo_treze"] },
    { "id": "largo_treze", "nome": "Largo Treze", "linha": ["lilas"], "zona": "sul", "coordy": -23.6544576, "coordx": -46.7101664, "conexoes": ["santo_amaro", "adolfo_pinheiro"] },
    { "id": "adolfo_pinheiro", "nome": "Adolfo Pinheiro", "linha": ["lilas"], "zona": "sul", "coordy": -23.6500726, "coordx": -46.7042057, "conexoes": ["largo_treze", "alto_da_boa_vista"] },
    { "id": "alto_da_boa_vista", "nome": "Alto da Boa Vista", "linha": ["lilas"], "zona": "sul", "coordy": -23.6416337, "coordx": -46.6994196, "conexoes": ["adolfo_pinheiro", "borba_gato"] },
    { "id": "borba_gato", "nome": "Borba Gato", "linha": ["lilas"], "zona": "sul", "coordy": -23.6334661, "coordx": -46.6928675, "conexoes": ["alto_da_boa_vista", "brooklin"] },
    { "id": "brooklin", "nome": "Brooklin", "linha": ["lilas"], "zona": "sul", "coordy": -23.6268017, "coordx": -46.6881279, "conexoes": ["borba_gato", "campo_belo"] },
    { "id": "campo_belo", "nome": "Campo Belo", "linha": ["lilas"], "zona": "sul", "coordy": -23.6200216, "coordx": -46.6843467, "conexoes": ["brooklin", "eucaliptos"] },
    { "id": "eucaliptos", "nome": "Eucaliptos", "linha": ["lilas"], "zona": "sul", "coordy": -23.6124976, "coordx": -46.6713702, "conexoes": ["campo_belo", "moema"] },
    { "id": "moema", "nome": "Moema", "linha": ["lilas"], "zona": "sul", "coordy": -23.6037760, "coordx": -46.6621333, "conexoes": ["eucaliptos", "aacd_servidor"] },
    { "id": "aacd_servidor", "nome": "AACD-Servidor", "linha": ["lilas"], "zona": "sul", "coordy": -23.5978482, "coordx": -46.6523883, "conexoes": ["moema", "hospital_sao_paulo"] },
    { "id": "hospital_sao_paulo", "nome": "Hospital São Paulo", "linha": ["lilas"], "zona": "sul", "coordy": -23.5983833, "coordx": -46.6455913, "conexoes": ["aacd_servidor", "santa_cruz"] },

    // ==========================================
    // LINHA 15 - PRATA (Monotrilho)
    // ==========================================
    { "id": "oratorio", "nome": "Oratório", "linha": ["prata"], "zona": "leste", "coordy": -23.581934685974243, "coordx": -46.56176651912397, "conexoes": ["vila_prudente", "sao_lucas"] }, // <--- Manteve a sua manual
    { "id": "sao_lucas", "nome": "São Lucas", "linha": ["prata"], "zona": "leste", "coordy": -23.5889631440787, "coordx": -46.54461966664546, "conexoes": ["oratorio", "camilo_haddad"] }, // <--- Manteve a sua manual
    { "id": "camilo_haddad", "nome": "Camilo Haddad", "linha": ["prata"], "zona": "leste", "coordy": -23.5925345, "coordx": -46.5414324, "conexoes": ["sao_lucas", "vila_tolstoi"] },
    { "id": "vila_tolstoi", "nome": "Vila Tolstói", "linha": ["prata"], "zona": "leste", "coordy": -23.5986423, "coordx": -46.5322695, "conexoes": ["camilo_haddad", "vila_uniao"] },
    { "id": "vila_uniao", "nome": "Vila União", "linha": ["prata"], "zona": "leste", "coordy": -23.602959978763774, "coordx": -46.51553000377889, "conexoes": ["vila_tolstoi", "jardim_planalto"] }, // <--- Manteve a sua manual
    { "id": "jardim_planalto", "nome": "Jardim Planalto", "linha": ["prata"], "zona": "leste", "coordy": -23.606450578761468, "coordx": -46.50770010377857, "conexoes": ["vila_uniao", "sapopemba"] }, // <--- Manteve a sua manual
    { "id": "sapopemba", "nome": "Sapopemba", "linha": ["prata"], "zona": "leste", "coordy": -23.6136706, "coordx": -46.4986708, "conexoes": ["jardim_planalto", "fazenda_da_juta"] },
    { "id": "fazenda_da_juta", "nome": "Fazenda da Juta", "linha": ["prata"], "zona": "leste", "coordy": -23.6166826, "coordx": -46.4867499, "conexoes": ["sapopemba", "sao_mateus"] },
    { "id": "sao_mateus", "nome": "São Mateus", "linha": ["prata"], "zona": "leste", "coordy": -23.612265129057654, "coordx": -46.47739610771946, "conexoes": ["fazenda_da_juta", "jardim_colonial"] }, // <--- Manteve a sua manual
    { "id": "jardim_colonial", "nome": "Jardim Colonial", "linha": ["prata"], "zona": "leste", "coordy": -23.59913546632337, "coordx": -46.469067132942854, "conexoes": ["sao_mateus"] } // <--- Manteve a sua manual
];

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

window.todasEstacoes = todasEstacoes;
window.nomesOficiaisDasLinhas = nomesOficiaisDasLinhas;
window.coresHex = coresHex;