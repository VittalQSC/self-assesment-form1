import { Component } from '@angular/core';

const formData = {
  min: 0,
  max: 5,
  step: 1,
  tickInterval: 1, 
  fields: [
    {
      value: 0,
      yValue: 'label #1',
      xValue: null,
    },
    {
      value: 0,
      yValue: 'label #2',
      xValue: null,
    },
    {
      value: 0,
      yValue: 'label #3',
      xValue: null,
    },
  ],
  xValues: [],
  yValues: ['label #1', 'label #2', 'label #3'],
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fields = formData.fields;
  tickInterval = formData.tickInterval;

  min = formData.min;
  max = formData.max;
  step = formData.step;
  
  yValues = formData.fields.map(field => field.yValue);

  constructor () {
    // setInterval(() => {
    //   console.log('settimeout', this.value);
    //   this.value = (this.value+1)%this.max;
    // }, 2000);
  }

}
