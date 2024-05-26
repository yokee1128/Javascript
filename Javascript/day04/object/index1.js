const menu = [
  {
    coffeeName: "americano",
    coffeePrice: 2000,
    shot: 2,
    coffeeBeen: "Arabica",
  },
  {
    coffeeName: "latte",
    coffeePrice: 2500,
    shot: 2,
    coffeeBeen: "Arabica",
  },
  {
    coffeeName: "mocha",
    coffeePrice: 3500,
    shot: 2,
    coffeeBeen: "Liberica",
  },
];

const a = menu.filter((v) => v.coffeePrice <= 3000);
console.log(a);

const b = menu.map((v) => {
  v.coffeename = v.coffeeName.toUpperCase();
  v.coffeePrice = v.coffeePrice + 1000;
  return v;
});

console.log(b);

const c = menu.map((v) => ({
  coffeeName: v.coffeeName,
  shot: v.shot,
}));

console.log(c);
