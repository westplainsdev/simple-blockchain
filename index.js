const Block = require('./Block');
const Blockchain = require('./Blockchain');

// Write Javascript code!
let chain = new Blockchain();
console.log('A new block chain has been created: ' + JSON.stringify(chain.getLatestBlock(), null, 4));

// add data to the block chain 
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

if(chain.isChainValid()){
    console.log('The chain currently has %s elements.', chain.getCurrentChainLength());
    console.log("The latest valid block is: " + JSON.stringify(chain.getLatestBlock(), null, 4));
   
} else {
    console.log('The chain is now invalid');
    console.log(JSON.stringify(chain.chain[1], null, 4));
}

