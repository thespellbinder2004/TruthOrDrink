import Views from "../Views.js";

class AnswerView extends Views {
  _parentEl = document.querySelector(".container-answer");

  addHandlerAnswer(handler) {
    this._parentEl.addEventListener("click", async function (e) {
      e.preventDefault();
      if (!e.target.classList.contains("btn-answer")) return;
      //Handler Function
      await handler(e);
      console.dir(Views);
    });
  }
}

export default new AnswerView();
