import {TestBed, inject} from '@angular/core/testing';
import {AuthService} from './auth.service';

describe('AuthService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        AuthService
      ]
    });
  });

  describe('login', () => {
    it('should dispatch Login', inject([AuthService], (service: AuthService) => {
      expect(true).toBe(false);
    }));
  });

  describe('isAuthenticated', () => {
    it('should return false when token is expired', inject([AuthService], (service: AuthService) => {
      expect(true).toBe(false);
    }));
  });

});


