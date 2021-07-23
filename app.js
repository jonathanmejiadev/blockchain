const { Block } = require('./block');
const { BlockChain } = require('./blockchain');
const { getTimestamp } = require('./utils');

let nodeCoin = new BlockChain();

nodeCoin.addBlock(new Block(getTimestamp(), { quantity: 10 }));
nodeCoin.addBlock(new Block(getTimestamp(), { quantity: 30 }));
nodeCoin.addBlock(new Block(getTimestamp(), { quantity: 1 }));
console.log(JSON.stringify(nodeCoin, null, 4));
console.log(nodeCoin.validateChain());