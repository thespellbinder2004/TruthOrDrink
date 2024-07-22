import Views from "../Views.js";

class CardView extends Views {
  _parentEl = document.querySelector(".container-card");
  _pCard = document.querySelector(".p-card");

  renderCard(card) {
    this.resetAnimation();
    this._parentEl.children[0].textContent = card;
  }
}

export default new CardView();
