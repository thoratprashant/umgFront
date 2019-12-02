import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouDoctorComponent } from './thankyou-doctor.component';

describe('ThankyouDoctorComponent', () => {
  let component: ThankyouDoctorComponent;
  let fixture: ComponentFixture<ThankyouDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
