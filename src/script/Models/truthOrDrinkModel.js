import { cards } from "./cards.js";
import { modelState } from "./model.js";

export const state = {
  cards: cards,
  curCardType: "",
  curCards: [],
  players: modelState.players,
};

export const changeCurCardType = function (type) {
  state.curCardType = type;
  state.curCards = state.cards[state.curCardType];
};

export const generateCard = function () {
  const cardIndex = Math.floor(Math.random() * state.curCards.length);
  const playerIndex = Math.floor(Math.random() * state.players.length);
  return state.curCards[cardIndex].replaceAll("*", state.players[playerIndex]);
};

export const getPlayerArr = function () {
  state.players = modelState.players;
  return state.players;
};
