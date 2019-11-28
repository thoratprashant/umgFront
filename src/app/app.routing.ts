import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard';
import { LandingLayoutComponent } from './shared/components/layouts/landing-layout/landing-layout.component';


export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'landing', 
    pathMatch: 'full' 
  },

  {
    path: '', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'sessions', 
        loadChildren: './views/sessions/sessions.module#SessionsModule',
        data: { title: 'Session'} 
      }
    ]
  },
  {
    path: '', 
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'others', 
        loadChildren: './views/others/others.module#OthersModule', 
        data: { title: 'Others', breadcrumb: 'OTHERS'}
      }
    ]
  },

// Landing 

  {
    path: '', 
    component: LandingLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'landing', 
        loadChildren: './views/landing/landing.module#LandingModule', 
        data: { title: 'landing', breadcrumb: 'landing'}
      }
    ]
  },







  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];

