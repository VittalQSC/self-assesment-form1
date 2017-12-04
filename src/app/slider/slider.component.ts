import { Component, OnInit } from '@angular/core';

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
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  fields = formData.fields;
  tickInterval = formData.tickInterval;

  min = formData.min;
  max = formData.max;
  step = formData.step;

  yValues = formData.fields.map(field => field.yValue);
  constructor() { }

  ngOnInit() {
  }

}
