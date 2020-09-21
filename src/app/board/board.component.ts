import {Component, Input} from '@angular/core';
import {Game} from '../types';

@Component({
  selector: 'nmz-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent{
  @Input() game: Game;
}
