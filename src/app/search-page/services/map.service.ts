import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import {} from 'googlemaps';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  directionsService = new google.maps.DirectionsService();
  directionResults;
  constructor() {}

  getParkingDirections(originParam, destinationParam) {
    const request: google.maps.DirectionsRequest = {
      origin: originParam,
      destination: destinationParam,
      travelMode: google.maps.TravelMode.DRIVING
    };

    const test = this.directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        console.log(result);
        return result;
      } else {
        throw new Error('Something went wrong with direction generation');
      }
    });
    console.log(test);
    return of(this.directionResults);
  }
}
