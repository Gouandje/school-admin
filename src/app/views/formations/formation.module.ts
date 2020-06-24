import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFormationsComponent } from './add-formations.component';
import { EditFormationsComponent } from './edit-formations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormationRoutingModule } from './formation-routing.module';
import { AddCertificatComponent } from './add-certificat.component';
import { ListCertificatComponent } from './list-certificat.component';
import { ListFormationComponent } from './list-formation.component';


@NgModule({
  declarations: [ 
    AddFormationsComponent,
    EditFormationsComponent,
    AddCertificatComponent,
    ListCertificatComponent,
    ListFormationComponent 
  ],
  imports: [
    FormationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class FormationModule { }
