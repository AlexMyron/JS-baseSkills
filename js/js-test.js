// // ===== Почему ...
// function getProductPrice(productName) {
//   let target = null;  //------так работает
  
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




