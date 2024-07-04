import Views from "../Views.js";

class TypeView {
  _parentEl = document.querySelector(".container-type");
  _containerType = document.querySelector(".container-type");

  addHandlerType(handler) {
    this._parentEl.addEventListener("click", async function (e) {
      e.preventDefault();
      if (!e.target.classList.contains("btn-type")) return;

      //Handler Function
      await handler(e);

      //Setting active button style
      Object.keys(this.children).forEach((val) =>
        this.children[val].classList.remove("btn-type-active")
      );
      e.target.classList.add("btn-type-active");
    });
  }
}

export default new TypeView();
