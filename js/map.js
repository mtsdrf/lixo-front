function showLoader(){
    $("#loader").css("display", "block");
}
function hideLoader(){
    $("#loader").css("display", "none");
}

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
    showLoader();
    // $.ajax({
    //     method: "GET",
    //     url: "",
    //     data: {}
    // })
    // .done(function(msg){
    //     var marker = new ol.Feature({
    //         geometry: new ol.geom.Point(
    //             ol.proj.fromLonLat([-48.145180,-21.796910])
    //         ),
    //       });
    //     var vectorSource = new ol.source.Vector({
    //         features: [marker]
    //     });
    //     var markerVectorLayer = new ol.layer.Vector({
    //         source: vectorSource,
    //     });
    //     map.addLayer(markerVectorLayer);
    //     hideLoader();
    // })
    // .fail(function(jqXHR, textStatus, msg){
    //     alert(msg);
    //     hideLoader();
    // }); 
}
hideLoader();