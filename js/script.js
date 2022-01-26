var sandwich = {
    pan:    "masa madre",
    proteína:  "asado",
    queso:   "queso suizo lacey",
    salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
};

function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);

let pizza = {
    tipoCorteza: "elastica",
    tipoSalsa:  "extranjera",
    quesos:   ["queso suizo 98"],
    salsas: ["s. tomate", "s. cebolla", "s. ajo"]
};
function pizzaOven(corteza, tipoSalsa, quesos, salsas) {
    let pizza = {};
    pizza.tipoCorteza = corteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}  
let p1 = pizzaOven("estilo Chicago", "tradicional", ["mozarella"],
 ["peperoni", "salchicha"]);
console.log(p1);

let p2 = pizzaOven("lanzada a mano", "marinara", ["mozarella", "feta"],
 ["champiñones", "aceitunas", "cebollas"]);
console.log(p2);

let p3 = pizzaOven("lanzada a mano 2", "marinara", ["mozarella"],
 ["champiñones", "aceitunas"]);
console.log(p3);

let p4 = pizzaOven("lanzada a mano 3", "derk", ["feta"],
 ["champiñones"]);
console.log(p4);