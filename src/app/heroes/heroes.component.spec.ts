import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from './../hero.service';
import { Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs/observable/of';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  const heroServiceStub = {
    getHeroes: function () {
      return of([
        {
          id: 1,
          name: 'Testing Hero 1'
        },
        {
          id: 2,
          name: 'Testing Hero 2'
        },
        {
          id: 3,
          name: 'Testing Hero 3'
        }
      ]);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [ RouterTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        { provide: HeroService, useValue: heroServiceStub },
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
