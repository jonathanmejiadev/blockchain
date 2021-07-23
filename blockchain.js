const { Block } = require('./block');
const { getTimestamp } = require('./utils');

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    };

    createGenesisBlock() {
        return new Block(getTimestamp(), 'Genesis Block', '0')
    };

    lastBlock() {
        return this.chain[this.chain.length - 1];
    };

    addBlock(newBlock) {
        newBlock.prevHash = this.lastBlock().hash;
        newBlock.hash = newBlock.generateHash();
        this.chain.push(newBlock)
    };
};

module.exports = { BlockChain };