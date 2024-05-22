
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as L from 'leaflet';
import { GeoLocationService } from '../accommodationModule/Services/geo-location.service';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { ActivatedRoute } from '@angular/router';
import { AccomodationService } from '../accommodationModule/Services/accomodation.service';

@Component({
  selector: 'app-mapp',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MappComponent  {
  localisation!:string;
  map: any;
  routingControl: any;
  distance: string = '';
  estimatedDuration: string = '';
  routeDetails: string[] = [];

  constructor(private accomodationService: AccomodationService , private route: ActivatedRoute) { }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe(params => {
      this.localisation = params['departureLocation'];
      this.initializeMap();
    });
  }

  async initializeMap(): Promise<void> {
    this.map = L.map('map').setView([36.8663, 10.1732], 11);
    let mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(this.map);

    // Decode departure and arrival addresses
    const departureCoordinates = await this.decodeLatLng(this.localisation);

    // Add departure and arrival markers
    this.addMarker(departureCoordinates, 'Departure', 'assets/backOffice/img/bu.png');

    // Fit the map to show both markers
    this.map.fitBounds([departureCoordinates]);

    // Initialize routing control
    this.routingControl = L.Routing.control({
      waypoints: [
        L.latLng(departureCoordinates),
      ]
    }).addTo(this.map);

    // Customize the waypoint marker icons
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

    // Listen for the routesfound event to get distance, estimated duration, and route details
    this.routingControl.on('routesfound', (event: any) => {
      const routes = event.routes;
      if (routes && routes.length > 0) {
        const route = routes[0]; // Assuming only one route is found
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
    return [0, 0]; // Default to [0, 0] if unable to decode
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
