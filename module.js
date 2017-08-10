var testModule = (function(){
    var counter = 0;

    return {
        incrementCounter: function() {
            return counter++;
        },
        resetCounter: function() {
            console.log('counter value prior to reset: ' + counter);
            counter = 0;
        }
    }
})();

testModule.incrementCounter();
testModule.resetCounter();

var shoppingBasket = (function() {
    var basket = [];

    function doSomethingPrivate(){

    };

    return {
        addItem: function(values) {
            basket.push(values);
        },
        getItemCount: function() {
            return basket.length;
        },
        doSomething: doSomethingPrivate(),
        getTotal: function() {
            var quantity = this.getItemCount();
            var price = 0;
            while(quantity--) {
                price+= basket[quantity].price;
            }
            return price;
        }
    }
})();

shoppingBasket.addItem({
    item: 'bread',
    price: 0.5
});
shoppingBasket.addItem({
    item: 'butter',
    price: 0.3
});

console.log(shoppingBasket.getItemCount());
console.log(shoppingBasket.getTotal());