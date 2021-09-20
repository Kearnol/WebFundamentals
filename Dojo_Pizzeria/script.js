function pizzaOven(crustType, suaceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.suaceType = suaceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza
    }

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olvies", "onions"])
var pizza3 = pizzaOven("thin crust", "white sauces", ["white chees", "parm"], ["onions", "peppers"]);
var pizza4 = pizzaOven("regular crust", "marinara", ["mozzeralla"], ["BBQ Chicken", "Bacon", "onions"]);

// console.log(pizza1, pizza2, pizza3, pizza4);


// A function for random menu selection: 

function randomPizza(){
    var menu = [pizza1, pizza2, pizza3, pizza4];
    var random = Math.floor(Math.random()* menu.length)
    console.log(random);
    return menu[random];
}

console.log(randomPizza());