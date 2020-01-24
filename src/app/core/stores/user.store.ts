import { Action, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';

export class UserStateModel {
  connectedUser: User;
  isLoggedIn: boolean;
}

/***********************
 * Actions declarations
 **********************/
export class Login {
  static readonly type = '[MH_USER] Login';
  constructor(public payload: User) {}
}

export class Logout {
  static readonly type = '[MH_USER] Logout';
}

@State<UserStateModel>({
  name: 'UserState',
  defaults: {
    connectedUser: {
      email: ''
    },
    isLoggedIn: false
  }
})
export class UserState {
  constructor(private authService: AuthService) {}

  /***********
   * Actions
   **********/
  @Action(Login)
  login(ctx: StateContext<UserStateModel>, { payload }: Login): Observable<User> {
    return this.authService.login(payload).pipe(
      tap(result => {
        ctx.patchState({
          connectedUser: { ...result },
          isLoggedIn: true
        });
      })
    );
  }

  @Action(Logout)
  logout(ctx: StateContext<UserStateModel>) {
    return this.authService.logout().pipe(
      tap(() => {
        ctx.setState({
          connectedUser: null,
          isLoggedIn: false
        });
      })
    );
  }
}
