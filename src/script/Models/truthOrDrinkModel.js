export const state = {
  cards: {},
  curCardType: "",
  curCards: [],
  players: ["kim", "joseph", "james"],
};

const _loadCards = async function () {
  try {
    const cards = await fetch("./cards.json");
    state.cards = await cards.json();
    console.log(state.cards);
  } catch (err) {
    console.dir(err);
  }
};
_loadCards();

export const changeCurCardType = function (type) {
  state.curCardType = type;
  state.curCards = state.cards[state.curCardType];
};

export const generateCard = function () {
  const cardIndex = Math.floor(Math.random() * state.curCards.length);
  const playerIndex = Math.floor(Math.random() * state.players.length);
  return state.curCards[cardIndex].replaceAll("*", state.players[playerIndex]);
};
