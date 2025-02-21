'use strict';
/*
const tempratures1 = new Array(3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5);
const tempratures2 = new Array(3, -2, -6, -1, 'error', 9, 25, 36, 9, 5);
const calcTempAmplitude = function (temp1, temp2) {
  const temp = temp1.concat(temp2);
  const newTempratures = new Array();
  for (let i in temp) {
    if (typeof temp[i] != 'number') continue;
    newTempratures.push(temp[i]);
  }
  return (
    Math.abs(Math.max(...newTempratures)) -
    Math.abs(Math.min(...newTempratures))
  );
};

console.log(
  `The amplitude is: ${calcTempAmplitude(tempratures1, tempratures2)}`
);
*/
const printForecast = function (tempratures) {
  let resultArray = '';
  for (let i in tempratures) {
    resultArray += `... ${tempratures[i]}°C in ${Number(i) + 1} days `;
  }
  return resultArray + ' ...';
};
console.log(printForecast(new Array(17, 21, 23)));
console.log(printForecast(new Array(12, 5, -5, 0, 4)));
