export class Loader {
  private _assetList: Array<any>;

  constructor() {
    this._assetList = [];
  }

  public initAssets(): Array<any> {
    return [
      this.loadImage("testTileset", "./DAT/1bittest.png"),
      this.loadImage("testTileset2", "./DAT/psychic-swamp.png"),
      this.loadImage("TESTORIG", "./DAT/low-res-spritesheet.png"),
      this.loadImage("TESTNUMBERED", "./DAT/pixel_art_tileset_test.png"),
    ];
  }

  public loadImage(key: string, src: string) {
    let img = new Image();

    let d = new Promise(function (resolve, reject) {
      img.onload = function () {
        this._assetList[key] = img;
        resolve(img);
      }.bind(this);

      img.onerror = function () {
        reject('Could not load image: ' + src);
      };
    }.bind(this));
  
    img.src = src;
  
    return d;
  }

  public getImage(key: string): HTMLImageElement {
    return (key in this._assetList) ? this._assetList[key] : null;
  };
}