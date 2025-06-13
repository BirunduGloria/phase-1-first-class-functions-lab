const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(returnFirstTwoDrivers(drivers)); // ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(drivers));  // ['Amari', 'Mo']

console.log(fareDoubler(10)); // 20
console.log(fareTripler(10)); // 30

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));  // ['Amari', 'Mo']
