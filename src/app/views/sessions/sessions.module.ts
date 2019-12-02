import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { 
  MatProgressBarModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatStepperModule,
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SessionsRoutes } from "./sessions.routing";
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { DoctorSigninComponent } from './doctor-signin/doctor-signin.component';
import { VerifyDoctorComponent } from './verify-doctor/verify-doctor.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';
import { ThankyouDoctorComponent } from './thankyou-doctor/thankyou-doctor.component';
import { SetPasswordDoctorComponent } from './set-password-doctor/set-password-doctor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    FlexLayoutModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatStepperModule,
    RouterModule.forChild(SessionsRoutes)
  ],
  declarations: [ForgotPasswordComponent, LockscreenComponent, SigninComponent, SignupComponent, NotFoundComponent, ErrorComponent, 
    DoctorSigninComponent, VerifyDoctorComponent, DoctorSignupComponent, ThankyouDoctorComponent, SetPasswordDoctorComponent]
})
export class SessionsModule { }