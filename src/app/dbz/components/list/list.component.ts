import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public OnDelete : EventEmitter<string> = new EventEmitter;

  @Input()
  public characterList: Character[]=  [{
    name: 'Trunks',
    power: 10
  }];

  onDeleteCharacter(id?:string):void{
    //EMITIR EL ID DEL PERSONAJE

    if (! id ) return;
    console.log(id)
    this.OnDelete.emit(id);
  };

}
