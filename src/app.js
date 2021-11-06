// JS is a file-based programming language
/*
let student = {name: 'Yagiz', point: 100};
function save(puan = 10, ogrenci) {
  console.log(ogrenci.name + ' : ' + puan);
}
save(undefined, student);
*/


// Rest
let showProducts = function (id, ...products) {
  console.log(id);
  console.log(products); // GOnderilmezse bos array gorulur
}

// showProducts(10, 'Elma', 'Armut', 'Karpuz');

// Spread - kinda opposite of Rest
let points = [1, 20,5, 45, 2, 63];
// console.log(Math.max(...points));
// console.log(...'ABC', 'D', ...'EF', 'G');

// Destructure - Elimizdeki array'in degerlerini degiskenlere atama yontemi
let populations = [10000, 20000, 30000];
let [small, medium, high] = populations;

// console.log(small);
// console.log(medium);
// console.log(high);

function someFunction([small1], number) { // Bir array gelecek ve ben ilk elemanini small1'e atamak istiyorum
  console.log(small1);
}

// someFunction(populations);

let person = {id: 1, personName: 'Yagiz'};
let {id, personName} = person;

// console.log(id);
// console.log(personName);
