import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeniedComponent } from './denied.component';
import { DeniedRoutingModule } from './denied-routing.module';



@NgModule({
  declarations: [DeniedComponent],
  imports: [
    DeniedRoutingModule,
    CommonModule
  ]
})
export class DeniedModule { }
