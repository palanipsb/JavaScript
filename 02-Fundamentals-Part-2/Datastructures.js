'use strict';
//Data structures 1 --- => Arrays
const friends = ['Palani','Priya'];
console.log(friends);
console.log(friends[0]);

const years = new Array(1986, 1989);
console.log(years);
console.log(years[0]);
console.log(years.length);

//Add elements at last
friends.push('Ashwin');
console.log(friends);

for (let index = 0; index < friends.length; index++) {
    console.log(friends[index])
}

//delete element at last
years.pop();
console.log(years);

//add elements at first
years.unshift(1989);
console.log(years);

// delete first element
years.shift();
console.log(years);

console.log(friends.indexOf('Priya'));
console.log(friends.includes('Ashwin'));

//Practice

const calcTip = function(billValue){
    return billValue >=50 && billValue<=300? billValue*.15:billValue*.2;
}
bills = new Array(125, 55, 44);
totals = new Array();
for (let index = 0; index < bills.length; index++) {
    const tip = calcTip(bills[index]);
    totals.push(bills[index]+tip)    
}
console.log(totals);

// Data struncture 2----=> Objects
// it is key value pair
const userDetails = {
    firstName:'Palanivel', 
    lastName:'Subramani', 
    yob:1986,
    job:'Developer', 
    friends,
    hasDriverLicense:true,
    // calcAge:function(yob){
    //     return 2024-yob;
    // }
    // calcAge: function(){
    //     return 2024-this.yob;
    // }
    calcAge: function(){
        this.age = 2024-this.yob;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriverLicense ?'a':'no'} driver's license`;
    }
    };
console.log(userDetails);
console.log(userDetails.lastName);
console.log(userDetails['lastName']);
const nameKey = 'jo';
console.log(userDetails[nameKey+'b']);

//const inputVal = prompt('Please Enter the detail you want to see firstName, lastName, job, age: ');
const inputVal= 'age';
if(userDetails[inputVal]){
    console.log(userDetails[inputVal]);
}else{
    console.log('No info is available')
}

userDetails.location = 'Canada';
console.log(userDetails);
console.log(userDetails.calcAge(userDetails.yob));
console.log(userDetails['calcAge'](userDetails['yob']));

console.log(`userDetails has ${userDetails.friends.length} friends, and his best field is called ${userDetails.friends[0]}`)

// object methods
console.log(userDetails.calcAge());
console.log(userDetails.age);
console.log(userDetails.getSummary());

const mark = {
    fullname:'Mark miller',
    mass:78,
    height:1.69,
    calcBMI:function(){
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}
const john = {
    fullname:'John Smith',
    mass:92,
    height:1.95,
    calcBMI:function(){
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}
const getSummary= function(){
    if(mark.bmi>john.bmi){
        return `${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s (${john.bmi})!`;
    }else{
        return `${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s (${mark.bmi})!`;
    }
    
}
mark.calcBMI();
john.calcBMI();
console.log(getSummary());