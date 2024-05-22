import {AfterViewInit, Component} from '@angular/core';
import {RideServiceService} from "../../../../Services/RideService/ride-service.service";
import {  ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {async} from "rxjs";
declare let L: any;
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements AfterViewInit{
  departureAddress: string = '';
  arrivalAddress: string = 'ESPRIT : 1,2 rue André Ampère - 2083 - Pôle Technologique - El Ghazala';
  amir:string='';
  constructor(private dataService: RideServiceService) { }
  /* onSubmit() {
     // retrieve the values from the form controls and set them to the properties
     this.departureAddress = (<HTMLInputElement>document.getElementById("departureAddress")).value;
     this.arrivalAddress = (<HTMLInputElement>document.getElementById("arrivalAddress")).value;
   }*/
  /*onSubmit() {
    this.dataService.saveAddresses(this.departureAddress);
  }*/
  formData: any;
  ngOnInit(): void {
    //this.startlocation =this.service.saveAddresses();
    //this.arrivalLocation = this.step1Component.arrivalLocation;
    /* this.available_seats = this.step3Component.availableSeats;
     this.vehicule_is_smoke = this.step3Component.isSmokerFriendly;
     this.date = this.step2Component.date;
     this.time = this.step2Component.time;
     this.preference = this.step2Component.preference;
     this.avoidTolls = this.step4Component.avoidTolls;
     this.price = this.step4Component.price;*/
    // this.formData = this.service.getFormData();
    // this.formData = this.dataService.getFormData();
    //console.log("formData:", this.formData);
  }
  savedAddresses: { departureAddress: string, arrivalAddress: string }[] = [];
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
    map.on('click', (e: { latlng: { lat: any; lng: any; }; }) => {
      var lat = e.latlng.lat;
      var lng = e.latlng.lng;
      convertCoordinatesToAddress(lat, lng).then(address => {
        this.departureAddress = address;
      });

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
        console.log(map.locate({setView: true, maxZoom: 16}));
        e.routes[0].coordinates.forEach(function (coord, index) {
          setTimeout(function () {
            marker.setLatLng([coord.lat, coord.lng]);
          }, 100 * index)
        })

      }).addTo(map);
    });
   /* function convertCoordinatesToAddress(lat: any, lng: any) {
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
        .then(response => response.json())
        .then(data => {
          const address = data.display_name;
          // @ts-ignore
         document.getElementById('departureAddress').value = address;
        })
        .catch(error => console.error('Erreur lors de la conversion des coordonnées en adresse :', error));
    } */
    function convertCoordinatesToAddress(lat: any, lng: any): Promise<string> {
      return fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
        .then(response => response.json())
        .then(data => {
          const address = data.display_name;
          // @ts-ignore
          document.getElementById('departureAddress').value = address;
          return address;
        })
        .catch(error => console.error('Erreur lors de la conversion des coordonnées en adresse :', error));
    }
  }
  showFormData() {
    this.dataService.setFormData({
      departureAddress: this.departureAddress,
      arrivalAddress: this.arrivalAddress
    }, 1);
  }
}
