const { SHA256 } = require('crypto-js');
const { getTimestamp } = require('./utils');

class Block {
    constructor(timestamp, data, prevHash = '') {
        this.timestamp = timestamp || getTimestamp();
        this.data = data;
        this.prevHash = prevHash;
        this.wildcard = 0;
        this.hash = this.generateHash();
    };

    generateHash() {
        return SHA256(this.timestamp + this.prevHash + JSON.stringify(this.data) + this.wildcard).toString();
    };

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
            this.wildcard++;
            this.hash = this.generateHash();
        }
        console.log('Mined Block : ' + this.hash);
    }
};

module.exports = { Block };