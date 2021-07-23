const { SHA256 } = require('crypto-js');
const { getTimestamp } = require('./utils');

class Block {
    constructor(timestamp, data, prevHash = '') {
        this.timestamp = timestamp || getTimestamp();
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.generateHash();
    };

    generateHash() {
        return SHA256(this.timestamp + this.prevHash + JSON.stringify(this.data)).toString();
    };
};

module.exports = { Block };