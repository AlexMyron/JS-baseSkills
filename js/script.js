//  ======= lower-UPPER case switcher =======

// const fn = (string) => {
  //   const arrFromStr = string.split('');
  //   let reversedArray = [];
  
  //   for(const elem of arrFromStr) {
    
    //     // elem === elem.toLowerCase() ? reversedArray += elem.toUpperCase() : reversedArray += elem.toLowerCase();
    
    //     // if (elem === elem.toLowerCase()){
      //     //   reversedArray += elem.toUpperCase();
      //     // } else if (elem === elem.toUpperCase()) {
        //     //   reversedArray += elem.toLowerCase();
        
        //     reversedArray += elem === elem.toLowerCase() ? elem.toUpperCase() : elem.toLowerCase();
        
        //     // }
        
        //   }
        //   return reversedArray;
        // }
        
        // const someStr = 'aSUS vOLKSwAGEN';

// console.log(fn(someStr));



// ======= Vowers is String =======

// function getCount(str) {
//   let vowelsCount = 0;
//   const a = str.split('');
//   console.log(a);

//   for(const vowel of a) {
    
//     if(vowel.includes('a')){
//       vowelsCount += 1;
//       continue
//     } else if (vowel.includes('o')){
//       vowelsCount += 1;
//       continue
//     } else if(vowel.includes('e')){
//       vowelsCount += 1;
//       continue
//     } else if (vowel.includes('i')){
//       vowelsCount += 1;
//       continue
//     } else if (vowel.includes('u')){
//       vowelsCount += 1;
//       continue
//     }
//   } 
  
//   return vowelsCount;
// }

// const str = 'dfoertjvkdoewtra';
// console.log(getCount(str))



// ======= The smallest number =======

// const smallestNumber = (numbers) => {  
//   let smallestCoin = numbers[0];

//   for(const num of numbers) {

//     if(smallestCoin > num) {
//       smallestCoin = num;
//     } else {
//       continue;
//     }
//   }
//   return smallestCoin;
// }

// const testArr = [45,-34,23,7,89, -4, 2]
// console.log(smallestNumber(testArr))



// ================

// console.log('D'.charCodeAt(0))
// console.log('a' > 'z')


// ==============
// function getSum( a,b )
// {
//   let summ = 0;
//   if(a !== b) {
    
//     for(let i = a; i <= b; i += 1) {
//      summ += i;
//    }
//     return summ
//   } 
  
   
//   return a;
// }

// console.log(getSum(-1,2));

// ======== Clock =====

// const globalMin = 156;
// console.log(globalMin);

// const hours = Math.floor(globalMin / 60);
// console.log(hours);

// const modifiedHours = String(hours).padStart(2, 0);
// console.log(modifiedHours);

// const min = globalMin % 60;
// console.log(min);

// const modifiedMin = String(min).padStart(2,0);

// const clock = `${modifiedHours}:${modifiedMin}`;
// console.log(clock);


// ======

// const loginInput = prompt('Введите login');

// switch (loginInput) {
//   case 'Admin':
//     const password = prompt('Enter Password');

//     switch (password) {
//       case 'Mango':
//         console.log('Wellcome!');
//         break;

//       default:
//         console.log('Wrong password');
//     }
//     break;

//   case null:
//     console.log('Cancelled');
//     break;

//   default:
//     console.log("Who're you?");

// }
// ==============
// if(loginInput === 'Admin') {
//   const password = prompt('Enter Password');

//   if(password){

//     if(password === 'Mango') {
//       console.log('Wellcome!')
//     } else {
//       console.log('Wrong password')      
//     }

//   }
// } else  if(loginInput === null){
//   console.log('Cancelled');
// } else {
//   console.log("Who're you?");
// }
// =======================


/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {

//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;

//         // item.price += item.price;
//         return
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     }

//     return this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1){

//       if (productName === items.name) {
//         return items.splice(i, 1);
//       }
//     }
    
//     return 'There is no such item exists!';
//   },
//   clear() {
//     const { items } = this;
//     return items = [];
//   },
//   countTotalPrice() {
//     let total = 0;
//     for (const { price, quantity } of this.items) {
      
//       total += (price * quantity);

//     }
//     return total;
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         if (item.quantity) {
//           item.quantity += 1;
//           item.price += item.price;
//         } else {
//           item.quantity = 1;
//           console.log(item.quantity);
//         }
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         if (item.quantity) {
//         item.quantity -= 1;
//         } else {
//           item.quantity = -1;
//         }
//       }
//     }
//   },
// };

// // console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// // cart.remove('🍎');
// // console.table(cart.getItems());

// // cart.clear();
// // console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// // cart.decreaseQuantity('🍋');
// // cart.decreaseQuantity('🍋');
// // console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// ==============================

