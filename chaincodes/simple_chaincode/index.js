'use strict'; 

const simpleContract = require('./lib/simpleContract'); 

module.exports.SimpleContract = simpleContract;
module.exports.contracts = [simpleContract];
console.log(this.contracts)