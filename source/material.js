class Material {
  constructor(name, sprite, x, y) {
    this.name = name;
    this.sprite = game.add.sprite(x, y, sprite); 
    this.sprite.inputEnabled = true;
  }
}