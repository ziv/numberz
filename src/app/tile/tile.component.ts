import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tile} from '../game';

@Component({
  selector: 'nmz-tile',
  template: `
    <div [ngClass]="cls" (click)="move.emit(tile)">
      <span>{{tile.value}}</span>
    </div>`,
  styles: [`
    div {
      height: 49px;
      width: 49px;
      line-height: 50px;
      text-align: center;
      position: absolute;
      background-color: #b1b386;

      border: 1px solid white;

      transition-property: all;
      transition-duration: .3s;
      transition-timing-function: ease;
    }`]
})
export class TileComponent {
  @Input() tile: Tile;
  @Output() move = new EventEmitter<Tile>();

  get cls(): string {
    const pos = `pos${this.tile.position}`;
    const movable = this.tile.movable ? 'movable' : '';
    return `${pos} ${movable}`;
  }
}
