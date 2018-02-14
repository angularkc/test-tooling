import {TestBed, inject} from '@angular/core/testing';
import {AuthService} from './auth.service';
import {Store} from '@ngrx/store';
import {getMockStore} from '../../../helpers/store.mock';
import {expressionChangedAfterItHasBeenCheckedError} from "@angular/core/src/view/errors";

let store: Store<any>;

describe('AuthService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        AuthService,
        {
          provide: Store,
          useValue: getMockStore()
        }
      ]
    });
    store = TestBed.get(Store);
  });

  describe('login', () => {
    it('should dispatch Login', inject([AuthService], (service: AuthService) => {
      const storeSpy = spyOn(store, 'dispatch');

      service.login();

      expect(storeSpy).toHaveBeenCalled();
    }));
  });

  describe('isAuthenticated', () => {
    it('should return false when not authed', inject([AuthService], (service: AuthService) => {
      service.isAuthed = false;

      const result = service.isAuthenticated();

      expect(result).toBeFalsy();
    }));
  });

});


