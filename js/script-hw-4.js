// ======= 2.4

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Роял гранд', makePizza));



// ====== 4.4

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     // for (const pizza of this.pizzas) {
      
//     //   if (pizza === pizzaName) {
//     //     return onSuccess(pizzaName);
//     //   }
//     //   // console.log(pizza);      
//     // }
//     // ===================

//     const existPizza = this.pizzas.includes(pizzaName)
    
//     if (!existPizza) {
//       const message = `В ассортименте нет пиццы с названием ${pizzaName}.`;
//       return onError(message);
//     }
    
//     return onSuccess(pizzaName);
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// // pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// // pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// // pizzaPalace.order('Биг майк', makePizza, onOrderError);
// // pizzaPalace.order('Венская', makePizza, onOrderError);
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));


// ======= 5.4

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };
// console.log(pizzaPalace.order('Аль Копчино'));  



// ======= 6.4

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']



// ======= 7.4

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {

//   for (let i = 0; i < this.length; i += 1) {

//     return console.log(position);
//   }
  
// }

// const messages = [];

// for (let i = 0; i < orders.length; i += 1) {

//   const orderMessage = `Готовим ${orders[i].dish} для ${orders[i].email}. Ваш заказ ${i + 1}-й в очереди.`;
//   messages.push(orderMessage);

// }
// // console.table(messages);
// for (let i = 0; i < orders.length; i += 1){
//   composeMessage.call(orders, messages[i]);
// }

// =================
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   console.log(messages)

//   for (let i = 0; i < orders.length; i += 1) {

//     const orderedMessage = `Готовим ${orders[i].dish} для ${orders[i].email}. Ваш заказ ${i + 1}-й в очереди.`;
    
//   messages.push(orderedMessage);
// };

// return 
// // return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// };

// const messages = [];

// for (let i = 0; i < orders.length; i += 1) {
//   console.log(composeMessage.call(orders, i + 1));
// }

// ==================
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   // for (const el of orders) {
//     const orderedMessage = `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
    
//     messages.push(orderedMessage);
//     // }
    
//     return messages[position - 1];
    
//     // return `Готовим ${this[position - 1].dish} для ${this[position - 1].email}. Ваш заказ ${position}-й в очереди.`;
//   }
  
//   const messages = [];
//   console.log(messages);

// for (let i = 0; i < orders.length; i += 1) {

//   console.log(composeMessage.call(orders, i + 1));
// };

// ==================


// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   const messages = [];
  
//   for (let i = 0; i < this.length; i += 1) {
//     const orderedMessage = `Готовим ${this[i].dish} для ${this[i].email}. Ваш заказ ${i + 1}-й в очереди.`;
      
//     messages.push(orderedMessage);
//   }
  
//   // return `Готовим ${this[position - 1].dish} для ${this[position - 1].email}. Ваш заказ ${position}-й в очереди.`;
//   return messages[position - 1];
// }

// for (let i = 0; i < orders.length; i += 1) {

//   console.log(composeMessage.call(orders, i + 1));
// };


// ============= Решение от Ментора Алена

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];
// // Пиши код ниже этой строки
// function composeMessage(position) {
// return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
// }
// const messages = [];
// for (let i = 0; i < orders.length; i += 1) {
//   const message = composeMessage.call(orders[i], i+1)
//   messages.push(message);
// }

// ====================

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// const composeMessage = position => {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
// }

// const messages = [];

// for (let i = 0; i < orders.length; i += 1) {
//   const message = composeMessage.call(orders[i], i + 1)
//   messages.push(message);
// };



// ======= 9.4

// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');

  // console.log(pizzaPalaceMessage)



  // ========= 10.4

//   const service = {
//     mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//     subscribe(email) {
//       this.mailingList.push(email);
//       return `Почта ${email} добавлена в рассылку.`;
//     },
//     unsubscribe(email) {
//       this.mailingList = this.mailingList.filter((e) => e !== email);
//       return `Почта ${email} удалена из рассылки.`;
//     },
// };
// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
