import {inject, TestBed} from '@angular/core/testing';
import {AuthGuard} from './auth.guard';

describe('AuthGuard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard
      ]
    });
  });

  describe('Fn: canActivate', () => {
    it('should return true if user is authenticated', inject([AuthGuard], (service: AuthGuard) => {
      expect(true).toBe(false);
    }));

    it('should return false if user is NOT authenticated', inject([AuthGuard], (service: AuthGuard) => {
      expect(true).toBe(false);
    }));

    it('should call login if user is NOT authenticated', inject([AuthGuard], (service: AuthGuard) => {
      expect(true).toBe(false);
    }));
  });
});



