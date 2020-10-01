import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Board, Tile} from '../game';

@Component({
  selector: 'nmz-board',
  template: `<nmz-tile *ngFor="let t of board.tiles" [tile]="t" (move)="move.emit($event)"></nmz-tile>`,
  styles: [`
    :host {
      display: block;
      position: relative;

      height: 200px;
      width: 200px;
      border: 5px solid purple;
    }
  `]
})
export class BoardComponent {
  @Input() board: Board;
  @Output() move = new EventEmitter<Tile>();
}
