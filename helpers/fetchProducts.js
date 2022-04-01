async function fetchProducts(produto) {
  const requisicao = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${produto}`)
    .then((resposta) => resposta.json())
    .then((dados) => dados.results)
    .catch(() => 'You must provide an url');
    return requisicao;
  }

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
