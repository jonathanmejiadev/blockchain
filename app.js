const { Block } = require('./block');
const { BlockChain } = require('./blockchain');
const { getTimestamp } = require('./utils');

let nodeCoin = new BlockChain();

console.log(`Mining block 1...`)
nodeCoin.addBlock(new Block(getTimestamp(), { quantity: 10 }));
console.log(`Mining block 2...`)
nodeCoin.addBlock(new Block(getTimestamp(), { quantity: 30 }));
console.log(`Mining block 3...`)
nodeCoin.addBlock(new Block(getTimestamp(), { quantity: 1 }));

console.log(JSON.stringify(nodeCoin, null, 4));
//console.log(nodeCoin.validateChain());