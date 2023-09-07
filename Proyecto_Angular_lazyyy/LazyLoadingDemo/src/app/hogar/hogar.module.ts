import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HogarRoutingModule } from './hogar-routing.module';
import { HogarComponent } from './hogar.component';


@NgModule({
  declarations: [
    HogarComponent
  ],
  imports: [
    CommonModule,
    HogarRoutingModule
  ]
})
export class HogarModule { }
