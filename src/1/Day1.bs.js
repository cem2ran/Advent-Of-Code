// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Utils = require("../Utils.bs.js");

var input = Utils.getLines(undefined, "./input.txt");

function fuelPerMass(mass) {
  return (mass / 3 | 0) - 2 | 0;
}

var part1 = Utils.sumListBy(input, fuelPerMass);

console.log(part1);

function addFuelOfFuel(fuel) {
  var fuelOfFuel = fuelPerMass(fuel);
  var match = fuelOfFuel > 0;
  if (match) {
    return fuel + addFuelOfFuel(fuelOfFuel) | 0;
  } else {
    return fuel;
  }
}

var part2 = Utils.sumListBy(input, (function (mass) {
        return addFuelOfFuel(fuelPerMass(mass));
      }));

console.log(part2);

exports.input = input;
exports.fuelPerMass = fuelPerMass;
exports.part1 = part1;
exports.addFuelOfFuel = addFuelOfFuel;
exports.part2 = part2;
/* input Not a pure module */
