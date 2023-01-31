// const { Phaser } = require("./phaser");

class Card extends Phaser.GameObjects.Sprite {
  constructor(scene, position) {
    super(scene, position.x, position.y, "card");
    this.scene = scene;
    this.setOrigin(0, 0).setDisplaySize(
      config.cardSize.width,
      config.cardSize.height
    );
    this.scene.add.existing(this);
  }
  //   this.add
  //     .sprite(position.x, position.y, "card")
  //
}
