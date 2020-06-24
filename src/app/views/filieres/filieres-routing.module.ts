import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilieresComponent } from './filieres.component';
import { Routes, RouterModule } from '@angular/router';
import { ListFilieresComponent } from './list-filieres.component';
import { RoleGuardService } from '../../services/role-guard.service';

const routes: Routes =[
  {

    path: '',
    data: {
      title: 'Filiere'
    },
    children: [
      {
        path: '',
        redirectTo: 'nouvelle-filiere'
      },
      {
        path: 'nouvelle-filiere',
        component: FilieresComponent,
        // canActivate: [RoleGuardService],
        data: {
          id:"10",
          expectedRole: 'filieres',
          title: 'Nouvelle Filière'

        }
      },
      {
        path: 'nouvelle-filiere/edit/:id',
        component: FilieresComponent,
        data: {
          id:"11",
          expectedRole: 'filieres',
          title: 'modifier la filière'
        }
      },
      {
        path: 'liste-filieres',
        component: ListFilieresComponent,
        data: {
          id:"12",
          expectedRole: 'filieres',
          title: 'liste des Filières'
        }
      }
    ]

  }
 
  
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilieresRoutingModule { }
