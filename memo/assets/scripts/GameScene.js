class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }
  preload() {
    // console.log("Preload")
    this.load.image("bg", "assets/sprites/background.jpg");
    this.load.image("card", "assets/sprites/card.jpg");
    // this.load.image("bg","/memo/assets/sprites/background.jpg")
  }
  create() {
    // установить точку вставки другую
    //   let bg = this.add.sprite(0,0,"bg");
    // bg.setOrigin(0.2,0.3);

    //коротка запись

    this.add.sprite(0, 0, "bg").setOrigin(0, 0);

    for (let position of this.getCardsPositions())
      this.add
        .sprite(position.x, position.y, "card")
        .setOrigin(0, 0)
        .setDisplaySize(config.cardSize.width, config.cardSize.height);

    //config.width/2 = this.sys.game.config.width/2
    //   this.add.sprite(
    //     this.sys.game.config.width / 2,
    //     this.sys.game.config.height / 2,
    //     "bg"
    //   );
    console.log("create");
  }
  getCardsPositions() {
    let position = [];
    let cardTexture = this.textures.get("card").getSourceImage();
    //   let cardWidth = 196 + 8;
    let cardWidth =
      cardTexture.width * (config.cardSize.width / cardTexture.width) + 8;
    console.log(cardWidth);
    //   let cardHeight = 306 + 8;

    let cardHeight =
      cardTexture.height * (config.cardSize.height / cardTexture.height) + 8;
    console.log(`Высота: ${cardHeight}`);
    let offsetX = (this.sys.game.config.width - config.cols * cardWidth) / 2;
    console.log(offsetX);
    let offsetY = (this.sys.game.config.height - config.rows * cardHeight) / 2;
    console.log(offsetY);

    for (let row = 0; row < config.rows; row++) {
      for (let col = 0; col < config.cols; col++) {
        position.push({
          x: col * cardWidth + offsetX,
          y: row * cardHeight + offsetY,
        });
      }
    }

    return position;
  }
}
