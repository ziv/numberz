import {Tile, Board} from './types';

export function init(): Board {
  const tiles = [];
  const empty = 15;
  for (let i = 0; i < 15; ++i) {
    tiles.push(new Tile(i, i, i === 14 || i === 11));
  }
  return new Board(tiles, empty);
}

export function move(board: Board, tile: Tile): Board {
  // just in case
  if (!tile.movable) {
    return board;
  }

  // swap title position with empty
  const empty = tile.position;
  tile.position = board.empty;
  board.empty = empty;

  // reset tiles movable status
  board.tiles.forEach(t => t.movable = false);

  // new proposed movable position
  const top = empty - 4;
  const bottom = empty + 4;
  const left = empty - 1;
  const right = empty + 1;

  // let's check those suspects
  if (top >= 0) {
    board.search(top).movable = true;
  }
  if (bottom < 16) {
    board.search(bottom).movable = true;
  }
  if (![3, 7, 11, 15].includes(left) && left >= 0) {
    board.search(left).movable = true;
  }
  if (![0, 4, 8, 12].includes(right) && right < 16) {
    board.search(right).movable = true;
  }
  return board;
}

export function shuffle(board: Board): Board {
  // done using randomly moves
  // randomizing the array can cause unsolvable situations
  for (let i = 0; i < 256; ++i) {
    const movable = board.movables;
    // select one to move
    const tile = movable[Math.floor(Math.random() * movable.length)];
    board = move(board, tile);
  }
  return board;
}


