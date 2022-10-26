(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Web3Blockchains = {}));
}(this, (function (exports) { 'use strict';

  const logo$5 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIKCSBpZD0iTGF5ZXJfMSIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjgzLjUgMjgzLjUiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjgzLjUgMjgzLjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMzQzNDM0O30KCS5zdDF7ZmlsbDojOEM4QzhDO30KCS5zdDJ7ZmlsbDojM0MzQzNCO30KCS5zdDN7ZmlsbDojMTQxNDE0O30KCS5zdDR7ZmlsbDojMzkzOTM5O30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQxLjcsMjUuOWwtMS41LDUuMnYxNTMuM2wxLjUsMS41bDcxLjItNDIuMUwxNDEuNywyNS45eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNDEuNywyNS45TDcwLjYsMTQzLjhsNzEuMSw0Mi4xdi03NC40VjI1Ljl6Ii8+CgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE0MS43LDE5OS40bC0wLjgsMS4xdjU0LjZsMC44LDIuNWw3MS4yLTEwMC4zTDE0MS43LDE5OS40eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNDEuNywyNTcuNnYtNTguMmwtNzEuMS00Mi4xTDE0MS43LDI1Ny42eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xNDEuNywxODUuOWw3MS4yLTQyLjFsLTcxLjItMzIuM1YxODUuOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNNzAuNiwxNDMuOGw3MS4xLDQyLjF2LTc0LjRMNzAuNiwxNDMuOHoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K';

  var ethereum = {
    name: 'ethereum',
    id: '0x1',
    networkId: '1',
    label: 'Ethereum',
    fullName: 'Ethereum Mainnet',
    logo: logo$5,
    currency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    },
    explorer: 'https://etherscan.io',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://etherscan.io/tx/${transaction.id || transaction}` }
      if(token) { return `https://etherscan.io/token/${token}` }
      if(address) { return `https://etherscan.io/address/${address}` }
    },
    rpc: ['https://mainnet.infura.io/v3/9aa3d95b3bc4', '40fa88ea12eaa4456161'].join(''),
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": logo$5, "type": "NATIVE"},
      {"address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png", "type": "20"},
      {"address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
      {"address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png", "type": "20"},
      {"address": "0xdAC17F958D2ee523a2206206994597C13D831ec7", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
      {"address": "0x6B175474E89094C44Da98b954EedeAC495271d0F", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
      {"address": "0x853d955aCEf822Db058eb8505911ED77F175b99e", "symbol": "FRAX", "name": "Frax", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x853d955aCEf822Db058eb8505911ED77F175b99e/logo.png", "type": "20"},
      {"address": "0x8E870D67F660D95d5be530380D0eC0bd388289E1", "symbol": "USDP", "name": "Pax Dollar", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x8E870D67F660D95d5be530380D0eC0bd388289E1/logo.png", "type": "20"},
      {"address": "0x956F47F50A910163D8BF957Cf5846D573E7f87CA", "symbol": "FEI", "name": "Fei USD", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x956F47F50A910163D8BF957Cf5846D573E7f87CA/logo.png", "type": "20"}
    ]
  };

  const logo$4 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOTIgMTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIgMTkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0YwQjkwQjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01NCw0MS4xbDQyLTI0LjJsNDIsMjQuMmwtMTUuNCw4LjlMOTYsMzQuOUw2OS40LDUwTDU0LDQxLjF6IE0xMzgsNzEuN2wtMTUuNC04LjlMOTYsNzhMNjkuNCw2Mi43bC0xNS40LDl2MTgKCUw4MC42LDEwNXYzMC41bDE1LjQsOWwxNS40LTlWMTA1TDEzOCw4OS43VjcxLjd6IE0xMzgsMTIwLjN2LTE4bC0xNS40LDguOXYxOEMxMjIuNiwxMjkuMSwxMzgsMTIwLjMsMTM4LDEyMC4zeiBNMTQ4LjksMTI2LjQKCWwtMjYuNiwxNS4zdjE4bDQyLTI0LjJWODdsLTE1LjQsOUMxNDguOSw5NiwxNDguOSwxMjYuNCwxNDguOSwxMjYuNHogTTEzMy41LDU2LjRsMTUuNCw5djE4bDE1LjQtOXYtMThsLTE1LjQtOUwxMzMuNSw1Ni40CglMMTMzLjUsNTYuNHogTTgwLjYsMTQ4LjN2MThsMTUuNCw5bDE1LjQtOXYtMThMOTYsMTU3LjFMODAuNiwxNDguM3ogTTU0LDEyMC4zbDE1LjQsOXYtMTguMUw1NCwxMDIuM0w1NCwxMjAuM0w1NCwxMjAuM3oKCSBNODAuNiw1Ni40bDE1LjQsOWwxNS40LTlMOTYsNDcuNUM5Niw0Ny40LDgwLjYsNTYuNCw4MC42LDU2LjRMODAuNiw1Ni40eiBNNDMuMSw2NS40bDE1LjQtOWwtMTUuNC05bC0xNS40LDl2MThsMTUuNCw5TDQzLjEsNjUuNAoJTDQzLjEsNjUuNHogTTQzLjEsOTUuOUwyNy43LDg3djQ4LjVsNDIsMjQuMnYtMThsLTI2LjYtMTUuM1Y5NS45TDQzLjEsOTUuOXoiLz4KPC9zdmc+Cg==';

  var bsc = {
    name: 'bsc',
    id: '0x38',
    networkId: '56',
    label: 'BNB Smart Chain',
    fullName: 'BNB Smart Chain Mainnet',
    logo: logo$4,
    currency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    },
    explorer: 'https://bscscan.com',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://bscscan.com/tx/${transaction.id || transaction}` }
      if(token) { return `https://bscscan.com/token/${token}` }
      if(address) { return `https://bscscan.com/address/${address}` }
    },
    rpc: 'https://bsc-dataseed1.binance.org',
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "BNB", "name": "Binance Coin", "decimals": 18, "logo": logo$4, "type": "NATIVE"},
      {"address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "symbol": "WBNB", "name": "Wrapped BNB", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png", "type": "20"},
      {"address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "symbol": "BUSD", "name": "BUSD Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png", "type": "20"},
      {"address": "0x55d398326f99059fF775485246999027B3197955", "symbol": "USDT", "name": "Tether USD", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png", "type": "20"},
      {"address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", "symbol": "USDC", "name": "USD Coin", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d/logo.png", "type": "20"},
      {"address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", "symbol": "ETH", "name": "Ethereum Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png", "type": "20"},
      {"address": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "symbol": "Cake", "name": "PancakeSwap Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png", "type": "20"},
      {"address": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", "symbol": "BTCB", "name": "BTCB Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png", "type": "20"}
    ]
  };

  const logo$3 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4MjQ3RTU7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzEuOSwxNi42Yy0wLjctMC40LTEuNi0wLjQtMi4yLDBsLTUuMywzLjFsLTMuNSwybC01LjEsMy4xYy0wLjcsMC40LTEuNiwwLjQtMi4yLDBsLTQtMi40CgljLTAuNi0wLjQtMS4xLTEuMS0xLjEtMnYtNC42YzAtMC45LDAuNS0xLjYsMS4xLTJsNC0yLjNjMC43LTAuNCwxLjUtMC40LDIuMiwwbDQsMi40YzAuNywwLjQsMS4xLDEuMSwxLjEsMnYzLjFsMy41LTIuMXYtMy4yCgljMC0wLjktMC40LTEuNi0xLjEtMmwtNy41LTQuNGMtMC43LTAuNC0xLjUtMC40LTIuMiwwTDYsMTEuN2MtMC43LDAuNC0xLjEsMS4xLTEuMSwxLjh2OC43YzAsMC45LDAuNCwxLjYsMS4xLDJsNy42LDQuNAoJYzAuNywwLjQsMS41LDAuNCwyLjIsMGw1LjEtMi45bDMuNS0yLjFsNS4xLTIuOWMwLjctMC40LDEuNi0wLjQsMi4yLDBsNCwyLjNjMC43LDAuNCwxLjEsMS4xLDEuMSwydjQuNmMwLDAuOS0wLjQsMS42LTEuMSwyCglsLTMuOSwyLjNjLTAuNywwLjQtMS41LDAuNC0yLjIsMGwtNC0yLjNjLTAuNy0wLjQtMS4xLTEuMS0xLjEtMnYtMi45TDIxLDI4Ljd2My4xYzAsMC45LDAuNCwxLjYsMS4xLDJsNy41LDQuNAoJYzAuNywwLjQsMS41LDAuNCwyLjIsMGw3LjUtNC40YzAuNy0wLjQsMS4xLTEuMSwxLjEtMlYyM2MwLTAuOS0wLjQtMS42LTEuMS0yQzM5LjIsMjEsMzEuOSwxNi42LDMxLjksMTYuNnoiLz4KPC9zdmc+Cg==';

  var polygon = {
    name: 'polygon',
    id: '0x89',
    networkId: '137',
    label: 'Polygon',
    fullName: 'Polygon Mainnet',
    logo: logo$3,
    currency: {
      name: 'Polygon',
      symbol: 'MATIC',
      decimals: 18
    },
    explorer: 'https://polygonscan.com',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://polygonscan.com/tx/${transaction.id || transaction}` }
      if(token) { return `https://polygonscan.com/token/${token}` }
      if(address) { return `https://polygonscan.com/address/${address}` }
    },
    rpc: 'https://rpc-mainnet.matic.network',
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "MATIC", "name": "Polygon", "decimals": 18, "logo": logo$3, "type": "NATIVE"},
      {"address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", "symbol": "WMATIC", "name": "Wrapped Matic", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png", "type": "20"},
      {"address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png", "type": "20"},
      {"address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
      {"address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
      {"address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1", "symbol": "miMATIC", "name": "miMATIC", "decimals": 18, "logo": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png", "type": "20"},
      {"address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
      {"address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png", "type": "20"}
    ]
  };

  const logo$2 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzAwMDAwMDgxNjQ5Mzg2MDAzMTY1MDY0NzQwMDAwMDA5MTQ0OTMyODU3MjcwMzIyMzUxXyk7fQoJLnN0MntmaWxsOnVybCgjU1ZHSURfMDAwMDAxODE3NjY0MTQxMjk2ODA3NDY5NTAwMDAwMTAxMDQxNDQyMTg1MzUyOTc5NjBfKTt9Cjwvc3R5bGU+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzYuNjY3NiIgeTE9IjcwLjA5MjIiIHgyPSIxNy43Mjg3IiB5Mj0iMzMuODE2NCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDc2LjEyNDgpIj4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEZGQTMiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzFGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTExLjEsMjkuOGMwLjItMC4yLDAuNS0wLjMsMC44LTAuM2gyNy40YzAuNSwwLDAuOCwwLjYsMC40LDFsLTUuNCw1LjRjLTAuMiwwLjItMC41LDAuMy0wLjgsMC4zSDYuMQoJYy0wLjUsMC0wLjgtMC42LTAuNC0xTDExLjEsMjkuOHoiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8wMDAwMDAwMzA3MjI3ODQ3MzczNzk5MzEwMDAwMDAxMDY5NTAwOTIxODg5NTA5NjIzMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjguMzkxNiIgeTE9Ijc0LjQxMyIgeDI9IjkuNDUyNyIgeTI9IjM4LjEzNzIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA3Ni4xMjQ4KSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBGRkEzIi8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojREMxRkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMDAwMDAwMDMwNzIyNzg0NzM3Mzc5OTMxMDAwMDAwMTA2OTUwMDkyMTg4OTUwOTYyMzJfKTsiIGQ9Ik0xMS4xLDkuNmMwLjItMC4yLDAuNS0wLjMsMC44LTAuM2gyNy40CgljMC41LDAsMC44LDAuNiwwLjQsMWwtNS40LDUuNGMtMC4yLDAuMi0wLjUsMC4zLTAuOCwwLjNINi4xYy0wLjUsMC0wLjgtMC42LTAuNC0xTDExLjEsOS42eiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzAwMDAwMDMzMzYxNDk5ODEyMTQ5NzA5NzIwMDAwMDAyNjgwMDkyNDU4MTIyMzgxOTcxXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzMi41MDE5IiB5MT0iNzIuMjY3IiB4Mj0iMTMuNTYzIiB5Mj0iMzUuOTkxMyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDc2LjEyNDgpIj4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEZGQTMiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzFGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8wMDAwMDAzMzM2MTQ5OTgxMjE0OTcwOTcyMDAwMDAwMjY4MDA5MjQ1ODEyMjM4MTk3MV8pOyIgZD0iTTM0LjMsMTkuNmMtMC4yLTAuMi0wLjUtMC4zLTAuOC0wLjNINi4xCgljLTAuNSwwLTAuOCwwLjYtMC40LDFsNS40LDUuNGMwLjIsMC4yLDAuNSwwLjMsMC44LDAuM2gyNy40YzAuNSwwLDAuOC0wLjYsMC40LTFMMzQuMywxOS42eiIvPgo8L3N2Zz4K';

  var solana = {
    name: 'solana',
    networkId: 'mainnet-beta',
    label: 'Solana',
    fullName: 'Solana',
    logo: logo$2,
    currency: {
      name: 'Solana',
      symbol: 'SOL',
      decimals: 9
    },
    explorer: 'https://solscan.io',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://solscan.io/tx/${transaction.id || transaction}` }
      if(token) { return `https://solscan.io/token/${token}` }
      if(address) { return `https://solscan.io/address/${address}` }
    },
    rpc: 'https://api.mainnet-beta.solana.com',
    tokens: [ // only major tokens
      {"address": "11111111111111111111111111111111", "symbol": "SOL", "name": "Solana", "decimals": 9, "logo": logo$2, "type": "NATIVE"},
      {"address": "So11111111111111111111111111111111111111112", "symbol": "WSOL", "name": "Wrapped SOL", "decimals": 9, "logo": "https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png", "type": "SPL"},
      {"address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://img.raydium.io/icon/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png", "type": "SPL"},
      {"address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "symbol": "USDT", "name": "USDT", "decimals": 6, "logo": "https://img.raydium.io/icon/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.png", "type": "SPL"}
    ]
  };

  const logo$1 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIKCSBpZD0iTGF5ZXJfMSIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUuNCA0NS40IgoJIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMwMDM3QzE7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjkuMiwxOS45bC02LjUsMTEuM2wtNi41LTExLjRMMjkuMiwxOS45TDI5LjIsMTkuOXogTTM1LjcsMTYuMUg5LjdsMTMsMjIuOEwzNS43LDE2LjF6IE01LjUsOC41bDIuMSwzLjhoMzAuMQoJbDIuMi0zLjhINS41eiIvPgo8L3N2Zz4K';

  var velas = {
    name: 'velas',
    id: '0x6A',
    networkId: '106',
    label: 'VELAS',
    fullName: 'Velas EVM Mainnet',
    logo: logo$1,
    currency: {
      name: 'Velas',
      symbol: 'VLX',
      decimals: 18
    },
    explorer: 'https://evmexplorer.velas.com',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://evmexplorer.velas.com/tx/${transaction.id || transaction}` }
      if(token) { return `https://evmexplorer.velas.com/token/${token}` }
      if(address) { return `https://evmexplorer.velas.com/address/${address}` }
    },
    rpc: 'https://evmexplorer.velas.com/rpc',
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "VLX", "name": "Velas", "decimals": 18, "logo": logo$1, "type": "NATIVE"},
      {"address": "0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126", "symbol": "WVLX", "name": "Wrapped Velas", "decimals": 18, "logo": "https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0xc579d1f3cf86749e05cd06f7ade17856c2ce3126/logo.png?raw=true", "type": "20"},
      {"address": "0xc111c29A988AE0C0087D97b33C6E6766808A3BD3", "symbol": "BUSD", "name": "Multichain BUSD", "decimals": 18, "logo": "https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0xc111c29a988ae0c0087d97b33c6e6766808a3bd3/logo.png?raw=true", "type": "20"},
      {"address": "0x01445C31581c354b7338AC35693AB2001B50b9aE", "symbol": "USDT", "name": "Multichain USDT", "decimals": 6, "logo": "https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0x01445c31581c354b7338ac35693ab2001b50b9ae/logo.png?raw=true", "type": "20"},
      {"address": "0x85219708c49aa701871Ad330A94EA0f41dFf24Ca", "symbol": "ETH", "name": "ETH", "decimals": 18, "logo": "https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0x85219708c49aa701871ad330a94ea0f41dff24ca/logo.png?raw=true", "type": "20"},
      {"address": "0xaBf26902Fd7B624e0db40D31171eA9ddDf078351", "symbol": "WAG", "name": "WagyuSwap", "decimals": 18, "logo": "https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0xabf26902fd7b624e0db40d31171ea9dddf078351/logo.png?raw=true", "type": "20"},
    ]
  };

  const logo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODMuNSAyODMuNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjgzLjUgMjgzLjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxjaXJjbGUgZmlsbD0iI0YwRUZFRiIgY3g9IjE0MS43IiBjeT0iMTQxLjciIHI9IjE0MS43Ii8+PHBhdGggZmlsbD0iI0FCQUJBQiIgZD0iTTEyNyAxNzUuMXYtNC40YzAtOC40IDEuMS0xNS4zIDMuNC0yMC43IDIuMy01LjQgNS4xLTEwIDguNC0xMy44IDMuMy0zLjcgNi42LTcgMTAuMS05LjdzNi4zLTUuNiA4LjYtOC41YzIuMy0yLjkgMy40LTYuNCAzLjQtMTAuNSAwLTUtMS4xLTguNy0zLjMtMTEuMS0yLjItMi40LTUtNC04LjQtNC44LTMuNC0uOC02LjktMS4zLTEwLjUtMS4zLTUuOCAwLTExLjggMS0xNy45IDIuOS02LjEgMS45LTExLjUgNC43LTE2IDguNFY3NGMyLjMtMS43IDUuNC0zLjMgOS40LTQuOSA0LTEuNiA4LjQtMi45IDEzLjQtNHMxMC4xLTEuNiAxNS41LTEuNmM4LjEgMCAxNS4xIDEuMSAyMS4xIDMuNCA2IDIuMyAxMC44IDUuNSAxNC43IDkuNSAzLjggNCA2LjcgOC43IDguNiAxNC4xIDEuOSA1LjMgMi45IDExLjEgMi45IDE3LjIgMCA2LjYtMS4xIDEyLTMuNCAxNi4zLTIuMyA0LjMtNS4xIDgtOC41IDExLjItMy40IDMuMi02LjggNi40LTEwLjIgOS41LTMuNCAzLjEtNi4zIDYuOC04LjYgMTFzLTMuNCA5LjUtMy40IDE1Ljl2My40SDEyN3ptLTEuOCA0My4xdi0yNy43aDMzdjI3LjdoLTMzeiIvPjwvc3ZnPgo=';

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
    velas,
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
