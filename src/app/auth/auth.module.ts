import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {AuthInterceptor} from './services/auth.interceptor';
import {AuthGuard} from './services/auth.guard';
import { LoginComponent } from './login/login.component';
import { authRoutes } from './auth.router';

@NgModule({
  imports: [
    CommonModule,
    authRoutes
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        }
      ]
    };
  }
}
