'use strict'; 

const balancecontract = require('./lib/balanceTransfer'); 

module.exports.BalanceContract = balancecontract;
module.exports.contracts = [balancecontract];