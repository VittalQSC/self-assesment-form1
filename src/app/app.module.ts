import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';
import { DndModule } from 'ng2-dnd';

import { SliderModule } from "./slider/slider.module";
import { SliderComponent } from "./slider/slider.component";

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    
    DndModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
