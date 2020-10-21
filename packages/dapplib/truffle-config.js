require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth muscle pull grace person equal genius'; 
let testAccounts = [
"0x2fed1358ec4e9d1808b809ad9f04dc494f967977db9d0ffe9455dddd6a0d6f28",
"0x675fe8139a6bf6d72cee2c011fa01be1a5c317f71abda3028fa1a0d96a541268",
"0xfdb977b6462b3a0a9a56fd409259ffb5f335e913a837d991f9d60f76661f62a2",
"0xba7bec751753cdef225b37bb7c811f4c3a153db822c70fc601e1af0df4d0b51c",
"0xd438bb6ca82fe497627129743f3d60cbba61296266078510d952fd660e2c1f17",
"0xe18d423c422e3eb53f1d385761bb5ec61d8268199503fbfb34e7b9c05700b617",
"0xf7bfe3aa4fde0c4734fc6df4d4f5bca01c4e5c9802814e3723a5104e9f391b90",
"0xe83e235b815085cdf284ec95bfee54b7885fed88f3e48d31d1bc6fa650e9c2aa",
"0xa91ec619933fc8b07cdd46c23036dc6749582191ef29ce4c27c2ebb6a416a610",
"0xcef5cb7a936f1299c7c6efb9ed220f2be37f33695e765ef2bc1bf7e117859a0f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
