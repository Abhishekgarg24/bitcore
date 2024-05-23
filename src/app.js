const { testnet, mainnet } = require("bitcore-lib/lib/networks");
const { createWallet, createHDWallet ,getBalance,recoverWallet,getWallet} = require("./wallet.bitcoin");
// const sendBitcoin = require("./send.bitcoin");

// sendBitcoin("mo2kQ1U8JbiSbxd1VEbPjhCmVsbxFQCPtv", 0.00001)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// console.log(createHDWallet(testnet));
// console.log(createWallet(testnet));
// console.log(getWallet(testnet,"b115c024c08ff20cd0ebd008155aab5967b9eab315d12761f2e2ef5d921f51f7"));
getBalance("mmMTB77Vsaqyv42uQ3662Mpd7qGXZ84x67");
// console.log(recoverWallet(testnet,"demise next axis length sheriff bag extend climb north census rack picnic"));



