import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tile} from '../types';

@Component({
  selector: 'nmz-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() tile: Tile;
  @Output() move = new EventEmitter<Tile>();

  action(): void {
    this.move.emit(this.tile);
  }

  get value(): number {
    return this.tile.value;
  }

  get cls(): string {
    const done = this.tile.done ? 'done' : '';
    const pos = `pos${this.tile.position}`;
    const movable = this.tile.movable ? 'movable' : '';
    return `${pos} ${movable} ${done}`;
  }
}
