// const { Phaser } = require("./phaser");

class Card extends Phaser.GameObjects.Sprite {
  //   constructor(scene, value, position) {
  constructor(scene, value) {
    super(scene, 0, 0, "card");
    // super(scene, position.x, position.y, "card" + value);
    this.scene = scene;
    this.value = value;
    this
      // .setOrigin(0.5, 0.5)
      .setDisplaySize(config.cardSize.width, config.cardSize.height);
    this.scaleX = 0.2;
    this.scene.add.existing(this);
    this.setInteractive();
    // this.on("pointerdown", this.open, this);
    this.opened = false;
    console.log(this);
    this.flip();
    // this.scaleX = 0.5;
  }
  //   this.add
  //     .sprite(position.x, position.y, "card")
  //

  flip(texture) {
    this.scene.tweens.add({
      targets: this,
      scaleX: 0,
      ease: "Linear",
      duration: 550,
      onComplete: () => {
        this.show(texture);
        console.log("on tween complete");
      },
    });
  }

  show(texture) {
    this.setTexture(texture);
    this.scene.tweens.add({
      targets: this,
      scaleX: 0.8,
      //   scaleX: 0.5,
      ease: "Linear",
      duration: 550,
    });
  }

  open() {
    this.opened = true;
    this.flip("card" + this.value);
    // this.setTexture("card" + this.value).setDisplaySize(
    //   config.cardSize.width,
    //   config.cardSize.height
    // );

    // this.scaleX = 0.2;

    console.log("he");
  }

  close() {
    this.opened = false;
    this.flip("card");

    // this.setTexture("card").setDisplaySize(
    //   config.cardSize.width,
    //   config.cardSize.height
    // );
  }
}
