'use strict';

/*function calcAge(birthYear) {
  const age = 2024 - birthYear;
  function printAge() {
    // console.log(afsdfsd);
    let output = `${firstName}, your are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Bee';
      const str = `Oh, you are a millanial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT';
      console.log(output);
    }
    //console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
  }
  printAge();
  return age;
}
const firstName = 'Matiz';
calcAge(1991);
// console.log(age);
// printAge();

console.log(this);

const calcAge = function (bithYear) {
  console.log(2024 - bithYear);
  console.log(this);
};
calcAge(1995);

const calcAgeArrow = bithYear => {
  console.log(2024 - bithYear);
  console.log(this);
};
calcAgeArrow(1995);

const matiz = {
  birthYear: 1986,
  calcAge: function () {
    console.log(this);
  },
};
matiz.calcAge();

const bee = {
  year: 2017,
};

bee.calcAge = matiz.calcAge;
console.log(bee);

const calNewAge = {
  stdYear: 2024,
  nextTenYear: function (YOB) {
    console.log(`The New year will be: ${this.stdYear + 10}`);
  },
};
calNewAge.nextTenYear(2000);


const matiz = {
  firstName: 'Palanivel',
  birthYear: 1986,
  calcAge: function () {
    //Solution 1 for this keyword issue
    // console.log(this);
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.firstName);
    // };

    //solution 2 (Modern)
    const isMillenial = () => {
      console.log(this.firstName);
    };

    isMillenial();
  },
  greet: () => console.log(`hey this is ${this.firstName}`),
};
matiz.greet();
matiz.calcAge();

//arguments keyword
//Old way
//Applicalbe for regular functions
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 7);

//not applicable for arrow functions
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
//addArrow(2, 4, 6);
*/

//Primitive vs Objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Palani',
  age: 30,
};
const friend = me;
console.log(friend);
console.log(`friend: ${me.age}`);
friend.age = 32;
console.log(`friend: ${friend.age}`);

console.log(`friend: ${me.age}`);

//Promitive Types
let lastName = 'Subramani';
let oldlastname = lastName;
lastName = 'Subramaniii';
console.log(lastName);

//Refference Types
const bee = {
  firstName: 'Manopriya',
  lastName: 'Devamanokaran',
  age: 25,
};
const matizBee = bee;
matizBee.lastName = 'Palanivel';
console.log(`Before Marriage: ${bee.lastName}`);
console.log(`After Marriage: ${matizBee.lastName}`);

//Copying Objects

const bee2 = {
  firstName: 'Manopriya',
  lastName: 'Devamanokaran',
  age: 25,
  family: ['Palani'],
};
//shallow copy... not a deep clone. Example, an object inside a object not copied
const matizBee2 = Object.assign({}, bee2);
matizBee2.lastName = 'Palanivel';
console.log(`Before Marriage: ${bee2.lastName}`);
console.log(`After Marriage: ${matizBee2.lastName}`);
matizBee2.family.push('Aaradhya');
matizBee2.family.push('Thara');
console.log(`Before Marriage: ${bee2.family}`);
console.log(`After Marriage: ${matizBee2.family}`);
