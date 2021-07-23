const { Block } = require('./block');
const { getTimestamp } = require('./utils');

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 3;
    };

    createGenesisBlock() {
        return new Block(getTimestamp(), 'Genesis Block', '0')
    };

    lastBlock() {
        return this.chain[this.chain.length - 1];
    };

    addBlock(newBlock) {
        newBlock.prevHash = this.lastBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    };

    validateChain() {
        for (let block in this.chain) {
            const currentBlock = this.chain[block];
            const prevBlock = this.chain[block - 1];

            if (currentBlock.hash !== currentBlock.generateHash()) return false;
            if (prevBlock && currentBlock.prevHash !== prevBlock.hash) return false;
        }
        return true;
    };
};

module.exports = { BlockChain };