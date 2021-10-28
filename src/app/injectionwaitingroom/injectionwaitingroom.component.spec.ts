import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionwaitingroomComponent } from './injectionwaitingroom.component';

describe('InjectionwaitingroomComponent', () => {
  let component: InjectionwaitingroomComponent;
  let fixture: ComponentFixture<InjectionwaitingroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectionwaitingroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionwaitingroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
