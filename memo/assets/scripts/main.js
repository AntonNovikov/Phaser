// import { Phaser } from "./phaser";
// let scene = new Phaser.Scene("Game");
// let scene = new GameScene();

let config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  rows: 2,
  cols: 5,
  cards: [1, 2, 3, 4, 5],
  scene: new GameScene(),

  cardSize: { height: 306, width: 196 },
};
let game = new Phaser.Game(config);
