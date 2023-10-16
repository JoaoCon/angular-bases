import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'Iron-Man';
  public age:number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeName():void{
    this.name = 'spiderman'
  }

  changeAge():void{
    this.age = 27
  }

  resetForm():void{
    this.age = 48
    this.name = 'iron-Man'
  }

}
