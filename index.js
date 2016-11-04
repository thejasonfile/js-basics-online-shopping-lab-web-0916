var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  } else {
    var str = "In your cart, you have ";
    var counter = 0;
    for (var items in cart){
        var obj = cart[items];
        var item = Object.keys(obj);
        str += `${item[0]} at $${obj[item]}`;
        if (counter < cart.length - 1){
          str += ', ';
          counter++;
        }
    }
    str += '.';
    console.log(str);
  }
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(num = "none"){
  if(num === 'none'){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${num}.`)
  }
  cart = [];
}






