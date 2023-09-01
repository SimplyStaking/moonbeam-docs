const Web3 = require('web3');

// 1. Add the Web3 provider logic here:
const providerRPC = {
  development: 'http://localhost:9944',
  moonbase: 'https://rpc.api.moonbase.moonbeam.network',
};
const web3 = new Web3(providerRPC.development); // Change to correct network

// 2. Create account variables
const account_from = {
  privateKey: 'YOUR_PRIVATE_KEY_HERE',
  address: 'PUBLIC_ADDRESS_OF_PK_HERE',
};
const addressTo = 'ADDRESS_TO_HERE';

// 3. Create send function
const send = async () => {
  console.log(`Attempting to send transaction from ${account_from.address} to ${addressTo}`);

  // 4. Prepare and sign tx with PK
  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      gas: 21000,
      to: addressTo,
      value: web3.utils.toWei('1', 'ether'),
    },
    account_from.privateKey
  );

  // 5. Send tx and wait for receipt
  const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
  console.log(`Transaction successful with hash: ${createReceipt.transactionHash}`);
};

// 6. Call send function
send();