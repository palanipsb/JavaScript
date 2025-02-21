'use strict'; // this will show any errors in console, it will not allow to use reserved words

let hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense=true;
if(hasDriverLicense) console.log('I can drive');

//========== Functions ============//

//function definition
function logger(){
    console.log('This is sample function block');
}
//calling / running / invoking / executing
logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0,5);
console.log(orangeJuice);

//============function declaration vs expressions=============//
    // can not access the fucntion before the definition of expression type, whereas we can do with declaration type

// function declaration
function calculateAge1(yob){
    return 2024-yob;
}
console.log(calculateAge1(1986));

//function expression
const calaculateAge2 = function (yob){
    return 2024-yob;
}
console.log(calaculateAge2(1989))

//============== Arrow function ===========================//
    // this key word is not possible, it can be used only for simple functions

const calculateAge3 = (yob) => 2024 - yob;
console.log(calculateAge3(1991));

const yearUntilRetirement = (yob,name) => {
    const age = 2024 - yob;
    return `${name} retires in ${65 - age}`;
}
console.log(yearUntilRetirement(1986,'Palanivel'));

//=============== function calling other functions ==========================//
//calling function inside a function.

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessorNew(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
    return juice;
}

const resut = console.log(fruitProcessorNew(2,3));

//Practice
const calcAverage = (val1, val2, val3) => (val1+val2+val3)/3;
const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,34,27);

const checkWinner = function(avgDolphins, avgKoalas){    
    if(avgDolphins>= 2*avgKoalas){
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    }else if(avgKoalas>=2*avgDolphins){
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    }else{
        return 'No team wins...';
    }
}

console.log(checkWinner(scoreDolphins,scoreKoalas));