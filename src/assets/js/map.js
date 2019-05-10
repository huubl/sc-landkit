//
// map.js
// Theme module
//

(function() {

  //
  // Variables
  //

  var map = document.querySelectorAll('[data-toggle="map"]');

  var accessToken = 'pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg';


  //
  // Methods
  //

  function init(elem) {
    mapboxgl.accessToken = accessToken;
    var map = new mapboxgl.Map({
      container: elem,
      style: 'mapbox://styles/mapbox/light-v9',
      center: JSON.parse(elem.dataset.center),
      zoom: elem.dataset.zoom,
      scrollZoom: false,
      interactive: false
    });
  }


  //
  // Events
  //

  if (map) {
    [].forEach.call(map, function(elem) {
      init(elem);
    });
  }

})();