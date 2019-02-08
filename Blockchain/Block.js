const SHA256 = require("crypto-js/sha256");

module.exports = class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    //  proof-of-work algorithm
    mineBlock(difficulty) {
        // Keep changing the nonce until the hash of our block starts with enough zero's.
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
          this.nonce++;
          this.hash = this.calculateHash();
        }
          
        console.log("BLOCK MINED: " + this.hash);
      }
}
