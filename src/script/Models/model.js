export const modelState = {
  players: [],
};

export const addPlayer = function (name) {
  modelState.players.push(name);
};
export const removePlayer = function (index) {
  modelState.players = modelState.players.filter((val, i) => {
    return index === i ? false : true;
  });
};

export const getQuote = async function () {
  const quote = await fetch("https://quotes-api-self.vercel.app/quote");
  return await quote.json();
};
