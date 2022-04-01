const getSavedCartItems = () => JSON.parse(localStorage.getItem('itemsSalvos'));

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
