(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Web3Blockchains = {}));
}(this, (function (exports) { 'use strict';

  const logo$4 = '<svg version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 283.5 283.5" style="enable-background:new 0 0 283.5 283.5" xml:space="preserve"><style>.st1{fill:#8c8c8c}</style><g><g><path style="fill:#343434" d="m141.7 55-1.1 3.9v114.8l1.1 1.1 53.3-31.5z"/><path class="st1" d="m141.7 55-53.2 88.3 53.2 31.5v-55.7z"/><path style="fill:#3c3c3b" d="m141.7 184.9-.6.8v40.9l.6 1.9 53.3-75.1z"/><path class="st1" d="M141.7 228.5v-43.6l-53.2-31.5z"/><path style="fill:#141414" d="m141.7 174.8 53.3-31.5-53.3-24.2z"/><path style="fill:#393939" d="m88.5 143.3 53.2 31.5v-55.7z"/></g></g></svg>';

  var ethereum = {
    name: 'ethereum',
    id: '0x1',
    networkId: '1',
    label: 'Ethereum',
    fullName: 'Ethereum Mainnet',
    logo: logo$4,
    currency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    },
    explorer: 'https://etherscan.io',
    explorerUrlFor: ({ transaction, token })=>{
      if(transaction) { return `https://etherscan.io/tx/${transaction.id}` }
      if(token) { return `https://etherscan.io/token/${token}` }
    },
    rpc: ['https://mainnet.infura.io/v3/9aa3d95b3bc4', '40fa88ea12eaa4456161'].join(''),
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": logo$4, "type": "NATIVE"},
      {"address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png", "type": "20"},
      {"address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
      {"address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png", "type": "20"},
      {"address": "0xdAC17F958D2ee523a2206206994597C13D831ec7", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
      {"address": "0x6B175474E89094C44Da98b954EedeAC495271d0F", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
      {"address": "0x853d955aCEf822Db058eb8505911ED77F175b99e", "symbol": "FRAX", "name": "Frax", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x853d955aCEf822Db058eb8505911ED77F175b99e/logo.png", "type": "20"},
      {"address": "0x4Fabb145d64652a948d72533023f6E7A623C7C53", "symbol": "BUSD", "name": "Binance USD", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4Fabb145d64652a948d72533023f6E7A623C7C53/logo.png", "type": "20"},
      {"address": "0x8E870D67F660D95d5be530380D0eC0bd388289E1", "symbol": "USDP", "name": "Pax Dollar", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x8E870D67F660D95d5be530380D0eC0bd388289E1/logo.png", "type": "20"},
      {"address": "0x956F47F50A910163D8BF957Cf5846D573E7f87CA", "symbol": "FEI", "name": "Fei USD", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x956F47F50A910163D8BF957Cf5846D573E7f87CA/logo.png", "type": "20"}
    ]
  };

  const logo$3 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" style="enable-background:new 0 0 192 192" xml:space="preserve"><path d="m57.9 46.2 38.1-22 38.1 21.9-14 8.1L96 40.5 71.9 54.3l-14-8.1zM134.1 74l-14-8.1L96 79.7 71.9 65.8l-14 8.1v16.3L82 104.1v27.7l14 8.1 14-8.1v-27.7l24.1-13.9V74zm0 44v-16.3l-14 8.1v16.3l14-8.1zm9.9 5.6-24.1 13.9v16.3l38.1-21.9V87.8l-14 8.1v27.7zm-14-63.5 14 8.1v16.3l14-8.1V60.1L144 52l-14 8.1zm-48 83.3v16.3l14 8.1 14-8.1v-16.3l-14 8.1-14-8.1zM57.9 118l14 8.1v-16.3l-14-8.1V118zM82 60.1l14 8.1 14-8.1L96 52c0-.1-14 8.1-14 8.1zm-34 8.1 14-8.1L48 52l-14 8.1v16.3l14 8.1V68.2zm0 27.7-14-8.1v44l38.1 21.9v-16.3L48 123.5V95.9z" style="fill:#f0b90b"/></svg>';

  var bsc = {
    name: 'bsc',
    id: '0x38',
    networkId: '56',
    label: 'BNB Smart Chain',
    fullName: 'BNB Smart Chain Mainnet',
    logo: logo$3,
    currency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    },
    explorer: 'https://bscscan.com',
    explorerUrlFor: ({ transaction, token })=>{
      if(transaction) { return `https://bscscan.com/tx/${transaction.id}` }
      if(token) { return `https://bscscan.com/token/${token}` }
    },
    rpc: 'https://bsc-dataseed1.binance.org',
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "BNB", "name": "Binance Coin", "decimals": 18, "logo": logo$3, "type": "NATIVE"},
      {"address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "symbol": "WBNB", "name": "Wrapped BNB", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png", "type": "20"},
      {"address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "symbol": "BUSD", "name": "BUSD Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png", "type": "20"},
      {"address": "0x55d398326f99059fF775485246999027B3197955", "symbol": "USDT", "name": "Tether USD", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png", "type": "20"},
      {"address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", "symbol": "USDC", "name": "USD Coin", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d/logo.png", "type": "20"},
      {"address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", "symbol": "ETH", "name": "Ethereum Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png", "type": "20"},
      {"address": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "symbol": "Cake", "name": "PancakeSwap Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png", "type": "20"},
      {"address": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", "symbol": "BTCB", "name": "BTCB Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png", "type": "20"}
    ]
  };

  const logo$2 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.4 45.4" style="enable-background:new 0 0 45.4 45.4" xml:space="preserve"><path d="M30.2 17.7c-.6-.3-1.3-.3-1.8 0l-4.3 2.5-2.9 1.6-4.2 2.5c-.6.3-1.3.3-1.8 0l-3.3-2c-.5-.3-.9-.9-.9-1.6v-3.8c0-.7.4-1.3.9-1.6l3.3-1.9c.6-.3 1.2-.3 1.8 0l3.3 2c.6.3.9.9.9 1.6v2.5l2.9-1.7v-2.6c0-.7-.3-1.3-.9-1.6L17.1 10c-.6-.3-1.2-.3-1.8 0L9 13.7c-.6.3-.9.9-.9 1.5v7.1c0 .7.3 1.3.9 1.6l6.2 3.6c.6.3 1.2.3 1.8 0l4.2-2.4 2.9-1.7 4.2-2.4c.6-.3 1.3-.3 1.8 0l3.3 1.9c.6.3.9.9.9 1.6v3.8c0 .7-.3 1.3-.9 1.6l-3.2 1.9c-.6.3-1.2.3-1.8 0l-3.3-1.9c-.6-.3-.9-.9-.9-1.6v-2.4l-2.9 1.7v2.5c0 .7.3 1.3.9 1.6l6.1 3.6c.6.3 1.2.3 1.8 0l6.1-3.6c.6-.3.9-.9.9-1.6v-7.2c0-.7-.3-1.3-.9-1.6l-6-3.6z" style="fill:#8247e5"/></svg>';

  var polygon = {
    name: 'polygon',
    id: '0x89',
    networkId: '137',
    label: 'Polygon',
    fullName: 'Polygon Mainnet',
    logo: logo$2,
    currency: {
      name: 'Polygon',
      symbol: 'MATIC',
      decimals: 18
    },
    explorer: 'https://polygonscan.com',
    explorerUrlFor: ({ transaction, token })=>{
      if(transaction) { return `https://polygonscan.com/tx/${transaction.id}` }
      if(token) { return `https://polygonscan.com/token/${token}` }
    },
    rpc: 'https://rpc-mainnet.matic.network',
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "MATIC", "name": "Polygon", "decimals": 18, "logo": logo$2, "type": "NATIVE"},
      {"address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", "symbol": "WMATIC", "name": "Wrapped Matic", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png", "type": "20"},
      {"address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png", "type": "20"},
      {"address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
      {"address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
      {"address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1", "symbol": "miMATIC", "name": "miMATIC", "decimals": 18, "logo": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png", "type": "20"},
      {"address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
      {"address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png", "type": "20"}
    ]
  };

  const logo$1 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 397.7 311.7" style="enable-background:new 0 0 397.7 311.7" xml:space="preserve"><linearGradient id="web3_blockchains_solana_gradient_1" gradientUnits="userSpaceOnUse" x1="291.854" y1="14.359" x2="165.768" y2="255.866" gradientTransform="translate(0 30.535)"><stop offset="0" style="stop-color:#00ffa3"/><stop offset="1" style="stop-color:#dc1fff"/></linearGradient><path d="M121.8 202.9c1.4-1.4 3.3-2.2 5.3-2.2h182.2c3.3 0 5 4 2.6 6.4l-36 36c-1.4 1.4-3.3 2.2-5.3 2.2H88.4c-3.3 0-5-4-2.6-6.4l36-36z" style="fill:url(#web3_blockchains_solana_gradient_1)"/><linearGradient id="web3_blockchains_solana_gradient_2" gradientUnits="userSpaceOnUse" x1="236.727" y1="-14.422" x2="110.641" y2="227.085" gradientTransform="translate(0 30.535)"><stop offset="0" style="stop-color:#00ffa3"/><stop offset="1" style="stop-color:#dc1fff"/></linearGradient><path style="fill:url(#web3_blockchains_solana_gradient_2)" d="M121.8 68.6c1.4-1.4 3.3-2.2 5.3-2.2h182.2c3.3 0 5 4 2.6 6.4l-36 36c-1.4 1.4-3.3 2.2-5.3 2.2H88.4c-3.3 0-5-4-2.6-6.4l36-36z"/><linearGradient id="web3_blockchains_solana_gradient_3" gradientUnits="userSpaceOnUse" x1="264.114" y1="-.123" x2="138.028" y2="241.383" gradientTransform="translate(0 30.535)"><stop offset="0" style="stop-color:#00ffa3"/><stop offset="1" style="stop-color:#dc1fff"/></linearGradient><path style="fill:url(#web3_blockchains_solana_gradient_3)" d="M275.9 135.3c-1.4-1.4-3.3-2.2-5.3-2.2H88.4c-3.3 0-5 4-2.6 6.4l36 36c1.4 1.4 3.3 2.2 5.3 2.2h182.2c3.3 0 5-4 2.6-6.4l-36-36z"/></svg>';

  var solana = {
    name: 'solana',
    networkId: 'mainnet-beta',
    label: 'Solana',
    fullName: 'Solana',
    logo: logo$1,
    currency: {
      name: 'Solana',
      symbol: 'SOL',
      decimals: 9
    },
    explorer: 'https://solscan.io',
    explorerUrlFor: ({ transaction, token })=>{
      if(transaction) { return `https://solscan.io/tx/${transaction.id}` }
      if(token) { return `https://solscan.io/token/${token}` }
    },
    rpc: 'https://api.mainnet-beta.solana.com',
    tokens: [ // only major tokens
      {"address": "11111111111111111111111111111111", "symbol": "SOL", "name": "Solana", "decimals": 9, "logo": logo$1, "type": "NATIVE"},
      {"address": "So11111111111111111111111111111111111111112", "symbol": "WSOL", "name": "Wrapped SOL", "decimals": 9, "logo": "https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png", "type": "SPL"},
      {"address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://img.raydium.io/icon/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png", "type": "SPL"},
      {"address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "symbol": "USDT", "name": "USDT", "decimals": 6, "logo": "https://img.raydium.io/icon/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.png", "type": "SPL"}
    ]
  };

  const logo = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 283.5" style="enable-background:new 0 0 283.5 283.5" xml:space="preserve"><circle fill="#F0EFEF" cx="141.7" cy="141.7" r="141.7"/><path fill="#ABABAB" d="M127 175.1v-4.4c0-8.4 1.1-15.3 3.4-20.7 2.3-5.4 5.1-10 8.4-13.8 3.3-3.7 6.6-7 10.1-9.7s6.3-5.6 8.6-8.5c2.3-2.9 3.4-6.4 3.4-10.5 0-5-1.1-8.7-3.3-11.1-2.2-2.4-5-4-8.4-4.8-3.4-.8-6.9-1.3-10.5-1.3-5.8 0-11.8 1-17.9 2.9-6.1 1.9-11.5 4.7-16 8.4V74c2.3-1.7 5.4-3.3 9.4-4.9 4-1.6 8.4-2.9 13.4-4s10.1-1.6 15.5-1.6c8.1 0 15.1 1.1 21.1 3.4 6 2.3 10.8 5.5 14.7 9.5 3.8 4 6.7 8.7 8.6 14.1 1.9 5.3 2.9 11.1 2.9 17.2 0 6.6-1.1 12-3.4 16.3-2.3 4.3-5.1 8-8.5 11.2-3.4 3.2-6.8 6.4-10.2 9.5-3.4 3.1-6.3 6.8-8.6 11s-3.4 9.5-3.4 15.9v3.4H127zm-1.8 43.1v-27.7h33v27.7h-33z"/></svg>';

  var unknown = {
    id: 'unknown',
    name: 'unknown',
    label: 'Unknown',
    logo
  };

  let all = [
    ethereum,
    bsc,
    polygon,
    solana,
    unknown
  ];

  let Blockchain = {
    all,

    findById: function (id) {
      let fixedId = id;
      if (fixedId.match('0x0')) {
        // remove leading 0
        fixedId = fixedId.replace(/0x0+/, '0x');
      }
      let found = all.find((blockchain) => {
        return blockchain.id == fixedId
      });
      if(found == undefined) {
        found = all.find((blockchain) => {
          return blockchain.id == 'unknown'
        });
      }
      return found
    },

    findByNetworkId: function (networkId) {
      networkId = networkId.toString();
      let found = all.find((blockchain) => {
        return blockchain.networkId == networkId
      });
      return found
    },

    findByName: function (name) {
      return all.find((blockchain) => {
        return blockchain.name == name
      })
    },
  };

  exports.Blockchain = Blockchain;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
