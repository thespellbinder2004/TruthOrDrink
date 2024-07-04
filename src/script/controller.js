import typeView from "./Views/Truth Or Drink/typeView.js";
import answerView from "./Views/Truth Or Drink/answerView.js";
// import "core-js/stable";
import {
  state,
  changeCurCardType,
  generateCard,
} from "./Models/truthOrDrinkModel.js";

const controlChangeCurCardType = function (e) {
  changeCurCardType(e.target.dataset.val);
};

const controlAnswer = function (e) {
  console.log(generateCard());
  answerView.resetAnimation();
};

const init = function () {
  typeView.addHandlerType(controlChangeCurCardType);
  answerView.addHandlerAnswer(controlAnswer);
};
init();
