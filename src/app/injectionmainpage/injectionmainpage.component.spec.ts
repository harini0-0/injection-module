import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionmainpageComponent } from './injectionmainpage.component';

describe('InjectionmainpageComponent', () => {
  let component: InjectionmainpageComponent;
  let fixture: ComponentFixture<InjectionmainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectionmainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
