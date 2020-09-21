export class Tile {
  done = false;
  constructor(public readonly value: number,
              public position: number,
              public movable: boolean) {
  }
}

export class Game {
  done = false;
  tiles: Tile[];
  empty = 15;

  constructor() {
    // create tiles
    this.tiles = [];
    for (let i = 0; i < 15; ++i) {
      this.tiles.push(new Tile(i, i, i === 14 || i === 11));
    }
    // shuffle them
    this.shuffle();
  }

  move(t: Tile): void {
    this.doMove(t);
    if (this.isDone()) {
      this.tiles.forEach(tile => tile.done = true);
      this.done = true;
    }
  }

  private doMove(t: Tile): void {
    if (!t.movable) {
      return;
    }

    // swap tile with empty
    const empty = t.position;
    t.position = this.empty;
    this.empty = empty;

    // mark movable
    const top = empty - 4;
    const bottom = empty + 4;
    const left = empty - 1;
    const right = empty + 1;

    // reset movable
    this.tiles.forEach(tile => {
      tile.movable = false;
      tile.done = false;
    });

    // mark movable
    if (top >= 0) {
      // mark top
      this.markMovable(top);
    }
    if (bottom < 16) {
      // mark bottom
      this.markMovable(bottom);
    }
    if (![3, 7, 11, 15].includes(left) && left >= 0) {
      // mark left
      this.markMovable(left);
    }
    if (![0, 4, 8, 12].includes(right) && right < 16) {
      // mark right
      this.markMovable(right);
    }
  }

  private markMovable(position: number): void {
    this.tiles.filter(tile => tile.position === position)[0].movable = true;
  }

  private isDone(): boolean {
    return this.tiles.every(tile => tile.position === tile.value);
  }

  private shuffle(): void {
    // loop for 100 moves and randomly move tiles
    // we don't shuffle the array directly and use moves
    // shuffling the array can cause unsolvable situations
    for (let i = 0; i < 100; ++i) {
      // fetch movable tiles
      const movable = this.tiles.filter(t => t.movable);
      // select one to move
      const tile = movable[Math.floor(Math.random() * movable.length)];
      this.doMove(tile);
    }
  }
}


