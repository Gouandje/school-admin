import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeniedComponent } from './denied.component';
import { Routes } from '@angular/router';
const routes: Routes =[
  {

    path: '',
    data: {
      title: 'accès denied'
    },
    children: [
      {
        path: '',
        redirectTo: 'not-access'
      },
      {
        path: 'not-access',
        component: DeniedComponent,
        data: {
          title: 'Accès non autorisé'
        }
      }
    ]

  }
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DeniedRoutingModule { }
