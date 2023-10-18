let numberOne = 10;
let numberTwo = 20;

console.log(numberOne + numberTwo); // 30
console.log(numberOne - numberTwo); // -10
console.log(numberOne * numberTwo); // 200
console.log(numberOne / numberTwo); // 0.5
console.log(numberOne % numberTwo); // 10 (liekana po dalybos)
console.log(numberOne ** numberTwo); // 10000000000000000000000000 (10 pakelta 20 laipsniu)

console.log(numberOne++); // 10 (naudojamas įrašymui, tada padidinamas)
console.log(++numberOne); // 12 (pirma padidinamas, tada naudojamas)

console.log(numberOne--); // 12 (naudojamas įrašymui, tada sumažinamas)
console.log(--numberOne); // 10 (pirma sumažinamas, tada naudojamas)

console.log(--numberOne + numberTwo++); // 29 (9 + 20)
console.log(numberOne-- - --numberTwo + numberTwo++); 
console.log(numberOne++ / numberTwo++); 
console.log(numberOne++ * --numberTwo); 