import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increasBy(1)">+1</button>
  <button (click)="resetBy()">Reset</button>
  <button (click)="increasBy(-1)">-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter:number = 10;
  increasBy(value:number):void{
    this.counter += value;
  }
  resetBy():void{
    this.counter = 10;
  }
}
