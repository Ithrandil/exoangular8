import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit, OnChanges {
  @Select('ParksState.collection') parks$: Observable<Park[]>;

  @ViewChild('map', { static: false }) mapElement: ElementRef;

  @Input()
  parkingLocation: google.maps.LatLng;

  userPosition: google.maps.LatLngLiteral;
  map: google.maps.Map;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const mapProperties = {
      center: new google.maps.LatLng(48.714902, 2.194116),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.parks$.subscribe((parks: Park[]) => {
      parks.forEach(park => {
        this.createMapMarker(park.latitude, park.longitude, park.name);
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.parkingLocation && !changes.parkingLocation.firstChange) {
      this.goToParking();
    }
  }

  createMapMarker(lat: number, lng: number, name: string) {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map: this.map,
      title: name,
      animation: google.maps.Animation.DROP
    });
    marker.setMap(this.map);
  }

  goToParking() {
    const infoWindow = new google.maps.InfoWindow();

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.userPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.getParkingDirectionsAndDisplayIt();
        },
        () => {
          this.handleLocationError(true, infoWindow, this.map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infoWindow, this.map.getCenter());
    }
  }
  getParkingDirectionsAndDisplayIt() {
    this.directionsRenderer.setMap(null);
    const request: google.maps.DirectionsRequest = {
      origin: this.userPosition,
      destination: this.parkingLocation,
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        this.directionsRenderer.setMap(this.map);
        this.directionsRenderer.setDirections(result);
      }
    });
  }

  handleLocationError(browserHasGeolocation: boolean, infoWindow: google.maps.InfoWindow, pos: google.maps.LatLng) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation ? 'Error: The Geolocation service failed.' : `Error: Your browser doesn't support geolocation.`
    );
    infoWindow.open(this.map);
  }
}
