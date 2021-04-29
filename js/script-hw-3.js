// ======= 14/3

function countProps(object) {
  // Пиши код ниже этой строки
  // let propCount = 0;
  // const keys = Object.keys(object);

  // propCount = keys.length;
  // ========== другое решение:

  // for (const key in object) {
  //   if (object.hasOwnProperty(key)) {
  //     propCount += 1;
  //   }
  // }
  // ========== другое решение:
  // for (const key of keys) {
    
  //   if(object.hasOwnProperty(key)) {
  //   	propCount += 1;
  //   }
  // }
  

  // return propCount;
  // Пиши код выше этой строки
}
// const test = { name: 'Mango', age: 2}



// ======= 15/3

// const apartment = {
  //   descr: 'Просторная квартира в центре',
  //   rating: 4,
  //   price: 2153,
  // };
  // // Пиши код ниже этой строки
  // const keys = Object.keys(apartment);
  // const values = Object.values(apartment);
  
  
  
  // ======= 16/3
  
  // function countTotalSalary(salaries) {
  //   let totalSalary = 0;
    
  //   const salaryArr = Object.values(salaries);
  //   console.log(salaryArr);

  //   for(const elem of salaryArr) {
  //     totalSalary += elem;
  //   }
    
  //   return totalSalary;
  // }
  // console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))



  // ======= 17/3

  // const colors = [
  //   { hex: '#f44336', rgb: '244,67,54' },
  //   { hex: '#2196f3', rgb: '33,150,243' },
  //   { hex: '#4caf50', rgb: '76,175,80' },
  //   { hex: '#ffeb3b', rgb: '255,235,59' },
  // ];
  
  // const hexColors = [];
  // const rgbColors = [];
  
  // for(const obj of colors){
  //   hexColors.push(obj.hex)
  //     rgbColors.push(obj.rgb)
  // }



  // ======= 18/3

//   const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];

// const x = { name: 'Дроид', price: 400, quantity: 7 }

// for (const key in x) {
// }

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
//   console.log(getProductPrice('Gdfgdf'));



// ======= 19/3

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
// const valuesArray = [];

// function getAllPropValues(propName) {

//   const valuesArray = [];

//   for(let i = 0; i < products.length; i += 1) {
//     const arrayObject = products[i];

//     if(arrayObject[propName]) {
//       valuesArray.push(arrayObject[propName]);
//     }
//   }

//   return valuesArray;
// }
// console.log( getAllPropValues('name'));
// console.log( getAllPropValues('quantity'));
// console.log( getAllPropValues('price'));
// console.log( getAllPropValues('category'));



// ======= 20/3

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
  
// let total = 0;

// for(const obj of products) {
//   if(obj.name === productName) {
//     total = obj.price * obj.quantity;
//   }
// }

// return total;

// }
// console.log(calculateTotalPrice('Захват'));



// ======= 21/3

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {yesterday, today, tomorrow} = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;



// ======= 22/3

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {yesterday, today, tomorrow, alaska = -45} = highTemperatures;
// console.log(highTemperatures.alaska) //-----почему значение не в объекте, если мы его только что назначили через переменную?



// ======= 23/3

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;


// ======= 25/3

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };


// const { today: { low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' }, tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}} = forecast;



// ======= 26/3
// Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const {
//     today: {
//       low: todayLow,
//       high: todayHigh,
//     },
//     tomorrow: {
//       low: tomorrowLow,
//       high: tomorrowHigh,
//     },
//   } = forecast;
  
//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// const x = calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } });

// console.log(x);



// ======= 28/3

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);



// ======= 30/3

// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
//   return { category, priority, ...data, completed };
//   console.log(newObject);
//   // Пиши код выше этой строки
// }

// console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));
// console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }))



// ======= 31/3

// Пиши код ниже этой строки
// function add(...args) {
//   let total = 0;

//   for (const arg of args) {

//     if (Number(arg)) {
//       total += arg;
//     }
//   }
  
//   return total
//   // Пиши код выше этой строки
// }
// console.log(add(1,2,3,4,5))



// ======= 32/3

// Пиши код ниже этой строки
// function addOverNum(targetNum, ...rest) {
//   let total = 0;

//   for (const elem of rest) {
//     targetNum < elem ? total += elem : total;
//   }
//   return total;
//   // Пиши код выше этой строки
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));



// ======= 33/3 Массив совпадений

// Пиши код ниже этой строки
// function findMatches(numberArray, ...rest) {
//   const matches = []; // Не изменяй эту строку

//   for (const number of rest) {

//     if (numberArray.includes(number)) {
//       matches.push(number);
//     }
//     // numberArray.includes(number) ? matches.push(number) : number;

//   }
//   // Пиши код выше этой строки
//   return matches;
// }
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2))



// ======= 34/3

// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`
//   },
//   // Пиши код выше этой строки
// };



// ======= 35/3

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//     const oldNameIndex = this.books.indexOf(oldName);

//     this.books.splice(oldNameIndex, 1, newName);    
//     // Пиши код выше этой строки
//   },
// };
// bookShelf.updateBook('Мгла', 'Хроники подземелий')
// console.log(bookShelf.books)



// ======= 37/3 Лавка зелий «У старой жабы»

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions() {
//     return this.potions;
//   },
    
//   // Пиши код выше этой строки
// };

// ======= 38/3 Лавка зелий «У старой жабы»

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

// =======39/3 Лавка зелий «У старой жабы»

// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const potionNameIndex = this.potions.indexOf(potionName);
//     return this.potions.splice(potionNameIndex, 1);
//     // Пиши код выше этой строки
//   },
// };

// =======40/3 Лавка зелий «У старой жабы»

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     const oldNameIndex = this.potions.indexOf(oldName);
//     return this.potions.splice(oldNameIndex, 1, newName);
//     // Пиши код выше этой строки
//   },
// };

// =======41/3 Лавка зелий «У старой жабы»

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     // console.log(this.potions)
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     return this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     // return potionName;
//     for (const elem of this.potions) {
//       const elemIndex = this.potions.indexOf(elem);
//       if (elem.name === potionName) {
        
//         return this.potions.splice(elemIndex, 1);
//       }
//       // console.log(`Зелья ${potionName} нет в инвентаре!`);
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (const elem of this.potions) {
//       const elemIndex = this.potions.indexOf(elem);
      
//       if (elem.name === oldName) {
//         return elem.name = newName;
//       }
//       // return `Зелья ${oldName} нет в инвентаре!`;

//     }
//     // Пиши код выше этой строки
//   }
// }


// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     // return console.log(this.potions);
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const elem of this.potions) {
//       if (elem !== newPotion) {
//         return this.potions.push(newPotion);
//       } else {
//         continue;
//       }
    
//     }
    
//   },
//   removePotion(potionName) {
//     for (const elem of this.potions) {
//       const elemIndex = this.potions.indexOf(elem);
//       const elemName = elem.name;

//       switch (potionName) {
//         case elemName:
//           this.potions.splice(elemIndex, 1);
//           break;
        
//         case !elemName:
//           continue;
//       }
//         console.log('No such potion have got');

//       // if (elem.name !== potionName) {
//       //   continue
//       // } else {
//       //   this.potions.splice(elemIndex, 1);
//       // }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (const elem of this.potions) {
//       if (elem.name !== oldName) {
//         continue
//       }
//       else {
//         return console.log('exists this potion')
//       }
//     }
//     return console.log("No such potion")
//   },
//   // Пиши код выше этой строки
// };

// // // atTheOldToad.getPotions({ name: "Дыхание дракона", price: 700 })
// // // atTheOldToad.addPotion({ name: 'Каменная кожа', price: 520 })
// // atTheOldToad.updatePotionName('Каменная кожа', 'Веселая рожа');
// atTheOldToad.addPotion({name: 'Веселая рожа', price: 200});
// atTheOldToad.removePotion('Дыхание дракона');
// console.table(atTheOldToad.potions);
