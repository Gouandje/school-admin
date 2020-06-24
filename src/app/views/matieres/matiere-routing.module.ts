import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMatiereComponent } from './add-matiere.component';
import { ListMatiereComponent } from './list-matiere.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {

    path: '',
    data: {
      title: 'Matiere'
    },
    children: [
      {
        path: '',
        redirectTo: 'nouvelle-matiere'
      },
      {
        path: 'nouvelle-matiere',
        component: AddMatiereComponent,
        data: {
          id:"40",
          expectedRole: 'Nouvelle Formation',
          title: 'Nouvelle Matière'
        }
      },
      {
        path: 'nouvelle-matiere/edit/:id',
        component: AddMatiereComponent,
        data: {
          id:"41",
          expectedRole: 'Nouvelle Formation',
          title: 'Nouvelle Matière'
        }
      },
      {
        path: 'liste-matieres',
        component: ListMatiereComponent,
        data: {
          id:"42",
          expectedRole: 'Nouvelle Formation',
          title: 'liste des Matières'
        }
      }


    ]

  }
 
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatiereRoutingModule { }
