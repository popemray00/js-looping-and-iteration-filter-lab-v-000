// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, name) {
  for (const driver of collection) {
    if (driver.name === name) {
    return driver.name;
    }
  }
}
findMatching(drivers)