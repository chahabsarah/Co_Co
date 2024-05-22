import {Component, OnInit} from '@angular/core';
import {  ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
declare let L: any;

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    var map = L.map('map').setView([36.8663, 10.1732], 11);
    let mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

    var taxiIcon = L.icon({
      iconUrl: 'assets/img/taxi.png',
      iconSize: [70, 70]
    })

    var marker = L.marker([36.8663,10.1732], { icon: taxiIcon }).addTo(map);

    // Ajouter un gestionnaire d'événements pour détecter le clic sur la carte
    map.on('click', function (e: { latlng: { lat: any; lng: any; }; }) {
      var lat = e.latlng.lat;
      var lng = e.latlng.lng;
      convertCoordinatesToAddress(lat, lng);
      console.log(e)
      var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      L.Routing.control({
        waypoints: [
          L.latLng(36.8663, 10.1732),
          L.latLng(e.latlng.lat, e.latlng.lng)
        ]
      }).on('routesfound', function (e: { routes: { coordinates: any[]; }[]; }) {
        var routes = e.routes;
        console.log(routes);

        e.routes[0].coordinates.forEach(function (coord, index) {
          setTimeout(function () {
            marker.setLatLng([coord.lat, coord.lng]);
          }, 100 * index)
        })

      }).addTo(map);
    });
    function convertCoordinatesToAddress(lat: any, lng: any) {
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
        .then(response => response.json())
        .then(data => {
          const address = data.display_name; // Adresse lisible
          // @ts-ignore
          document.getElementById('adresseInput').value = address; // Mettre à jour l'input du formulaire
        })
        .catch(error => console.error('Erreur lors de la conversion des coordonnées en adresse :', error));
    }  }
}
