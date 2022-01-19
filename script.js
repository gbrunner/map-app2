      require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
        const map = new Map({
          basemap: "streets-night-vector"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 10,
          center: [-75.1, 40] // longitude, latitude
        });
      });
