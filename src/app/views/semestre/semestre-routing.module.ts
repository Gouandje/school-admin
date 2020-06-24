import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SemestreComponent } from './semestre.component';
import { ListSemestreComponent } from './list-semestre.component';

const routes: Routes =[
  {

    path: '',
    data: {
      title: 'Semestre'
    },
    children: [
      {
        path: '',
        redirectTo: 'nouveau-semestre'
      },
      {
        path: 'nouveau-semestre',
        component: SemestreComponent,
        data: {
          id:"50",
          expectedRole: 'Nouveau Semestre',
          title: 'Nouveau Semestre'
        }
      },
      {
        path: 'nouveau-semestre/edit/:id',
        component: SemestreComponent,
        data: {
          id:"51",
          expectedRole: 'modifier le Semestre',
          title: 'modifier le Semestre'
        }
      },
      {
        path: 'liste-semestres',
        component: ListSemestreComponent,
        data: {
          id:"52",
          expectedRole: 'liste des Semestres',
          title: 'liste des semestres'
        }
      }
    ]
  }
 
  
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SemestreRoutingModule { }
