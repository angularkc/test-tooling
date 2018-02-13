import { Action } from '@ngrx/store';

export const AuthActionTypes = {
  Login: '[Auth] Login',
  Logout: '[Auth] Logout'
};

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;

  constructor(public payload = null) {}
}

export type AuthActions =
  | Login
  | Logout;

