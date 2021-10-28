import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionLandingpageComponent } from './injection-landingpage.component';

describe('InjectionLandingpageComponent', () => {
  let component: InjectionLandingpageComponent;
  let fixture: ComponentFixture<InjectionLandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectionLandingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
