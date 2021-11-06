function addToCart(quantity, productName = 'Elma') {
  console.log('Sepete ' + quantity +  ' adet ' + productName +  ' eklendi.');
}

addToCart(10);

let sayHello = () => {
  console.log('Hello World!');
}

sayHello();

let sayHello2 = function () {
  console.log('Hello World 2!');
}

sayHello2();


// ------------------------------------------------------
function addToCart2(productName, quantity, unitPrice) {
  
}

addToCart2('Elma', 5, 10);


let product1 = {productName: 'Elma', unitPrice: 10, quantity: 5};
function addToCart3(product) {
  console.log('Urun: ' + product.productName +
    ', birim fiyati: ' + product.unitPrice +
    ', miktar: '       + product.quantity);
}

addToCart3(product1);


function addToCart4(products) {
  console.log(products);
}

let products = [
  {productName: 'Elma', unitPrice: 10, quantity: 15},
  {productName: 'Armut', unitPrice: 15, quantity: 5},
  {productName: 'Kavun', unitPrice: 20, quantity: 3}
];

addToCart4(products);

// Rest
// function add(num1, num2) {
//   console.log(num1 + num2);
// }
// add(1 + 2);

function add(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  console.log(total);
}
add(20, 30);
add(20, 30, 40);
//-------------------------------------

// Spread
let numbers = [20, 30, 40, 10, 50];
console.log(Math.max(...numbers));
//-------------------------------------

// Destructor
let [icAnadolu, marmara, karadeniz, [iASehirleri, mSehirleri, kSehirleri]] = [
  {name: 'Ic Anadolu', population: '20M'},
  {name: 'Marmara', population: '30M'},
  {name: 'Karadeniz', population: '20M'},
  [
    ['Ankara', 'Konya'],
    ['Istanbul', 'Bursa'],
    ['Sinop', 'Trabzon']
  ]
];
console.log(icAnadolu.population);
console.log(iASehirleri);

let nPN, nUP, nQ
  ({productName: nPN, unitPrice: nUP, quantity: nQ}
  = {productName: 'Muz', unitPrice: 10, quantity: 15});
console.log(nPN);

let {productName, unitPrice, quantity} = {productName: 'Kiraz', unitPrice: 10, quantity: 15};
console.log(productName);
//-------------------------------------
