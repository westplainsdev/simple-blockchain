const Blockchain = require('./Blockchain');

// Write Javascript code!
let runnerData = {
    setValidity: {
        valid: false,
        invalid: true
    },
    createdDates: [new Date().toLocaleString(), new Date().toLocaleString(), new Date().toLocaleString()]
}

function toggleValidity(isChanged) {
    if (isChanged) {
        chain.chain[1].data = {
            amount: 100
        };
        console.log('The data has been manipulated');
    }
}


// create a new blockchain and set the genesis block
let chain = new Blockchain.Chain();
console.log('A new block chain has been created: ' + JSON.stringify(chain.getLatestBlock(), null, 4));

// add data to the blockchain
chain.addBlock(new Blockchain.Block(1, runnerData.createdDates[0], {
    amount: 4
}));
chain.addBlock(new Blockchain.Block(2, runnerData.createdDates[1], {
    amount: 8
}));
chain.addBlock(new Blockchain.Block(3, runnerData.createdDates[2], {
    amount: 12
}));

// Check if chain is valid (will return true)
console.log('Is Blockchain valid? ' + chain.isChainValid());

// Let's now manipulate the data (this can be toggled for differnet responses)
toggleValidity(runnerData.setValidity.invalid);

// Check our chain again 
if (chain.isChainValid()) {
    console.log('The chain is valid');
    console.log('The chain currently has %s elements.', chain.getCurrentChainLength());
    console.log("The chain appears as: " + chain.toString());
} else {
    console.log('The chain is now INVALID');
    console.log('The chain currently has %s elements.', chain.getCurrentChainLength());
    console.log('The invalid block is: ' + JSON.stringify(chain.chain[1], null, 4));
}

console.log('\nProgram completed.\n');