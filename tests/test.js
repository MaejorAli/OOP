const assert = require('chai').assert;
const myApp = require('../src/main.js');

const MallCart = require('../src/main.js').MallCart;
const MallBag = require('../src/main.js').MallBag;


describe('Test cases for MallCart OOP ', () => {

   describe('keeps track of items added by User', () => {
       it('should return "7"', () => {
           const cityMall = new MallCart();
           cityMall.addItems(7,10,'shoe')
           assert.equal(cityMall.items.shoe, 7);
       });
   describe('keeps track of items removed by User', () => {
       it('should return "4"', () => {
           const cityMall = new MallCart();
           cityMall.addItems(7,10,'shoe')
           cityMall.removeItems(3,10,'shoe')
           assert.equal(cityMall.items.shoe, 4);
       });
   describe('keeps track of name of items', () => {
       it('should return "shoe"', () => {
           const cityMall = new MallCart();
           cityMall.addItems(7,10,'shoe')
           assert.equal(cityMall.nameOfItems, "shoe");
       });
});
   describe('can calculate  total', () => {
       it('should return "40"', () => {
           const cityMall = new MallCart();
           cityMall.addItems(7,10,'toys')
           cityMall.removeItems(3,10,'toys')
           assert.equal(cityMall.total, 40);
       });
}); 

 
}); 

});
});