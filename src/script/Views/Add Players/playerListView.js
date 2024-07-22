class PlayerListView {
  _parentEl = document.querySelector(".grid-player-list");
  _closeButton = document.querySelector(".name-list-delete");

  renderList(names) {
    this._parentEl.innerHTML = "";
    names.forEach((val, i) => {
      const markup = `<div class="name-list-item">${i + 1}. ${val}
      <button class="name-list-delete" data-number="${i + 1}">X</button></div>`;
      this._parentEl.insertAdjacentHTML("beforeend", markup);
    });
  }
  deleteName(handler) {
    this._parentEl.addEventListener("click", function (e) {
      if (!e.target.classList.contains("name-list-delete")) return;
      const deleteNumber = Number(e.target.dataset.number);
      handler(deleteNumber);
    });
  }
}

export default new PlayerListView();
