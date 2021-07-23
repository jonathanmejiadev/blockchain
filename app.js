const { Block } = require('./block');
const { BlockChain } = require('./blockchain');
const { getTimestamp } = require('./utils');
const { Transaction } = require('./transaction');

let nodeCoin = new BlockChain();
/*
console.log(`Mining block 1...`)
nodeCoin.addBlock(new Block(getTimestamp(), { quantity: 10 }));
console.log(`Mining block 2...`)
nodeCoin.addBlock(new Block(getTimestamp(), { quantity: 30 }));
console.log(`Mining block 3...`)
nodeCoin.addBlock(new Block(getTimestamp(), { quantity: 1 }));

console.log(nodeCoin.validateChain());
*/

nodeCoin.addTransaction(new Transaction('jonathan', 'otheruser', 100));
nodeCoin.addTransaction(new Transaction('user1', 'user2', 300));

console.log('Mining begins...');
nodeCoin.minePendingTransactions('jonathan');

console.log('Balance address "jonathan": ' + nodeCoin.getBalanceOfAddress('jonathan'));
console.log('Balance address "user2": ' + nodeCoin.getBalanceOfAddress('user2'));

console.log(JSON.stringify(nodeCoin, null, 4));