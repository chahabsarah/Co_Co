import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Ride } from '../../../Models_Front/Ride';
import {RideServiceService} from "../../../Services/RideService/ride-service.service";
import {Observable} from "rxjs";
declare let L: any;
@Component({
  selector: 'app-find-rides',
  templateUrl: './find-rides.component.html',
  styleUrls: ['./find-rides.component.scss']
})
export class FindRidesComponent implements OnInit {
  /*constructor(private dataService: RideServiceService) { }
  ListAddress: string[] = [];
  ListRides: any = {};
  List: string[] = [];
  ngOnInit() {
  const amir=this.dataService.getRidesListe();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentPosition = [position.coords.latitude, position.coords.longitude];

        L.marker(currentPosition).addTo(mymap)
          .bindPopup("Vous êtes ici")
          .openPopup();

        L.circle(currentPosition, { radius: 10000 }).addTo(mymap);

        const adresses = [
          "Raoued, Délégation Raoued, Gouvernorat Ariana, Tunisie",
          "Pont de Bizerte, Délégation Kalaat El Andalous, Gouvernorat Ariana, Tunisie",
          "Bou Hannech, Délégation Kalaat El Andalous, Gouvernorat Ariana, Tunisie",
          "Nasrallah, Nasrallah Centre, Délégation Nasrallah, Gouvernorat Kairouan, Tunisie",
          "Nasrallah, Nasrallah Centre, Délégation Nasrallah, Gouvernorat Kairouan, Tunisie"
        ];

        adresses.forEach((adresse) => {
          const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(adresse)}`;

          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              if (data && data.length > 0) {
                const lat = data[0].lat;
                const lon = data[0].lon;
                const addressPosition = [lat, lon];

                const distance = haversineDistance(currentPosition[0], currentPosition[1], addressPosition[0], addressPosition[1]);

                if (distance <= 180) {
                  L.marker(addressPosition).addTo(mymap)
                    .bindPopup(`${adresse}<br>Distance: ${distance.toFixed(2)} km`)
                    .openPopup();
                } else {
                  console.error("Aucune coordonnée trouvée pour l'adresse spécifiée:", adresse);
                }
              }
            })
            .catch((error) => console.error("Une erreur s'est produite lors de la conversion de l'adresse:", error));
        });
      });
    } else {
      console.error("La géolocalisation n'est pas supportée par votre navigateur.");
    }

    const mymap = L.map('mapid').setView([36.83711, 10.15907], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(mymap);


    function haversineDistance(lat1:number, lon1:number, lat2:number, lon2:number) {
      const R = 6371; // Radius of the Earth in km
      const dLat = rapy(lat2 - lat1);
      const dLon = rapy(lon2 - lon1);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c; // Distance in km
      return distance;
    }
    function rapy(x:number) {
      return ((x * Math.PI) / 180);
    }
  }}*/
  constructor(private dataService: RideServiceService) { }
  ListAddress: string[] = [];
  ListRides: any = {};
  List: string[] = [];
  departureAddress: any;
  arrivalAddress: any;
  ngOnInit() {
    // Get the user's current position

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentPosition = [position.coords.latitude, position.coords.longitude];

        // Add a marker to the map at the user's current position
        L.marker(currentPosition).addTo(mymap)
          .bindPopup("Vous êtes ici")
          .openPopup();

        L.circle(currentPosition, { radius: 10000 }).addTo(mymap);

        // Get the list of addresses from the service
        this.dataService.getRidesListe().subscribe((addresses) => {
          // Calculate the distance between the user's current position and each address
          addresses.forEach((adresse) => {
            const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(adresse)}`;

            fetch(url)
              .then((response) => response.json())
              .then((data) => {
                if (data && data.length > 0) {
                  const lat = data[0].lat;
                  const lon = data[0].lon;
                  const addressPosition = [lat, lon];

                  // Calculate the distance between the user's current position and the address
                  const distance = haversineDistance(currentPosition[0], currentPosition[1], addressPosition[0], addressPosition[1]);

                  if (distance <= 10) {
                    // Add a marker to the map at the address position
                    L.marker(addressPosition).addTo(mymap)
                      .bindPopup(`${adresse}<br>Distance: ${distance.toFixed(2)} km<br><button onclick="window.location.href='[URL_DU_LIEN]'">view ride details</button>`)
                      .openPopup();
                  } else {
                    console.error("Aucune coordonnée trouvée pour l'adresse spécifiée:", adresse);
                  }
                }
              })
              .catch((error) => console.error("Une erreur s'est produite lors de la conversion de l'adresse:", error));
          });
        });
      });
    } else {
      console.error("La géolocalisation n'est pas supportée par votre navigateur.");
    }

    // Initialize the Leaflet map
    const mymap = L.map('mapid').setView([36.83711, 10.15907], 8);

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(mymap);

    // Haversine formula
    function haversineDistance(lat1:number, lon1:number, lat2:number, lon2:number) {
      const R = 6371; // Radius of the Earth in km
      const dLat = rapy(lat2 - lat1);
      const dLon = rapy(lon2 - lon1);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c; // Distance in km
      return distance;
    }

    function rapy(x:number) {
      return ((x * Math.PI) / 180);
    }
  }
}
  /*constructor(private dataService: RideServiceService) { }
  ListAddress: string[] = [];
  ListRides: any = {};
  List: string[] = [];
  ngOnInit() {
    const mymap = L.map('mapid').setView([36.83711, 10.15907], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(mymap);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentPosition = [position.coords.latitude, position.coords.longitude];

        L.marker(currentPosition).addTo(mymap)
          .bindPopup("Vous êtes ici")
          .openPopup();

        L.circle(currentPosition, { radius: 10000 }).addTo(mymap);

        const adresses = [
          "Raoued, Délégation Raoued, Gouvernorat Ariana, Tunisie",
          "Pont de Bizerte, Délégation Kalaat El Andalous, Gouvernorat Ariana, Tunisie",
          "Bou Hannech, Délégation Kalaat El Andalous, Gouvernorat Ariana, Tunisie",
          "Nasrallah, Nasrallah Centre, Délégation Nasrallah, Gouvernorat Kairouan, Tunisie",
          "Nasrallah, Nasrallah Centre, Délégation Nasrallah, Gouvernorat Kairouan, Tunisie"
        ];

        adresses.forEach((adresse) => {
          const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(adresse)}`;

          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              if (data && data.length > 0) {
                const lat = data[0].lat;
                const lon = data[0].lon;
                const addressPosition = [lat, lon];

                const distance = haversineDistance(currentPosition[0], currentPosition[1], addressPosition[0], addressPosition[1]);

                if (distance <= 180) {
                  L.marker(addressPosition).addTo(mymap)
                    .bindPopup(`${adresse}<br>Distance: ${distance.toFixed(2)} km`)
                    .openPopup();
                } else {
                  console.error("Aucune coordonnée trouvée pour l'adresse spécifiée:", adresse);
                }
              }
            })
            .catch((error) => console.error("Une erreur s'est produite lors de la conversion de l'adresse:", error));
        });
      });
    } else {
      console.error("La géolocalisation n'est pas supportée par votre navigateur.");
    }

    function haversineDistance(lat1:number, lon1:number, lat2:number, lon2:number) {
      const R = 6371; // Radius of the Earth in km
      const dLat = rapy(lat2 - lat1);
      const dLon = rapy(lon2 - lon1);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c; // Distance in km
      return distance;
    }
    function rapy(x:number) {
      return ((x * Math.PI) / 180);
    }
  }
}*/
