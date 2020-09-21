import {Injectable} from '@angular/core';
import {Game, Tile} from './types';

const shuffle = () => {
  const arr = [];
  for (let i = 0; i < 15; ++i) {
    arr.push(i);
  }
  // arr.sort(() => Math.random() - .5);
  return arr;
};


@Injectable({
  providedIn: 'root'
})
export class GameService {
  game: Game;

  constructor() {
  }

  get board(): Tile[] {
    return [];
  }

  start(): void {
    this.game = new Game();
  }

  end(): void {
    delete this.game;
    this.game = null;
  }

  get isDone(): boolean {
    return this.game && this.game.done;
  }
  get isRunning(): boolean {
    return !!this.game;
  }
}
