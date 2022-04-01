require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Verifica se `fetchProducts` é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it ('Executa a função `fetchProducts`com argumento "computador" e testa se `fetch` foi chamado', async () => {  await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it ('Teste se, ao chamar a função `fetchProducts` com o argumento "computador", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => { await fetchProducts('computador');
    expect(fetch).toBeCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador");
  });
  it('Teste se o retorno da função `fetchProducts` com o argumento "computador" é uma estrutura de dados igual ao objeto `computadorSearch`, que já está importado no arquivo', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch)
  });
  it ('Teste se, ao chamar a função `fetchProducts` sem argumento, retorna um erro com a mensagem: `You must provide an url`', async () => {
    try {
      fetchProducts();
    }
    catch (error) {
      expect(error).toBe('You must provide an url')
    }
  });
});
