import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { GuardService } from './services/guard.service';
import { AccesGuardService } from './services/acces-guard.service';
import { 
  RoleGuardService as RoleGuard 
} from './services/role-guard.service';
import { DeniedComponent } from './views/denied/denied.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: P404Component,
    data: {
      id: "-1",
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      id: "-1",
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      id: "-1",
      title: 'Login Page'
    },
    canActivate : [AccesGuardService]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      id: "0",
      title: 'Administration',
      expectedRole: 'admin'
    },
    canActivate: [GuardService],
    children: [

      {
        path: 'formation',
        canActivate: [RoleGuard],
        data: { 
          id: "1",
          title: 'Formation',
          expectedRole: 'formation'
        },
        loadChildren: () => import('./views/formations/formation.module').then(m => m.FormationModule)
      },
      {
        path: 'filieres',
        canActivate: [RoleGuard],
        data: { 
          id: "2",
          title: 'Filière',
          expectedRole: 'filieres'
        },
        loadChildren: () => import('./views/filieres/filieres.module').then(m => m.FilieresModule)
      },
      {
        path: 'niveau',
        canActivate: [RoleGuard],
        data: { 
          id: "3",
          title: 'Niveau',
          expectedRole: 'niveau'
        },
        loadChildren: () => import('./views/niveau/niveau.module').then(m => m.NiveauModule)
      },
      {
        path: 'matiere',
        canActivate: [RoleGuard],
        data: { 
          id: "4",
          title: 'matière',
          expectedRole: 'matière'
        },
        loadChildren: () => import('./views/matieres/matiere.module').then(m => m.MatiereModule)
      },
      {
        path: 'semestre',
        canActivate: [RoleGuard],
        data: { 
          id: "1",
          title: 'semestre',
          expectedRole: 'semestre'
        },
        loadChildren: () => import('./views/semestre/semestre.module').then(m => m.SemestreModule)
      },
      
      {
        path: 'dashboard',
        canActivate: [RoleGuard],
        data: { 
          id: "1",
          title: 'Dashboard',
          expectedRole: 'dashboard'
        },
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'denied/5ee78bfcd6f244072fbeb48c',
        
        data: { 
          id: "7",
          title: 'accès non autorisé',
          expectedRole: 'denied'
        },
        component: DeniedComponent
      }
    ]
  },
  { path: '**', component: P404Component,
  data: {
    id: "-1",
    title: 'Page not found'
  }
}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
