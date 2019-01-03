const Block = require('./Block');
const Blockchain = require('./Blockchain');

// Write Javascript code!
let chain = new Blockchain();
chain.addBlock(new Block(1, "12/16/2018", { amount: 4 }));
chain.addBlock(new Block(2, "12/17/2018", { amount: 8 }));
chain.addBlock(new Block(3, "01/03/2018", { amount: 12 }));

// Check if chain is valid (will return true)
console.log('Is Blockchain valid? ' + chain.isChainValid());

// Let's now manipulate the data
chain.chain[1].data = { amount: 100 };
console.log('The data has been manipulated');

// Check our chain again (will now return false)
console.log("Is Blockchain valid? " + chain.isChainValid());
console.log("The latest block is: " + JSON.stringify(chain.getLatestBlock(), null, 4));
