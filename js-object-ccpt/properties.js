const bottle = { color: 'yellow', hold: 'Water', price: 40 };
const result = Object.keys(bottle);
const result2 = Object.values(bottle);
const result3 = Object.entries(bottle);

Object.seal
console.log(result);
console.log(result2);
console.log(result3);