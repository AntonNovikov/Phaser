// const { Phaser } = require("./phaser");

class Card extends Phaser.GameObjects.Sprite {
  constructor(scene, value, position) {
    super(scene, position.x, position.y, "card" + value);
    this.scene = scene;
    this.value = value;
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
