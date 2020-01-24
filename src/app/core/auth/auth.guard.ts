import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store) {}
  canActivate(): boolean {
    const isAuthenticated = this.store.selectSnapshot<boolean>(state => state.UserState.isLoggedIn);
    return isAuthenticated;
  }
}
