const saveCartItems = (salvandoItems) => {
 localStorage.setItem('itemsSalvos', JSON.stringify(salvandoItems));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
