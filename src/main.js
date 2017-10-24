class MallCart{
  constructor(){
//this instance variable stores the total amount of goods purchased
    this.total = 0;
//this stores key:value pairs of goods purchased and quantity
    this.items = {};
//this is the balaance of customer after checking out
    this.balance = 0;
//this variable determines when and how much discount you should use
    this.discount = 0;
// keeps track of the items in the items 
    this.nameOfItems = [];
  }
  
//add items to cart
  addItems(quantity,price,nameOfItem){
/*check if the customer has purchased a particular item before,
  then sum up the quantities 
  previous values or creating new ones */
    if(this.nameOfItems.indexOf(nameOfItem) in this.nameOfItems){
      this.items[nameOfItem] += quantity;
      this.total += quantity * price;
//If item has not been purchased before,we create it in the items instance variable
    }else{
      this.total += quantity * price;
      this.items[nameOfItem] =  quantity;
      this.nameOfItems.push(nameOfItem);
    }
   
  }
//remove items from cart   
  removeItems(quantity,price,nameOfItem){
/*if the quantity being removed is greater than or equal to the quantity already in cart,
we  remove that particular item totally from the cart */
    if (quantity >= this.items[nameOfItem]){
      this.total -= this.items[nameOfItem]* price;
      delete this.items[nameOfItem];
      this.nameOfItems.splice(indexOf(nameOfItem))
    }
//we update our total and items
    this.total -= quantity*price;
    this.items[nameOfItem] -= quantity
  }

//this method can be used to check whether you qualify for a discount  
  addMoreToYourCart(){
    if (this.total < 100){
      return " You do not qualify for our freebies,spend up to $100 to qualify";
    }
    this.discount += 5/100 * this.total;
    return "You qualify for discount worth "+this.discount;
  }

//checkout   
  checkOutWithYourCart(amountPaid){
    if(amountPaid < this.total){
      return "You have not paid enough";
    }
    this.balance += amountPaid - this.total;
    if (this.total < 100){
      return "Thanks For shopping with us,\n"+ this.balance +" is your balance"
    }
    this.discount += 5/100 * this.total;
    return "Thanks For shopping with us,\n$"+ this.balance +" is your balancet\nYou qualify for discount worth $"+ this.discount
  }

// add items to your cart with discount 
  addItemsWithDiscount(quantity,price,nameOfItem){
    if (this.discount < 1){
      return "Sorry you cannot use this service right now";
    }
    else if(this.discount < (quantity*price)){
      return "You have exceeded your discount purchasing limit"
    }
    this.discount -= quantity * price;
    this.items[nameOfItem] = quantity;
  }
}

/*here this is a Mallbag 
that inherits from the Mall cart class
*/
class MallBag extends MallCart{
  addMoreToYourCart(){
    if (this.total < 75){
      return " You do not qualify for freebies,spend up to $100";
    }
//this exhibits polymorphism    
    this.discount += 3;
    return "You can add more to your cart worth $10 to your cart";
  }
}


//instances
let cityMall = new MallCart();
cityMall.addItems(3,50,"shoe"); 
cityMall.addItems(3,50,"shoe");
console.log(cityMall.items);
cityMall.removeItems(2,50,"shoe");
console.log(cityMall.items);
console.log(cityMall.nameOfItems);
cityMall.addItems(3,80,"macbook");
console.log(cityMall.total);
console.log(cityMall.checkOutWithYourCart(500));
cityMall.addItemsWithDiscount(2,8,"packet");
console.log(cityMall.discount);
console.log(cityMall.addItemsWithDiscount(1,10,'matches'));

module.exports = {
    MallCart, MallBag
}