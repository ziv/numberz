import {Tile, Board} from './types';
import {init, move, shuffle} from './game.func.api';

export class GameOo {
  public board: Board = shuffle(init());

  get done(): boolean {
    return this.board.ready;
  }

  move(tile: Tile): void {
    this.board = move(this.board, tile);
  }
}
