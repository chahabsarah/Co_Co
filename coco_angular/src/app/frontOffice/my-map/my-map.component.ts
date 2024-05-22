import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { AccomodationService } from '../accommodationModule/accommodationModule/Services/accomodation.service';

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.scss']
})
export class MyMapComponent {
  localisation!:string;
  map: any;
  routingControl: any;
  distance: string = '';
  estimatedDuration: string = '';
  routeDetails: string[] = [];
  userLocation: [number, number] = [0, 0];
  constructor(private accomodationService: AccomodationService , private route: ActivatedRoute) { }

  async ngAfterViewInit(): Promise<void> {
    this.route.queryParams.subscribe(async params => {
      this.localisation = params['localisation'];
      await this.getUserLocation();
      this.initializeMap();
    });
  }
  async getUserLocation(): Promise<void> {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      this.userLocation = [position.coords.latitude, position.coords.longitude];
    } catch (error) {
      console.error('Error getting user location:', error);
    }
  }

  async initializeMap(): Promise<void> {
    this.map = L.map('map').setView([36.8663, 10.1732], 11);
    let mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(this.map);

    const localisations = await this.decodeLatLng(this.localisation);

    this.addMarker(localisations, 'localisation', 'assets/backOffice/img/bu.png');

    this.map.fitBounds([localisations]);

    this.routingControl = L.Routing.control({
      waypoints: [
        L.latLng(this.userLocation), // User's location
        L.latLng(await this.decodeLatLng(this.localisation)) // Accommodation location
      ]
    }).addTo(this.map);

    this.routingControl.on('waypointsadded', (event: any) => {
      event.waypoints.forEach((waypoint: any) => {
        waypoint.marker.setIcon(L.icon({
          iconUrl: 'assets/backOffice/img/bus.png',
          iconSize: [32, 32],
          iconAnchor: [16, 16],
          popupAnchor: [0, -16]
        }));
      });
    });

    this.routingControl.on('routesfound', (event: any) => {
      const routes = event.routes;
      if (routes && routes.length > 0) {
        const route = routes[0];
        this.distance = this.formatDistance(route.summary.totalDistance);
        this.estimatedDuration = this.formatDuration(route.summary.totalTime);
        this.routeDetails = this.getRouteDetails(route);
      }
    });
  }

  addMarker(coordinates: [number, number], label: string, iconUrl: string): void {
    const icon = L.icon({
      iconUrl: iconUrl,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });

    L.marker(coordinates, { icon: icon }).addTo(this.map).bindPopup(label + ': ' + this.localisation);
  }

  async decodeLatLng(address: string): Promise<[number, number]> {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`);
      const data = await response.json();
      if (data && data.length > 0) {
        return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
      }
    } catch (error) {
      console.error('Error decoding address:', error);
    }
    return [0, 0];
  }

  formatDistance(distanceInMeters: number): string {
    const distanceInKilometers = distanceInMeters / 1000;
    return distanceInKilometers.toFixed(1) + ' km';
  }

  formatDuration(durationInSeconds: number): string {
    const durationInMinutes = Math.round(durationInSeconds / 60);
    return durationInMinutes + ' min';
  }

  getRouteDetails(route: any): string[] {
    const details: string[] = [];
    route.instructions.forEach((instruction: any) => {
      details.push(instruction.text);
    });
    return details;
  }

  showRide(): void {
    this.accomodationService.setFormData({
      departureAddress: this.localisation,
    });
  }
}
