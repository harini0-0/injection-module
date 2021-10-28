import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionListComponent } from './injection-list.component';

describe('InjectionListComponent', () => {
  let component: InjectionListComponent;
  let fixture: ComponentFixture<InjectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
