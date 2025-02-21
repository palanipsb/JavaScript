'use strict';
/*
///////////////////////////////////////// Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playerNames) {
    console.log(playerNames);
    console.log(`${playerNames.length} goals were scored`);
  },
};

let x = 1;
for (const nameOfPlayer of game.scored) {
  console.log(`Goal ${x++}: ${nameOfPlayer}`);
}

let averageOdd = 0;
for (const odd of Object.values(game.odds)) {
  averageOdd += odd;
  console.log(averageOdd);
}
console.log(`Average Odd: ${averageOdd / Object.values(game.odds).length}`);

for (const [key, value] of Object.entries(game.odds)) {
  const msg = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${msg}: ${value}`);
}


const [players1, players2] = game.players;
//console.log(players1, players2);
const [gk, ...fieldPlayers] = players1;
//console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
//console.log(allPlayers);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//console.log(players1Final);
//console.log(game.odds);
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(...game.scored);
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

*/

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
  // [`day${1 + 5}`]: {
  //   open: 9,
  //   cose: 18,
  // },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Andelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  maniMenu: ['Pizza', 'Pasta', 'Risotto'],

  // order: function (starterIndex, mainIndex) {
  //   return [this.startMenu[starterIndex], this.maniMenu[mainIndex]];
  // },

  //ES6 object leterals

  //ES6  object leterals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.maniMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Received! ${this.startMenu[starterIndex]} and ${this.maniMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngrediant, ...otherIng) {
    console.log(mainIngrediant, otherIng);
  },
};
/////////================== Working With Strings Part1 ===============//////////

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  //B & E are middle
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat!');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

///////////////////////////////////////// Coding Challenge #3
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [key, value] of [...gameEvents.entries()]) {
  console.log(
    `${key <= 45 ? '[FIRST HALF]' : '[SCOND HALF]'} ${key}: ${value}`
  );
}

/////////////=====================MAP=====================//////////////
// Objects can have only strings as key, bu map can have any type as key

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'Try again!'],
]);

console.log(question);
//conver Object to Map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your Answer: '));
const answer = 2;
console.log(question.get(answer === question.get('correct')));

//conver MAP to ARRAY
const quest = [...question];
console.log(quest);
console.log(...question.entries());
console.log(...question.keys());
console.log(...question.values());


const rest = new Map();
rest.set('name', 'Matiz');

rest
  .set(1, 'Age is 35')
  .set('Days', ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest);
console.log(rest.get('name'));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('Days'));
rest.delete(1);
console.log(rest);
console.log(rest.size);
//rest.clear();
console.log(rest.size);

rest.set([1, 2], 'BeeMatiz');
console.log(rest);
console.log(rest.get([1, 2])); // this will not work
//to solve
const arr = [1, 2];
rest.set(arr, 'BeeMatiz New');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

/////////////=====================SET=====================//////////////
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risato',
  'Pizza',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set('Matiz'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Galic Bread');
ordersSet.add('Galic Bread');

console.log(ordersSet);

ordersSet.delete('Risato');
console.log(ordersSet);
//ordersSet.clear();
//console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

//Example
let staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log(staff);
const staffSet = new Set(staff);
console.log(staffSet);
staff = [...staffSet];
console.log(staff);



//Property KEY
const properties = Object.keys(openingHours);
console.log(properties);

let opnStr = `We are open ${properties.length} days `;

for (const day of Object.keys(openingHours)) {
  opnStr += `${day}, `;
}
console.log(opnStr);

//Propety VALUE
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

//Both KEY and VALUE
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


////////////========================Optional chaining===================/////////////
//without
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Palani', email: 'test@gmail.com' }];

console.log(users[0]?.name ?? 'User Array is empty');
console.log(users[2]?.name ?? 'User Array is empty');


//=======================for loop===============================////////////
const menu = [...restaurant.startMenu, ...restaurant.maniMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


//////================== LOGICAL assignment operators =================////////////////
const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Matiz',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR assignment operators
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Logical Bullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operators
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


///====================Nullish and coalescing oprator==========/////////////

restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

// Nullish: null and undefined (Not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


///==============AND OR && || ==================//////////////
// Use ANY data type, return any data type, short-circuting
// OR operators
console.log(3 || 'Matiz');
console.log('' || 'Matiz');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// AND operator
console.log(0 && 'Matiz');
console.log(7 && 'Matiz');
console.log('Hello' && 23 && null && 'Matiz');
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'Spinach');
}
restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');


////////// Destructuring array objects/////////////////////////////

//SPREAD, becasue on right side of =
const arrNew = [1, 2, ...[3, 4]];

//REST, because on left side of =
const [a2, b2, ...others] = [1, 2, 3, 4, 5];
console.log(a2, b2, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.maniMenu,
  ...restaurant.startMenu,
];
console.log(pizza, risotto, otherFood);

//Obects REST

const { sat, ...weedays } = restaurant.openingHours;
console.log(weedays);

//functions
const add = function (...numbers) {
  let totals = 0;
  for (let i in numbers) {
    totals += numbers[i];
  }
  return totals;
};

console.log(add(2, 3));
console.log(add(5, 3, 7, 2));
const x = [20, 15, 26, 34];
console.log(add(...x));

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
//---------------* Destructuring Objects in functions *-----------//

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//new namigs for variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//default values
const { menu = [], startMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
console.log(a, b, obj.a, obj.b, obj.c);
//assign vaiables from another object
({ a, b } = obj);
console.log(a, b);

//nested objects

const {
  fri: { open: openingHour, close: closingHour },
} = openingHours;
console.log(openingHour, closingHour);

//arguments passing
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Halifax',
  starterIndex: 1,
});

//---------------* destructuring *-----------//

//Old way adding new values to array
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

//new way assigning values with *---------Spread operators---------*
const newArray = [1, 2, ...arr];
console.log(newArray);
console.log(...arr); //to get values fom array

const newMenu = [...restaurant.maniMenu, 'Gnocci'];
console.log(newMenu);
const [a1, b1, c1, d1] = [...newMenu];
console.log(a1, b1, c1, d1);

//copy array

const maniMenuCopy = [...restaurant.maniMenu];

//join arrays
const menuJoined = [...restaurant.startMenu, ...restaurant.maniMenu];
console.log(menuJoined);

//Iterables - arrays, strings, maos, sets, BUT NOT Objects
//Arrays
const str = 'Palani';
const letters = [...str, ' ', 'S.'];
console.log(letters);
// console.log(`${...str} names`); this will not work as spread operator will destruct the array to comma separated values. so it is useful for passing arguments or creating another array

const ingediants = ['s', 'b', 'c'];
console.log(ingediants);
restaurant.orderPasta(...ingediants);

//Objects
const newRestaurent = { ...restaurant, founder: 'BeeMatiz' };
console.log(newRestaurent);

//Shallow copy objects
const restaurentCopies = { ...restaurant };
restaurentCopies.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurentCopies.name);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring assigments - unpacking
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);
//Skip elements
const [first1, , third] = restaurant.categories;
console.log(first1, third);

//swap - normal way
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//Simple way
let [main1, , secondary1] = restaurant.categories;
console.log(main1, secondary1);
[main1, secondary1] = [secondary1, main1];
console.log(main1, secondary1);


//Receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p, q, r = 0] = [8, 9];
console.log(p, q, r);

*/
