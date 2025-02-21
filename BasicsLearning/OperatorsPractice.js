//=== (it is strict equality operator, it will not convert the type)
//== (it is loose equality operator, it will do coersion type conversion)
const age1 = 18;
if(age1===18) console.log('You are an adult!');
const age2 = 18;
if(age2=='18') console.log('You are an adult! but loose equality');

//prompt
//const yourAge = prompt("What is your age: ")
let yourAge=25;
console.log('Your Age is: '+yourAge);

//Boolean Logical operator ==> AND->&&, OR->||, NOT -> !
//conditional operator ? (also terinary operator)
yourAge=25?console.log('Your are Young!'):console.log('Your are not young!');

if(yourAge<=25 && yourAge>=20){
    console.log('Cool! you are young')
}else if(yourAge>25){
    console.log('Cool! you are a mature adult')
}else if(yourAge<20 && yourAge>12){
    console.log('Cool! you are a teen')
}else{
    console.log('Cool! you are a child')
}

//Logical operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if(hasDriversLicense && hasGoodVision){
    console.log('You can drive!');
}else{
    console.log('You can not drive!');
}

const isTired=false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('You can drive!');
}else{
    console.log('You can not drive!');
}