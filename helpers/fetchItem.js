const fetchItem = async (produto) => {
  const adicionaItem = await fetch(`https://api.mercadolibre.com/items/${produto}`)
  .then((resposta) => resposta.json())
  .then((dados) => dados);
  return adicionaItem;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
