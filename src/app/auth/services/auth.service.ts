import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import {Store} from '@ngrx/store';
import {Logout, Login} from '../actions/auth.actions';
import {getIsAuthed} from '../reducers/auth.reducers';

export const token_payload = {
  access_token: 'My access_token'
};

@Injectable()
export class AuthService {
  isAuthed: boolean;

  constructor(private store: Store<any>) {
    this.store.select(getIsAuthed).subscribe(val => this.isAuthed = val);
  }

  public login(): void {
    this.store.dispatch(new Login(token_payload));
  }

  public isAuthenticated(): boolean {
    return this.isAuthed;
  }

}
