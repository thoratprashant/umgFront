import { Routes } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { DoctorSigninComponent } from './doctor-signin/doctor-signin.component';
import { VerifyDoctorComponent } from './verify-doctor/verify-doctor.component';

export const SessionsRoutes: Routes = [

  // Patient route 
  {
    path: '',
    children: [{
      path: 'signup',
      component: SignupComponent,
      data: { title: 'Signup' }
    }, {
      path: 'signin',
      component: SigninComponent,
      data: { title: 'Signin' }
    },
    
    // doctor route
    {
      path: 'doctor-signin',
      component: DoctorSigninComponent,
      data: { title: 'Signin' }
    }, 
    {
      path: 'doctor-verify',
      component: VerifyDoctorComponent,
      data: { title: 'Signin' }
    }, 
    
    
    
    
    
    // Comman route
    {
      path: 'forgot-password',
      component: ForgotPasswordComponent,
      data: { title: 'Forgot password' }
    }, {
      path: 'lockscreen',
      component: LockscreenComponent,
      data: { title: 'Lockscreen' }
    }, {
      path: '404',
      component: NotFoundComponent,
      data: { title: 'Not Found' }
    }, {
      path: 'error',
      component: ErrorComponent,
      data: { title: 'Error' }
    }]
  }
];