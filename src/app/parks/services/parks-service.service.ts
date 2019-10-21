import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParksService {
  constructor(private http: HttpClient) {}

  getAllParks(): Observable<any> {
    return this.http.get(`${env.SERVER_URL}/park/`);
  }

  getFreePlaces() {
    return this.http.get(`${env.SERVER_URL}/park/freeplaces`);
  }
}

// zenparkSearchZone: {
//   northLatitude: '48.72160334779513',
//   southLatitude: '48.705689464277654',
//   westLongitude: '2.1528053283691406',
//   eastLongitude: '2.224903106689453'
// },
