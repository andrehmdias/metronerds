export const mapaJs = new maplibregl.Map({
    container: 'mapaDiv',
    style: 'https://tiles.openfreemap.org/styles/bright',
    center: [-46.6333, -23.5505], // Centralizado na Sé
    zoom: 12,
    interactive: false,          
    scrollZoom: false,           
    boxZoom: false,              
    dragRotate: false,           
    dragPan: false,              
    keyboard: false,             
    doubleClickZoom: false,      
    touchZoomRotate: false       
});

export function atualizarBolinha(lon, lat) {
    const dadoPonto = {
        'type': 'FeatureCollection',
        'features': [{
            'type': 'Feature',
            'geometry': { 'type': 'Point', 'coordinates': [lon, lat] }
        }]
    };
    mapaJs.getSource('ponto-alvo').setData(dadoPonto);
}

export function configurarCamadaBolinha() {
    mapaJs.addSource('ponto-alvo', {
        'type': 'geojson',
        'data': { 'type': 'FeatureCollection', 'features': [] }
    });

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

export function atualizarCoresLinhas(linhasDescobertas) {
    mapaJs.setPaintProperty('linhas-visuais', 'line-color', [
        'case',
        ['in', ['get', 'name'], ['literal', linhasDescobertas]],
        ['get', 'colour'],
        '#000000'
    ]);
}