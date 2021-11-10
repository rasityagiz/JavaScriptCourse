let cart = [
  { id: 1, productName: 'Telefon', quantity: 3, unitPrice: 4000 },
  { id: 1, productName: 'Bardak', quantity: 2, unitPrice: 30 },
  { id: 1, productName: 'Kalem', quantity: 1, unitPrice: 20 },
  { id: 1, productName: 'Sarj Cihazi', quantity: 2, unitPrice: 100 },
  { id: 1, productName: 'Kitap', quantity: 3, unitPrice: 30 },
  { id: 1, productName: 'Pot', quantity: 5, unitPrice: 150 },
];

// Angular ve Vue Push'tan sonra referans degismese bile guncellemeyi yapabilir ama React yapmaz.
// FE'te referans konusu cok onemli

cart.map(product => console.log(product.productName));

let quantityOver2 = cart.filter(product => product.quantity > 2);

let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0);
console.log(total);