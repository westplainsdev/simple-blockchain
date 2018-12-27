const Block = require('./Block');
const Blockchain = require('./Blockchain');

// Write Javascript code!
let savjeeCoin = new Blockchain();
savjeeCoin.addBlock(new Block(1, "12/16/2018", { amount: 4 }));
savjeeCoin.addBlock(new Block(2, "12/17/2018", { amount: 8 }));

// Check if chain is valid (will return true)
console.log('Blockchain valid? ' + savjeeCoin.isChainValid());

// Let's now manipulate the data
savjeeCoin.chain[1].data = { amount: 100 };

// Check our chain again (will now return false)
console.log("Blockchain valid? " + savjeeCoin.isChainValid());
console.log("The latest block is: " + JSON.stringify(savjeeCoin.getLatestBlock()));