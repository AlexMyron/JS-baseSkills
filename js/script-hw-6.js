// ======= 1.6

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   orderedItems.forEach(element => totalPrice += element);

//   // Пиши код выше этой строки
//   return totalPrice;
// }



// ======= 2.6

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//     numbers.forEach(element => {
//       if (element > value) {
//         filteredNumbers.push(element)
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }



// ======= 3.6

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element)
//       };
//     });
  
//     return commonElements;
//     // Пиши код выше этой строки
// }



// ======= 9.6

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//   let result = []
//   numbers.forEach(element => {
//     element % 2 === 0 ? result.push(element + value) : result.push(element);
//   });
//   return result;
//     // Пиши код выше этой строки
// }


// ======= 10.6

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);



// ======= 11.6

const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
//   // Пиши код ниже этой строки
  
// const titles = books.map(book => book.title);



// ======= 13.6

// const getUserNames = users => users.map(user => user.name);



// ======= 14.6

// const getUserEmails = users => users.map(user => user.email);



// ======= 15.6

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 === 1);




// ======= 16.6

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
// const allGenres = books.flatMap({(genres)} => genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);



// ======= 17.6

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(({rating}) => rating >= MIN_RATING );
// const booksByAuthor = books.filter(({author}) => author === AUTHOR);



// ======= 18.6

// const getUsersWithEyeColor = (users, color) => users.filter(({eyeColor}) => eyeColor === color);



// ======= 19.6

// const getUsersWithAge = (users, minAge, maxAge) => users.filter(({ age }) => age >= minAge && age <= maxAge);



// ======= 20.6

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

// const getUsersWithFriend = (users, friendName) => users.filter(({friends}) => friends.includes(friendName));



// ======= 21.6

// const getFriends = users => users.flatMap(({ friends }) => friends).filter((friend, idx, arr) => arr.indexOf(friend) === idx);



// ======= 22.6

// const getActiveUsers = users => users.filter(({isActive}) => isActive)



// ======= 23.6

// const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);



// ======= 24.6

// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(({title}) => title === BOOK_TITLE);
// const bookByAuthor = books.find(({author}) => author === AUTHOR);



// ======= 25.6

// const getUserWithEmail = (users, email) => users.find(user => user.email === email)



// ======= 26.6

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every(el => el % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(el => el % 2 === 1);

// const eachElementInSecondIsEven = secondArray.every(el => el % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(el => el % 2 === 1);

// const eachElementInThirdIsEven = thirdArray.every(el => el % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(el => el % 2 === 1);



// ======= 27.6

// const isEveryUserActive = (users) => users.every(({isActive}) => isActive)



// ======= 29.6

// const isAnyUserActive = users => users.some(({isActive}) => isActive)



// ======= 30.6

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, el) => acc + el, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;



// ======= 31.6

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, player) => player.playtime / player.gamesPlayed + total, 0);



// ======= 32.6

// const calculateTotalBalance = users => users.reduce((total, user) => user.balance + total, 0);
  


// ======= 33.6

// const getTotalFriendCount = users => users.reduce((total, user) => (user.friends.length + total), 0);



// ======= 35.6

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(ascendingReleaseDates);



// ======= 36.6

const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
//   // Пиши код ниже этой строки
  
  
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
// const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));



// ======= 37.6

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author)) ;

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);


// ======= 38.6

// const sortByAscendingBalance = users => users.sort((userFirst, userSecond) => userFirst.balance - userSecond.balance)
  


// ======= 39.6

// const sortByDescendingFriendCount = users => [...users].sort((userFirst, userSecond) => userSecond.friends.length - userFirst.friends.length);



// ======= 40.6

// const sortByName = users => [...users].sort((userFirst, userSecond) => userFirst.name.localeCompare(userSecond.name));



// ======= 41.6

// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names2 = [...books].sort((a,b) => a.author.localeCompare(b.author)).filter(({rating}) => rating > MIN_BOOK_RATING);

// const names = books.filter(({rating}) => rating > MIN_BOOK_RATING).map(({author}) => author).sort((a, b) => a.localeCompare(b));



// ======= 42.6

// const getNamesSortedByFriendCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map(({ name }) => name);



// ======= 43.6

// const getSortedFriends = users => users.flatMap(({ friends }) => friends).filter((friend, index, array) => array.indexOf(friend) === index).sort((a, b) => a.localeCompare(b));



// ======= 44.6

// const getTotalBalanceByGender = (users, gender) => users.filter(({ gender: userGender }) => userGender === gender).reduce((total, user) => total + user.balance, 0);