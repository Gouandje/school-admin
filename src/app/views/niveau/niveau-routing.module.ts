import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddNiveauComponent } from './add-niveau.component';
import { ListNiveauComponent } from './list-niveau.component';

const routes: Routes =[
  {

    path: '',
    data: {
      title: 'Niveau'
    },
    children: [
      {
        path: '',
        redirectTo: 'nouveau-niveau'
      },
      {
        path: 'nouveau-niveau',
        component: AddNiveauComponent,
        data: {
          id:"30",
          expectedRole: 'Nouveau Niveau',
          title: 'Nouveau Niveau'
        }
      },
      {
        path: 'nouveau-niveau/edit/:id',
        component: AddNiveauComponent,
        data: {
          id:"31",
          expectedRole: 'modifier le Niveau',
          title: 'modifier le Niveau'
        }
      },
      {
        path: 'liste-niveaux',
        component: ListNiveauComponent,
        data: {
          id:"32",
          expectedRole: 'liste des Niveaux',
          title: 'liste des Niveaux'
        }
      }
    ]

  }
 
  
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NiveauRoutingModule { }
