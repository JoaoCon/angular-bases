import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames:string[] = ['Spider-mon', 'Hulk', 'Thor','Iron-Man'];

  public heroEliminado?: string;

  borrarHeroe():void{
    this.heroEliminado = this.heroNames.pop();
  }
}
