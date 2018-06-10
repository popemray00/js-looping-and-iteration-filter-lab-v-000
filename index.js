// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
  for (const driver of drivers) {
    if (driver.name === name) {
    return driver.name.toUpperCase();
    }
  }

}
