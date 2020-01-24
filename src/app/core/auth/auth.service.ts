import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';

// import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(userParam: User): Observable<User> {
    const jwt = 'THISISACOMPLEXENCRYPTEDJWT';
    // this.setSession(jwt, 'token');
    // let timeOut = moment.now();
    // timeOut += 3600000;
    // this.setSession(timeOut, 'expires_at');
    return of({ jwt, ...userParam });
    // return this.http.post<ENTITYTOCREATE>(`${env.SERVER_URL}/LOGINFAKEENDPOINT`, userParam);
  }

  private setSession(authResult, localName) {
    localStorage.setItem(localName, authResult);
  }

  logout() {
    // localStorage.removeItem('token');
    // localStorage.removeItem('expires_at');
    return of('DEFINEME');
  }

  isLoggedIn() {
    if (moment.now() - +this.getExpiration() < 0) {
      return true;
    } else {
      return false;
    }
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    return localStorage.getItem('expires_at');
  }
}
