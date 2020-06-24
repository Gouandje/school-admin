import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMatiereComponent } from './add-matiere.component';
import { ListMatiereComponent } from './list-matiere.component';
import { MatiereRoutingModule } from './matiere-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddMatiereComponent,
    ListMatiereComponent
  ],
  imports: [
    MatiereRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class MatiereModule { }
