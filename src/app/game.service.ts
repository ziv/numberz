import {Injectable} from '@angular/core';
import {GameOo} from './game/game.oo.api';
import {Board, Tile} from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  game: GameOo;

  get board(): Board {
    return this.game?.board;
  }

  start(): void {
    this.game = new GameOo();
  }

  move(tile: Tile): void {
    this.game.move(tile);
  }

  end(): void {
    delete this.game;
    this.game = null;
  }
}
