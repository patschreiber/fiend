export class AssetLoader {
  private _assetList: Array<any>;

  constructor() {
    this._assetList = [];
  }

  public initAssets(): Array<any> {
    return [
      this.loadImage("testTileset", "./data/assets/1bittest.png"),
      this.loadImage("testTileset2", "./data/assets/psychic-swamp.png"),
      this.loadImage("TESTORIG", "./data/assets/low-res-spritesheet.png"),
      this.loadImage(
        "TESTNUMBERED",
        "./data/assets/pixel_art_tileset_test.png"
      ),
      this.loadImage(
        "player_stand_in",
        "./data/assets/textures/actors/character-stand-in.png"
      ),
      this.loadImage(
        "npc_stand_in",
        "./data/assets/textures/actors/npc-stand-in.png"
      ),
      this.loadImage(
        "NULL_TEX",
        "./data/assets/textures/null-texture-no-white.png"
      ),
    ];
  }

  public loadImage(key: string, src: string) {
    let img = new Image();

    let d = new Promise(
      function (resolve, reject) {
        img.onload = function () {
          this._assetList[key] = img;
          resolve(img);
        }.bind(this);

        img.onerror = function () {
          reject("Could not load image: " + src);
        };
      }.bind(this)
    );

    img.src = src;

    return d;
  }

  public getImage(key: string): HTMLImageElement {
    return key in this._assetList ? this._assetList[key] : null;
  }
}
