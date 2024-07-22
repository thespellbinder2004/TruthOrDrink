export default class Views {
  static _truthOrDrink = document.querySelector(".page-truth-or-drink");
  static _addPlayer = document.querySelector(".page-add-players");
  //   _parentEl = document.querySelector(".container-answer");
  static startGame() {
    this._addPlayer.classList.add("hidden");
    this._truthOrDrink.classList.remove("hidden");
  }
  resetAnimation() {
    this._parentEl.style.animationName = "none";
    requestAnimationFrame(() => {
      this._parentEl.style.animationName = "";
    });
  }
}
