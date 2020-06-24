import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiveauRoutingModule } from './niveau-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNiveauComponent } from './add-niveau.component';
import { ListNiveauComponent } from './list-niveau.component';



@NgModule({
  declarations: [
    AddNiveauComponent,
    ListNiveauComponent
],
  imports: [
    NiveauRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class NiveauModule { }
