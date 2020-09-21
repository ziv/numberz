// class Tile {
//   constructor(public readonly value: number,
//               public position: number,
//               public movable: boolean) {
//   }
// }
//
// class Board {
//   constructor(public tiles: Tile[], public empty = 15) {
//     tiles.sort((a, b) => a.position - b.position);
//   }
//
//   move(t: Tile): void {
//     if (!t.movable) {
//       return;
//     }
//
//     // swap tile with empty
//     const empty = t.position;
//     t.position = this.empty;
//     this.empty = empty;
//
//     // mark movable
//     const top = empty - 4;
//     const bottom = empty + 4;
//     const left = empty - 1;
//     const right = empty + 1;
//
//     // reset movable
//     this.tiles.forEach(tile => {
//       tile.movable = false;
//     });
//
//     // mark movable
//     if (top > 0) {
//       console.log('top', top);
//       // mark top
//       this.markMovable(top);
//     }
//     if (bottom < 16) {
//       console.log('bottom', bottom);
//       // mark bottom
//       this.markMovable(bottom);
//     }
//     if (![3, 7, 11, 15].includes(left)) {
//       console.log('left', left);
//       // mark left
//       this.markMovable(left);
//     }
//     if (![0, 4, 8, 12].includes(right)) {
//       console.log('right', right);
//       // mark right
//       this.markMovable(right);
//     }
//   }
//
//   markMovable(position: number): void {
//     console.log(position);
//     this.tiles.filter(tile => tile.position === position)[0].movable = true;
//   }
// }
//
// const shuffle = () => {
//   const arr = [];
//   for (let i = 0; i < 15 ; ++i) {
//     arr.push(i);
//   }
//   arr.sort(() => Math.random() - .5);
//   return arr;
// };
//
// const x =  new Board(shuffle().map((value, position) => new Tile(value, position, position === 14 || position === 11)));
//
// x.move(x.tiles[14]);
// x.move(x.tiles[10]);
// x.tiles.sort((a, b) => a.position - b.position);
// console.log(x);
