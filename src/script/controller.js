import * as model from "./Models/model.js";
import * as truthOrDrinkModel from "./Models/truthOrDrinkModel.js";

import inputPlayerView from "./Views/Add Players/inputPlayerView.js";
import playerListView from "./Views/Add Players/playerListView.js";

import Views from "./Views/Views.js";
import typeView from "./Views/Truth Or Drink/typeView.js";
import answerView from "./Views/Truth Or Drink/answerView.js";
import cardView from "./Views/Truth Or Drink/cardView.js";
// import "core-js/stable";

console.log("I love you Kimberly");

const controlStartGame = function () {
  if (truthOrDrinkModel.getPlayerArr().length <= 1) {
    alert("Please enter atleast two(2) Players to play.");
    return;
  }
  Views.startGame();
};

// For Adding Player

const controlAddPlayer = function (name) {
  if (!name) return;
  model.addPlayer(name);
  playerListView.renderList(truthOrDrinkModel.getPlayerArr());
  console.log(truthOrDrinkModel.getPlayerArr());
};

const controlDeletePlayer = function (number) {
  model.removePlayer(number - 1);

  playerListView.renderList(truthOrDrinkModel.getPlayerArr());
};

const controlRenderQuote = async function () {
  const objQuote = await model.getQuote();
  console.log(objQuote);
  const quoteAuthor = objQuote.author;
  const quoteText = objQuote.quote;
  this.innerHTML = `${quoteText} <br><br> ~${quoteAuthor}`;
};

const controlChangeCurCardType = function (e) {
  truthOrDrinkModel.changeCurCardType(e.target.dataset.val);
};

const controlAnswer = function (e) {
  answerView.resetAnimation();
  cardView.renderCard(truthOrDrinkModel.generateCard());
};

const init = function () {
  typeView.addHandlerType(controlChangeCurCardType);
  answerView.addHandlerAnswer(controlAnswer);
  inputPlayerView.addHandlerAddPlayerSubmit(controlAddPlayer);
  inputPlayerView.addHandlerQuote(controlRenderQuote);
  inputPlayerView.addHandlerStart(controlStartGame);
  playerListView.deleteName(controlDeletePlayer);
};
init();
