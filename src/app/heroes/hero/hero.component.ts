import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman';
  public age : number = 49;

  // Getter se ve como una propiedad y se renderisa desde el HTML
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  changeName(): void {
    this.name = 'Oscar';
  }

  changeAge(): void {
    this.age = 30;
  }

  getHeroDescription(): string {
    return `${this.name} ${this.age}`;
  }

  resetForm(): void {
    this.name = 'iroman';
    this.age = 49;
  }

}
