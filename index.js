// 1. returnFirstTwoDrivers — accepts an array parameter
const returnFirstTwoDrivers = function(arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2);
};

// 2. returnLastTwoDrivers — accepts an array parameter
const returnLastTwoDrivers = function(arrayOfDrivers) {
  return arrayOfDrivers.slice(-2);
};

// 3. selectingDrivers — an array of the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. createFareMultiplier — higher-order function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. fareDoubler — uses createFareMultiplier to double fares
const fareDoubler = createFareMultiplier(2);

// 6. fareTripler — uses createFareMultiplier to triple fares
const fareTripler = createFareMultiplier(3);

// 7. selectDifferentDrivers — applies a given function to the driver array
function selectDifferentDrivers(arrayOfDrivers, driverSelector) {
  return driverSelector(arrayOfDrivers);
}
