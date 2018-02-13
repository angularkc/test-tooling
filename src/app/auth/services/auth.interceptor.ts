import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {getAccessToken} from '../reducers/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  access_token;
  constructor(private store: Store<any>) {
    this.store.select(getAccessToken).subscribe(token => {
      this.access_token = token;
    });
  }

  intercept = (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> =>
    next.handle(req.clone({setHeaders: {Authorization: `Bearer ${this.access_token}`}}))

}
