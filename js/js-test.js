// // ===== Почему ...
// function getProductPrice(productName) {
//   let target = null;  //------так работает

// const { format } = require("prettier");

  
//   for (let i = 0; i < products.length; i += 1) {
//     const obj = products[i];

    
//     if (obj.name === productName) {
//       target = obj.price;
//     } 
//     else {
//       target = null; // ------ а так нет
//     }
//   }
//   return target;
//   }

//   console.log(getProductPrice('Захват'));
//   console.log(getProductPrice('Дроид'));
// console.log(getProductPrice('Gdfgdf'));
  
// ============== OOП =============
// const Manager = function (name = 'manager', sales = 0) {
//   this.name = name;
//   this.sales = sales;
//   this.salesList = [];

//   this.alreadySold = function (productName) {
//     this.sales += 1;
//     this.salesList.push(productName);
//     return `Manager ${this.name} have sold ${productName}`
//   }
// }

// const mango = new Manager('Mango', 0);
// mango.alreadySold('watch');
// console.log(mango)



// ================= BubbleSort + Array from random numbers

// const bubbleSort = function (array) {
//   // const array = arguments;
//   for (let n = 0; n < array.length; n += 1){
//     for (let i = 0; i < array.length - 1 - n; i += 1) {
//       if (array[i] > array[i + 1]) {
//         let buff = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = buff;
//       }
//     }
//   }
//   return array;
// }

// const randomArr = () => {
//   const arr = [];

//   for (let i = 0; i < 100; i += 1) {
//     let el = Math.floor(Math.random() * (1000 - 100) + 100);
//     arr.push(el);
//   }
//   return arr
// }

// const myArr = randomArr();
// console.log(myArr)
// console.log(bubbleSort(myArr))



const vehicles = [
    { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
    { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
    { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
    { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
    { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
    { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
    { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
    { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
    { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
];

// ------- String into a S-t-r-i-n-g

// const splitAndMerge = (string, separator) => string.split(' ').map(elem => elem.split('').join(separator)).join(' ');



// ------- Alien Language

// const alienLanguage = str => {

//     const a = str.toUpperCase().split(' ').map(elem => elem.split(''));

//     for (const elem of a) {
//         const b = elem[elem.length - 1].toLowerCase();
//         const c = elem.length - 1;
//         elem.splice(c, 1, b);
//     }
    
//     return a.map(elem => elem.join('')).join(' ');
// }
// console.log(alienLanguage("My name is John")) //  "My NAMe Is JOHn";


// ------- Reversed Words

// const reverseWords = str => {

//     const a = str.split(' ').map(elem => elem.split(''));
//     a.map(elem => elem.reverse());    

//     return a.map(elem => elem.join('')).join(' ');
// }
// console.log(reverseWords('double  spaced  words'))



// -------- Полифил Object.entries()

// const objChange = obj => {
//     const objNew = [];
//     const keys = Object.keys(obj);
//     const values = Object.values(obj);

//     for (let i = 0; i < keys.length; i += 1){
//         const buff = [];
//         objNew.push([keys[i]])
//         objNew[i].push(values[i])
//     }

//     return objNew;
// }


// ------- Формат номера телефона

// const foo = array => array.reduce((format, elem) => format.replace('x', elem), '(xxx) xxx-xxxx')
// console.log(foo([0,9,7,6,5,4,7,8,3,3]));



const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];


// ------- Изменяем одно свойство в массиве объектов с помощью Object.map()

// const updatedPlayer = 'Аякс';

// const updateValue = (array, playerName) => {
//     let updArray = [];
//     array.map(el => {
//         if (el.name === playerName) {
//             el = {
//                 ...el,
//                 gamesPlayed: el.gamesPlayed + 1,
//             }
//         }
//         updArray.push(el);
//     })
//     return updArray;
// }
// console.table(updateValue(players, updatedPlayer));


// --------sum of 2 smallest nums in array

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
]


// --------- Вычисление количества друзей

// const foo = array => array.reduce((acc, el) => [...acc, ...el.friends], []).reduce((acc, el) => {
//   return {
//     ...acc,
//     [el]: acc[el] ? acc[el] + 1 : 1,
//   }
// },{});
// console.log(foo(users))
