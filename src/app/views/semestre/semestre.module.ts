import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemestreComponent } from './semestre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListSemestreComponent } from './list-semestre.component';
import { SemestreRoutingModule } from './semestre-routing.module';



@NgModule({
  declarations: [
    SemestreComponent, 
    ListSemestreComponent
  ],
  imports: [
    SemestreRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class SemestreModule { }
