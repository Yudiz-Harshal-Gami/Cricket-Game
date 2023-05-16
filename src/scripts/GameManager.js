class GameManager {
  constructor(oScene) {
    this.randomInRange = (f, t) => {
      let x = Math.random() * (t - f);
      return x + f;
    };
  }
}
