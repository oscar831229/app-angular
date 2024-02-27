import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <h1>Hola counter</h1>
      <h3>Contador de visiata {{ counter }}</h3>
      <button (click)="increaseBy(1)">+1</button>
      <button (click)="resetCounter()">reset</button>
      <button (click)="increaseBy(-1)">-1</button>
    `
})

export class CounterComponent {

  
  public counter: number = 2;

  public increaseBy(increment: number): void {
    this.counter = this.counter + increment;
  }

  public resetCounter(): void{
    this.counter = 2;
  }

}
