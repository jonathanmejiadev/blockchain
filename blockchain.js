const { Block } = require('./block');
const { getTimestamp } = require('./utils');
const { Transaction } = require('./transaction');

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 3;
        this.pendingTransactions = [];
        this.miningReward = 100;
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

    addTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    };

    minePendingTransactions(minerAddress) {
        let block = new Block(Date.now(), this.pendingTransactions)
        block.prevHash = this.lastBlock().hash;
        block.mineBlock(this.difficulty);
        console.log('Successfully mined block');

        this.chain.push(block);

        this.pendingTransactions = [
            new Transaction(null, minerAddress, this.miningReward)
        ];
    };

    getBalanceOfAddress(address) {
        let balance = 0;
        for (let block of this.chain) {
            for (let trans of block.transactions) {
                if (trans.fromAddress === address) {
                    balance -= trans.amount;
                };

                if (trans.toAddress === address) {
                    balance += trans.amount;
                };
            };
        };
        return balance;
    };

    validateChain() {
        for (let block in this.chain) {
            const currentBlock = this.chain[block];
            const prevBlock = this.chain[block - 1];

            if (currentBlock.hash !== currentBlock.generateHash()) return false;
            if (prevBlock && currentBlock.prevHash !== prevBlock.hash) return false;
        };
        return true;
    };
};

module.exports = { BlockChain };