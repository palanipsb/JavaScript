'use strict';
//for loop
/*
const friends = new Array('palanivel', 'manopriya','ashwin');
const family ={
    familyMember1:{
        familyHirarchy:'Father',
        fullName:'Palanivel',
        age:38,
        location:'Canada'
    },
    familyMember2:{
        familyHirarchy:'Mother',
        fullName:'Manopriya',
        age:35,
        location:'Canada'
    }, 
    familyMember3:{
        familyHirarchy:'Child',
        fullName:'Ashwin',
        age:1,
        location:'Canada'
    }
};

for(let i=0; i<friends.length;i++){
    if(friends[i]=='Palanivel'){
        continue;
    }
    console.log('The friend name is '+friends[i]);
}

//loop backwards nested loops
for(let i=friends.length-1; i>=0; i--){
    console.log(friends[i]);
}

for(let i in friends){
    console.log('Other Method '+friends[i]);
}
//nested loop
let keys=[];
for(let i in family){
    console.log('----- Family Member: ------')
   for(let j in family[i]){
    //console.log('-------- family member details: ---------')
    console.log(family[i][j])
   }
}
//console.log(keys);
//console.log(family['familyMember1']['familyHirarchy']);

//while loop
let rep=1;
while (rep<=10) {
    console.log(`The while loop counter ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random()*9)+1;
while(dice!=9){
    console.log(`You have rolled a ${dice}`);
    dice = Math.trunc(Math.random()*9)+1;
    if(dice==9){
        console.log('You have reached: '+dice)
    }
}
const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tips = new Array();
const totals = new Array();

const calcTip = function(billValue){
    return billValue >=50 && billValue<=300? billValue*.15:billValue*.2;
}
for (let index = 0; index < bills.length; index++) {
    const tip = calcTip(bills[index]);
    totals.push(bills[index]+tip)    
}
console.log('The totals '+totals)
*/
const testArr = new Array(56,68,96,42,63,87,56);
const calcAverage = function(arr){
    let sum = 0;
    for(let i in arr){
        sum = sum+arr[i];
    }
    return sum/arr.length;
}

console.log(`The average is: ${calcAverage(testArr)}`);