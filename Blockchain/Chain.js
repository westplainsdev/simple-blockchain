var Block = require('./Block');

module.exports = class Chain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 3; // this value will control how long it will take to mine a block.
    }

    createGenesisBlock() {
        const genesisTime = new Date().toLocaleString();
        return new Block(0, genesisTime, "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    getCurrentChainLength() {
        return this.chain.length;
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    toString() {
        return JSON.stringify(this.chain, null, 4);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            // do the two hashes match?
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            // does the current and previous hash match?
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }

            // are we still orderd by index correctly?
            if (previousBlock.index + 1 !== currentBlock.index) {
                return false;
            }
        }
        return true;
    }
}