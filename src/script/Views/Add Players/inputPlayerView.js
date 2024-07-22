class PlayerListView {
  _parentEl = document.querySelector(".form-add-player");
  _quoteOfTheDayEl = document.querySelector("#quote-of-the-day");
  _btnStart = document.querySelector(".btn-start");

  getInputNameVal() {
    return this._inputEl.value;
  }

  addHandlerAddPlayerSubmit(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      const _inputName = this.querySelector("#input-name");
      e.preventDefault();
      handler(_inputName.value);
      _inputName.value = "";
    });
  }
  addHandlerStart(handler) {
    this._btnStart.addEventListener("click", handler);
  }

  addHandlerQuote(handler) {
    window.addEventListener("load", handler.bind(this._quoteOfTheDayEl));
  }
}

export default new PlayerListView();
