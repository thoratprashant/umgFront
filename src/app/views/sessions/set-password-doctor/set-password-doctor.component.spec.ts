import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPasswordDoctorComponent } from './set-password-doctor.component';

describe('SetPasswordDoctorComponent', () => {
  let component: SetPasswordDoctorComponent;
  let fixture: ComponentFixture<SetPasswordDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPasswordDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPasswordDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
