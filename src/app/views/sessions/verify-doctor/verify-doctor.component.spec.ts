import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyDoctorComponent } from './verify-doctor.component';

describe('VerifyDoctorComponent', () => {
  let component: VerifyDoctorComponent;
  let fixture: ComponentFixture<VerifyDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
