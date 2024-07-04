export default class Views {
  //   _parentEl = document.querySelector(".container-answer");
  resetAnimation() {
    console.log(_parentEl);
    this._parentEl.style.animationName = "none";
    requestAnimationFrame(() => {
      this._parentEl.style.animationName = "";
    });
  }
}
