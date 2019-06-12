var Loader = {
  images: {}
};

Loader.initAssets = function() {
  return [
    this.loadImage("testTileset", "src/lib/data/1bittest.png"),
    this.loadImage("testTileset2", "src/lib/data/psychic-swamp.png"),
    this.loadImage("testSprite", "src/lib/data/sprites/Witchcraft_spr_1.png"),
    this.loadImage("testSprite2", "src/lib/data/sprites/Witchcraft_spr_2.png"),
    this.loadImage("testSprite3", "src/lib/data/sprites/Witchcraft_spr_3.png"),
    this.loadImage("testSprite4", "src/lib/data/sprites/Witchcraft_spr_4.png"),
    this.loadImage("TESTORIG", "src/lib/data/low-res-spritesheet.png"),
    this.loadImage("TESTNUMBERED", "src/lib/data/pixel_art_tileset_test.png"),
  ];
}

Loader.loadImage = function(key, src) {
  var img = new Image();

  var d = new Promise(function (resolve, reject) {
      img.onload = function () {
          this.images[key] = img;
          resolve(img);
      }.bind(this);

      img.onerror = function () {
          reject('Could not load image: ' + src);
      };
  }.bind(this));

  img.src = src;

  return d;
};

Loader.getImage = function (key) {
  return (key in this.images) ? this.images[key] : null;
};
