import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService, MessageService]
    });
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  describe('GET', () => {
    it('should return heroes',
      inject([HttpClient, HttpTestingController, HeroService, MessageService],
        (http: HttpClient, httpMock: HttpTestingController, heroService: HeroService, msgService: MessageService) => {

          const mockResponse = [
            {
              id: 1,
              name: 'Wonder Tester'
            },
            {
              id: 3,
              name: 'Test Man'
            }
          ];

          heroService.getHeroes().subscribe(
            actualHeroes => {
              expect(actualHeroes.length).toBe(2);
              expect(actualHeroes[0].name).toEqual('Wonder Tester');
              expect(msgService.messages.length).toBe(1);
            }
          );

          const req = httpMock.expectOne('api/heroes');
          expect(req.request.method).toEqual('GET');
          req.flush(mockResponse);
          httpMock.verify();
        })
    );

    it('should return a hero by id',
      inject([HttpClient, HttpTestingController, HeroService, MessageService],
        (http: HttpClient, httpMock: HttpTestingController, heroService: HeroService, msgService: MessageService) => {

          const mockResponse = {
            id: 1,
            name: 'Wonder Tester'
          };

          heroService.getHero(1).subscribe(
            actualHero => {
              expect(actualHero.name).toEqual('Wonder Tester');
              expect(msgService.messages.length).toBe(1);
            }
          );

          const req = httpMock.expectOne('api/heroes/1');
          expect(req.request.method).toEqual('GET');
          req.flush(mockResponse);
          httpMock.verify();
        })
    );

  });
});
