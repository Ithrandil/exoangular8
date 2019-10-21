import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TermsService {
  constructor(private http: HttpClient) {}

  getAllTerms(): Observable<any> {
    return this.http.get(`${env.SERVER_URL}/terms`);
  }

  getTermById(id: string): Observable<any> {
    return this.http.get(`${env.SERVER_URL}/terms/${id}`);
  }
}
