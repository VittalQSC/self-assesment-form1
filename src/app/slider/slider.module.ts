import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';

import { SliderComponent } from './slider.component';
@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
  ],
})
export class SliderModule { }
