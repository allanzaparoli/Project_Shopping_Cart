let somaValor = 0;

const classItems = document.querySelector('.items');
classItems.innerHTML = '<div class ="loading">carregando...</div>';
const selectItems = document.querySelector('.cart__items');
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 
  'Adicionar ao carrinho!')).id = sku;
  classItems.appendChild(section);
  return section;
}

function cartItemClickListener(event) {
  event.target.remove();
  const removendoItems = document.getElementsByClassName('cart__items')[0].innerHTML;
  saveCartItems(removendoItems);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  selectItems.appendChild(li);
  const salvandoItems = selectItems.innerHTML;
  saveCartItems(salvandoItems);
  somaValor += salePrice;
  const soma = document.getElementsByClassName('total-price')[0];
  soma.innerText = `Valor Total: R$ ${Math.round(somaValor)}`;
  return li;
  }

const ItemSelect = async (ids) => {
  const selecao = await fetchItem(ids);
 createCartItemElement({ sku: selecao.id, name: selecao.title, salePrice: selecao.price });
};

const itemHtml = async () => {
  const itemProdutos = await fetchProducts('computador');
  classItems.innerHTML = '';
  itemProdutos.forEach((element) =>
  createProductItemElement({ sku: element.id, name: element.title, image: element.thumbnail }));
  const pegarBotao = document.querySelectorAll('.item__add');
  pegarBotao.forEach((element) => 
  element.addEventListener('click', (event) => ItemSelect(event.target.id)));
  return itemProdutos;
};

const itemCarrinho = document.getElementsByClassName('cart__items')[0];
console.log(itemCarrinho);
itemCarrinho.innerHTML = (getSavedCartItems());
const itemLocal = document.getElementsByClassName('cart__item');
for (let i = 0; i < itemLocal.length; i += 1) {
  itemLocal[i].addEventListener('click', (evento) => {
    evento.target.remove();
  });
  const removendoItems = document.getElementsByClassName('cart__items')[0].innerHTML;
  saveCartItems(removendoItems);
}

const button = document.querySelector('.empty-cart');
function limparCarrinho() {
const limpaTudo = document.querySelector('.cart__items');
limpaTudo.innerHTML = '';
}
button.addEventListener('click', limparCarrinho);

window.onload = async () => { 
  await itemHtml();
};
