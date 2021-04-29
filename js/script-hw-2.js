// ===== 3/2
// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки

//   if (ordered === 0) {
//     return 'В заказе еще нет товаров';
//   } if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
//   } return 'Заказ оформлен, с вами свяжется менеджер';
  
//   // Пиши код выше этой строки
// }


// ===== 8/2
// Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);


// ===== 9/2
// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
  
//  words = [array[0], array[array.length - 1]];
  
//   // Пиши код выше этой строки
//   return words;
// }

// ===== 11/2

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
//   const messageLength = message.split(' ').length;
//   const total = messageLength * pricePerWord;
  

// return total;
  
//   // Пиши код выше этой строки
// }
// console.log( calculateEngravingPrice('JavaScript у меня в крови', 10))



// ===== 18/2
// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//   let a = 0;

//   for(let i = 0; i <= number; i += 1) {
//     a += i;
//   }
//   return a;
  
//   // Пиши код выше этой строки
// } 
// console.log(calculateTotal());


// // =====20/2
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
// 	for (const elem of order) {
// 		total += elem
//     }
//   // Пиши код выше этой строки
//   return total;
// }


// ===== 21/2
// function findLongestWord(string) {
//   //1 Разбиваем строку а массив
//   const b = string.split(' ');

//   //2 Задаем перем. длину 1го элемента
//   let longest = b[0];

  //3 Ищем самый длинный элемент
// for (let i = 1; i < b.length; i += 1) {
//   if (b[i].length > longest.length) {
//     longest = b[i];
//   } else if (b[i].length < b[i - 1].length) {
//     continue;
//   }
// }

// return longest;
// }
// console.log(findLongestWord('вапо вапщщ а ва апвff '));


// ===== 22/2
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
  // Пиши код ниже этой строки
// 	for(let i = min; i <= max; i += 1) {
//     	numbers.push(i);
//     }
  // Пиши код выше этой строки
//   return numbers;
// }


// ===== 23/2
// function filterArray(numbers, value) {
  
//   let a = [];

//     for (let i = 0; i < numbers.length; i += 1 ) {
//     if(numbers[i] > value) {
//       a.push(numbers[i]);
//     } else {
//       continue;
//     }
//   }

//   return a;
// } 

// console.log(filterArray([1, 2, 3, 4, 5], 3));


// ===== 25/2
// const getCommonElements = (array1, array2) => {
//   let a = [];
  
//   for (let i = 0; i < array1.length; i += 1) {

//     if (array2.includes(array1[i])) {
//       a.push(array1[i]);
//     }

//   }

//   console.log(a);

// }
// getCommonElements([1, 2, 3, 4, 5, 6, 7], [0, 3, 4, 8, 2])


// =====26/2
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for(const elem of order) {
//   	total += elem
//   }

//   // Пиши код выше этой строки
//   return total;
// }


// ===== 27/2
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (const number of numbers) {    

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }


// ===== 29/2
// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки

// const a = [];
// for (let i = start; i <= end; i += 1) {
//   if (i % 2 === 0) {
//     a.push(i);
//   } else {
//     continue;
//   }
// }
//   return a;
//   // Пиши код выше этой строки
// }


// ===== 32/2
// function includes(array, value) {
//   // Пиши код ниже этой строки
// for(const elem of array) {
	
//   if(elem === value) {
//   	return true;
//   }
// }
// return false
  
//   // Пиши код выше этой строки
// }



// ======= 36.1

// function checkForSpam(message) {
//   let result;
  
//  	message = message.toLowerCase().split(' ');
  
//   for (const word of message) {

//   	if(word === 'spam' || word === 'sale') {
//       result = true;
//     } else {
//       result = false;
//     }    	
//   }  	
//   return result;
// }

// console.log(checkForSpam('вапролс вамто вапвап sam'))