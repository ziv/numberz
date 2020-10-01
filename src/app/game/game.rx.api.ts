import {Board, Tile} from './types';
import {init, move} from './game.func.api';
import {BehaviorSubject} from 'rxjs';

export class GameRxApi {
  private engine = new BehaviorSubject<Board>(null);
  public game = this.engine.asObservable();

  start(): void {
    this.engine.next(init());
    const sub = this.game.subscribe(game => {
      if (game.ready) {
        this.engine.complete();
        sub.unsubscribe();
      }
    });
  }

  move(tile: Tile): void {
    this.engine.next(move(this.engine.getValue(), tile));
  }
}
