import { HeroService } from './../hero.service';
import { of } from 'rxjs/observable/of';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchComponent } from './hero-search.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

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
      declarations: [ HeroSearchComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: HeroService, useValue: heroServiceStub }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
