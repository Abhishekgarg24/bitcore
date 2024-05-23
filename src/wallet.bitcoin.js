const { PrivateKey, HDPublicKey, Address } = require("bitcore-lib");
const axios = require("axios");
const bitcore = require("bitcore-lib");
const bitcoin = require('bitcoinjs-lib');
const { mainnet, testnet } = require("bitcore-lib/lib/networks");
const Mnemonic = require("bitcore-mnemonic");



const bip39 = require('bip39');


const createWallet = (network = mainnet) => {

  var privateKey = new PrivateKey();
  var address = privateKey.toAddress(network);
  return {
    privateKey: privateKey.toString(),
    address: address.toString(),
  };
};
const createHDWallet = (network = mainnet) => {
  let passPhrase = Mnemonic(Mnemonic.Words.ENGLISH);
  const derivationPath = "m/32/0/0";
  let xpriv = passPhrase.toHDPrivateKey(passPhrase, network, derivationPath);
  return {
    xpub: xpriv.xpubkey,
    privateKey: xpriv.privateKey.toString(),
    address: xpriv.publicKey.toAddress().toString(),
    mnemonic: passPhrase.toString(),
  };
};





async function getBalance(address) {
  try {
    const blockexplorerAPI = 'https://api.blockcypher.com/v1/btc/test3/addrs/<ADDRESS>'; // Replace with actual API URL

    const response = await axios.get(blockexplorerAPI.replace('<ADDRESS>', address));
    const balance = response.data.final_balance;
    // console.log(response.data.txrefs);

    console.log(`Balance for ${address}: ${balance} satoshis`);
  } catch (error) {
    console.error('Error fetching balance:', error);
  }
}

const getWallet = (network = mainnet, privkey) => {

  var privateKey = PrivateKey(privkey);
  var address = privateKey.toAddress(network);
  return {
    privateKey: privateKey.toString(),
    address: address.toString(),
  };
};



const recoverWallet = (network = mainnet, seedphrase = 'mad foot phrase tourist animal vanish over ancient luxury obtain check abandon') => {
  let passPhrase = Mnemonic(seedphrase);
  
  let xpriv = passPhrase.toHDPrivateKey(passPhrase, network);
  return {
    xpub: xpriv.xpubkey,
    privateKey: xpriv.privateKey.toString(),
    address: xpriv.publicKey.toAddress().toString(),
    mnemonic: passPhrase.toString(),
  };
}


module.exports = {
  createHDWallet,
  createWallet,
  getBalance,
  recoverWallet,
  getWallet,
};

