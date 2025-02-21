//type conversion
/*const inputYear = '1986';
console.log(Number(inputYear)+38);*/

//type coercion
/*console.log('I\'m '+38+' year old')
console.log(('1'+1)-1);*/

//falsy values: 0, '',indefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Palani'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;

if(money){
    console.log('Dont Spend all the money');
}else{
    console.log('You should get a job');
}

let height=0;
if(height){
    console.log('YAY! Height is defined');
}else{
    console.log('Height is not defined');
}