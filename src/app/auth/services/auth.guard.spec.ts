import {inject, TestBed} from '@angular/core/testing';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

const mockAuth = {
  login: jasmine.createSpy('login'),
  isAuthenticated: jasmine.createSpy('isAuthenticated')
};
let router: Router;
let authService;
let result;

describe('AuthGuard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthGuard,
        {
          provide: AuthService,
          useValue: mockAuth
        }
      ]
    });
    router = TestBed.get(Router);
    authService = TestBed.get(AuthService);
  });

  describe('Fn: canActivate', () => {
    it('should return true if user is authenticated', inject([AuthGuard], (service: AuthGuard) => {
      authService.isAuthenticated.and.returnValue(true);

      result = service.canActivate();

      expect(result).toBeTruthy();
    }));

    it('should return false if user is NOT authenticated', inject([AuthGuard], (service: AuthGuard) => {
      authService.isAuthenticated.and.returnValue(false);

      result = service.canActivate();

      expect(result).toBeFalsy();
    }));

    it('should navigate to login if user is NOT authenticated', inject([AuthGuard], (service: AuthGuard) => {
      const routerSpy = spyOn(router, 'navigate');

      service.canActivate();

      expect(routerSpy).toHaveBeenCalled();
    }));
  });
});



