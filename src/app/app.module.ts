import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material';
import { DndModule } from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent
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
