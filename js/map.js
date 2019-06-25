var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-48.1766 , -21.7946]),
        zoom: 12
    })
});

function setMakers(elemento){

    var element = document.createElement('div');
    element.innerHTML = '<img src="https://cdn.mapmarker.io/api/v1/fa/stack?size=50&color=DC4C3F&icon=fa-microchip&hoffset=1"/>';
    var marker = new ol.Overlay({
        position: [-48.145180,-21.796910],
        positioning: 'center-center',
        element: element,
        stopEvent: false
    });
    map.addOverlay(marker);

    // var marker = new ol.Feature({
    //     geometry: new ol.geom.Point(
    //         ol.proj.fromLonLat([-48.145180,-21.796910])
    //     ),
    //   });
    // var vectorSource = new ol.source.Vector({
    //     features: [marker]
    // });
    // var markerVectorLayer = new ol.layer.Vector({
    //     source: vectorSource,
    // });
    // map.addLayer(markerVectorLayer);
}
