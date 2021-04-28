require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remain essay inflict enroll frame segment'; 
let testAccounts = [
"0x50b7340b6c92b2957034d6b82fe9245e1343b0f92cfaa0d39809ee0057e3c6bf",
"0x128361f3aac392215fc121e179706db6b70c2803d520a3b186c26686cb81b107",
"0x39bdfbf392475b1a4da00421ef043ccb138a691bb7d9e4b172e11cf651e9f67a",
"0x4dc3ea96563627d468773999878e3fd8a063c99b068f7a356fe4ade6f1acad44",
"0x6fa3ffc9cbfe8d5e436b7ac9146f78f7d0bef2a4233ad7d6d783f06914cd50c1",
"0xc512250a3a0d8973f2094e6a6cb74eca3916008b1dc66ecf68a6a2f0599b371d",
"0xb948ae0e7e3e49445e65d0a1ee0f35a2ea7edac3267bd0b3a8878d1ecd6a0cd7",
"0xba7c39a6bfad6e9c6b650ec55b8060b33a581c94f690b90527edb23aa74e5c49",
"0x976578920e7d49b6a18c5d1314f02af7d368040589b98feb14fabade723c14a4",
"0xb6b4f4323fb026e8c10e7155bafde067e21ae585814c8fa8b8a7ec34e94df9c7"
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
