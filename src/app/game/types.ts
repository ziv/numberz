export class Tile {
  constructor(public readonly value: number,
              public position: number,
              public movable: boolean) {
  }
}

export class Board {
  constructor(public tiles: Tile[],
              public empty: number) {
  }

  search(position: number): Tile {
    return this.tiles.find(tile => tile.position === position);
  }

  get movables(): Tile[] {
    return this.tiles.filter(tile => tile.movable);
  }

  get ready(): boolean {
    return this.tiles.every(tile => tile.value === tile.position);
  }
}
