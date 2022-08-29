let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(48.860005, 2.474388),
    zoom: 11,
  });

  const iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  const icons = {
    parking: {
      icon: iconBase + "parking_lot_maps.png",
    },
    library: {
      icon: iconBase + "library_maps.png",
    },
    info: {
      icon: iconBase + "info-i_maps.png",
    },
    airport: {
      icon: "images/aircraft.png",
    },
    hotel: {
      icon: "images/hotel.png",
    },
    iglesia: {
      icon: "images/iglesia.png",
    },
    park: {
      icon: "images/park.png",
    },
    mairie: {
      icon: "images/mairie.png",
    },
    castle: {
      icon: "images/castle.png",
    },
    bus: {
      icon: "images/bus.png",
    },
    van: {
      icon: "images/van.png",
    },
  };
  const features = [
    {
      position: new google.maps.LatLng(48.718, 2.604979),
      type: "van",
      title: "Minibus",
      content:
        '<div id="content">' +
        '<h4 id="firstHeading" class="firstHeading">Van</h4>' +
        "Un minbus realizará idas y venidas entre el castillo" +
        "<br />y los hoteles de la zona a lo largo de toda la noche." +
        "</div>",
    },
    {
      position: new google.maps.LatLng(48.799637, 2.470217),
      type: "bus",
      title: "Autobús reservado para la boda",
      content:
        '<div id="content">' +
        '<h4 id="firstHeading" class="firstHeading">Bus</h4>' +
        "<p><b>Horario de ida:</b> 16h00 : Ayuntamiento -> Castillo" +
        "<br /><b>Horario de vuelta:</b> 03h00 : Castillo -> Bercy" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(49.009213, 2.562554),
      type: "airport",
      title: "Aeropuerto",
      content:
        '<div id="content">' +
        '<h4 id="firstHeading" class="firstHeading">Aeropuerto Charles De Gaulle</h4>' +
        "<p><b>Compañía:</b> Vueling" +
        '<br /><a href="https://Vueling.com" target="_blanck">' +
        "Vueling.com</a> " +
        "<br /><b>Transporte:</b> Línea de RER B" +
        "</p>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(48.727862, 2.36785),
      type: "airport",
      title: "Aeropuerto",
      content:
        '<div id="content">' +
        '<h4 id="firstHeading" class="firstHeading">Aeropuerto de Orly</h4>' +
        "<p><b>Compañía:</b> Transavia" +
        '<br /><a href="https://transavia.com" target="_blanck">' +
        "Transavia.com</a> " +
        "<br /><b>Transporte:</b> OrlyBus, Orlyval o Taxi" +
        "</p>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(48.73178, 2.610285),
      type: "hotel",
      title: "Hotel",
      content:
        '<div id="content">' +
        '<h4 id="firstHeading" class="firstHeading">Hôtel Abbaye du golf de Lésigny</h4>' +
        "<p><b>Precio medio:</b> 100€/noche " +
        "<br /><b>Transporte:</b> Coche únicamente para ida/vuelta a París, minibús para volver del castillo." +
        "<br />Párking gratuito en el hotel" +
        '<br /><a href="https://www.hotelabbayedugolf.com/fr/index.html" target="_blanck">' +
        "hotelabbayedugolf.com</a> " +
        "</p>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(48.703431, 2.59949),
      type: "hotel",
      title: "Hotel",
      content:
        '<div id="content">' +
        '<h4 id="firstHeading" class="firstHeading">Kyriad Brie Comte Robert</h4>' +
        "<p><b>Precio medio:</b> 70€/noche " +
        "<br /><b>Transporte:</b> Coche únicamente para ida/vuelta a París, minibús para volver del castillo" +
        "<br />Párking gratuito en el hotel" +
        '<br /><a href="https://brie-comte-robert.kyriad.com/fr-fr/" target="_blanck">' +
        "brie-comte-robert.kyriad.com</a> " +
        "</p>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(48.83205, 2.387082),
      type: "hotel",
      title: "Apartahotel",
      content:
        '<div id="content">' +
        '<h4 id="firstHeading" class="firstHeading">Aparthotel Adagio Paris Bercy</h4>' +
        "<p><b>Precio medio:</b> 165€/noche para 4, 270€/noche para 8" +
        "<br /><b>Transporte:</b> Metro 14, Bus 24." +
        "<br />Autobús para volver del castillo" +
        '<br /><a href="https://www.adagio-city.com/fr/hotel-6789-aparthotel-adagio-paris-bercy-village/index.shtml" target="_blanck">' +
        "adagio-city.com</a> " +
        "</p>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(48.832365, 2.38649),
      type: "hotel",
      title: "Hotel",
      content:
        '<div id="content">' +
        '<h4 id="firstHeading" class="firstHeading">Hôtel Ibis Bercy Village</h4>' +
        "<p><b>Precio medio:</b> 130€/noche" +
        "<br /><b>Transporte:</b> Metro 14, Bus 24." +
        "<br />Autobús para volver del castillo" +
        '<br /><a href="https://all.accor.com/hotel/1743/index.fr.shtml#origin=accor" target="_blanck">' +
        "accor.com</a> " +
        "</p>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(48.835013, 2.387632),
      type: "hotel",
      title: "Hotel",
      content:
        '<div id="content">' +
        '<h4 id="firstHeading" class="firstHeading">Hôtel Campanile Paris Bercy</h4>' +
        "<p><b>Precio medio:</b> 130€/noche" +
        "<br /><b>Transporte:</b> Metro 14, Bus 24." +
        "<br />Autobús para volver del castillo" +
        '<br /><a href="https://www.hotelbercy.com/" target="_blanck">' +
        "hotelbercy.com</a> " +
        "</p>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(48.847107, 2.342384),
      type: "park",
      title: "Párking",
      content:
        '<div id="content">' +
        '<h4 id="firstHeading" class="firstHeading">Párking de la calle Soufflot</h4>' +
        "<p>4€/Hora " +
        "</p>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(48.846211, 2.3446),
      type: "mairie",
      title: "Ayuntamiento",
      content:
        '<div id="content">' +
        '<h4 id="firstHeading" class="firstHeading">Ayuntamiento del distrito 5</h4>' +
        "<p>Ceremonia a las XXh" +
        "<br /><b>Transporte:</b> RER B estación Luxembourg o" +
        "<br />Metro 10 estación Cardinal Lemoine o" +
        "<br />Metro 7 estación Place Monge" +
        "<br />Coche: párking de pago en la calle Soufflot" +
        "</p>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(48.846613, 2.347456),
      type: "iglesia",
      title: "Iglesia",
      content:
        '<div id="content">' +
        '<h4 id="firstHeading" class="firstHeading">Iglesia de Saint Étienne du Mont</h4>' +
        "<p>Ceremonia a las XXh " +
        "<br />Párking de pago en la calle Soufflot" +
        "</p>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(48.743427, 2.613943),
      type: "castle",
      title: "Castillo",
      content:
        '<div id="content">' +
        '<h4 id="firstHeading" class="firstHeading">Castillo de Lésigny</h4>' +
        "<p>Cóctel y cena a partir de las 17h30 " +
        "<br /><b>Transporte:</b> Coche o autobús de la boda" +
        "<br />Párking gratuito en el recinto del castillo" +
        "</p>" +
        "</div>",
    },
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      map: map,
      title: features[i].title,
      icon: {
        url: icons[features[i].type].icon,
        size: new google.maps.Size(64, 64),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(32, 32),
      },
    });
    const infowindow = new google.maps.InfoWindow({
      content: features[i].content,
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }

  const flightPlanCoordinates2 = [
    { lat: 48.846613, lng: 2.347456 },
    { lat: 48.743427, lng: 2.613943 },
    { lat: 48.83205, lng: 2.387082 },
  ];
  const flightPath2 = new google.maps.Polyline({
    path: flightPlanCoordinates2,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 3,
  });

  flightPath2.setMap(map);

  const flightPlanCoordinates = [
    { lat: 48.703431, lng: 2.59949 },
    { lat: 48.73178, lng: 2.610285 },
    { lat: 48.743427, lng: 2.613943 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#ff00ff",
    strokeOpacity: 1.0,
    strokeWeight: 3,
  });

  flightPath.setMap(map);
}

window.initMap = initMap;
