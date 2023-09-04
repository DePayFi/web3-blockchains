(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Web3Blockchains = factory());
}(this, (function () { 'use strict';

  const logo$9 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOTIgMTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIgMTkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0YwQjkwQjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01OS43LDQ4LjZMOTYsMjcuN2wzNi4zLDIwLjlMMTE5LDU2LjNsLTIzLTEzbC0yMywxM0w1OS43LDQ4LjZ6IE0xMzIuMyw3NUwxMTksNjcuM0w5Niw4MC41TDczLDY3LjJMNTkuNyw3NQoJdjE1LjVsMjMsMTMuMnYyNi4zbDEzLjMsNy44bDEzLjMtNy44di0yNi4zbDIzLTEzLjJWNzV6IE0xMzIuMywxMTd2LTE1LjVsLTEzLjMsNy43djE1LjVDMTE5LDEyNC42LDEzMi4zLDExNywxMzIuMywxMTd6CgkgTTE0MS43LDEyMi4zbC0yMywxMy4yVjE1MWwzNi4zLTIwLjlWODguMkwxNDEuNyw5NlYxMjIuM3ogTTEyOC40LDYxLjhsMTMuMyw3Ljh2MTUuNWwxMy4zLTcuOFY2MS44TDE0MS43LDU0TDEyOC40LDYxLjgKCUwxMjguNCw2MS44eiBNODIuNywxNDEuMnYxNS41bDEzLjMsNy44bDEzLjMtNy44di0xNS41TDk2LDE0OC44TDgyLjcsMTQxLjJ6IE01OS43LDExN2wxMy4zLDcuOHYtMTUuNmwtMTMuMy03LjdWMTE3TDU5LjcsMTE3egoJIE04Mi43LDYxLjhMOTYsNjkuNmwxMy4zLTcuOEw5Niw1NC4xQzk2LDU0LDgyLjcsNjEuOCw4Mi43LDYxLjhMODIuNyw2MS44eiBNNTAuMyw2OS42bDEzLjMtNy44TDUwLjMsNTRMMzcsNjEuOHYxNS41bDEzLjMsNy44CglWNjkuNkw1MC4zLDY5LjZ6IE01MC4zLDk1LjlMMzcsODguMnY0MS45TDczLjMsMTUxdi0xNS41bC0yMy0xMy4yVjk1LjlMNTAuMyw5NS45eiIvPgo8L3N2Zz4K';
  const currencyLogo$6 = "https://app.uniswap.org/static/media/bnb-logo.797868eb94521320b78e3967134febbe.svg";
  const wrappedLogo$5 = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png";

  var bsc = {
    name: 'bsc',
    id: '0x38',
    networkId: '56',
    namespace: 'eip155',
    platform: 'evm',
    label: 'BNB Smart Chain',
    fullName: 'BNB Smart Chain Mainnet',
    logo: logo$9,
    logoBackgroundColor: '#000000',
    logoWhiteBackground: logo$9,
    currency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: currencyLogo$6,
    },
    wrapped: {
      address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logo: wrappedLogo$5,
    },
    stables: { // max. 3 per fiat currency
      usd: ['0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', '0x55d398326f99059fF775485246999027B3197955']
    },
    explorer: 'https://bscscan.com',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://bscscan.com/tx/${transaction.id || transaction}` }
      if(token) { return `https://bscscan.com/token/${token}` }
      if(address) { return `https://bscscan.com/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://bsc-dataseed.binance.org',
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed3.defibit.io'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "BNB", "name": "Binance Coin", "decimals": 18, "logo": currencyLogo$6, "type": "NATIVE"},
      {"address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "symbol": "WBNB", "name": "Wrapped BNB", "decimals": 18, "logo": "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png", "type": "20"},
      {"address": "0x55d398326f99059fF775485246999027B3197955", "symbol": "USDT", "name": "Tether USD", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png", "type": "20"},
      {"address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", "symbol": "USDC", "name": "USD Coin", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d/logo.png", "type": "20"},
      {"address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", "symbol": "ETH", "name": "Ethereum Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png", "type": "20"},
      {"address": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "symbol": "Cake", "name": "PancakeSwap Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png", "type": "20"},
      {"address": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", "symbol": "BTCB", "name": "BTCB Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png", "type": "20"},
      {"address": "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb", "symbol": "DEPAY", "name": "DePay", "decimals": 18, "logo": "https://depay.com/favicon.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$8 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxvZ28iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MzEuNiA3MzEuNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzMxLjYgNzMxLjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO2ZpbGwtb3BhY2l0eTowLjYwMjt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjtmaWxsLW9wYWNpdHk6MC4yO30KPC9zdHlsZT4KPHBvbHlnb24gaWQ9IlBhdGgiIGNsYXNzPSJzdDAiIHBvaW50cz0iMzc3LjIsMTMwLjkgMzc3LjIsMzA0LjUgNTIzLjksMzcwLjEgIi8+Cjxwb2x5Z29uIGlkPSJQYXRoXzFfIiBjbGFzcz0ic3QxIiBwb2ludHM9IjM3Ny4yLDEzMC45IDIzMC41LDM3MC4xIDM3Ny4yLDMwNC41ICIvPgo8cG9seWdvbiBpZD0iUGF0aF8yXyIgY2xhc3M9InN0MCIgcG9pbnRzPSIzNzcuMiw0ODIuNSAzNzcuMiw2MDAuNSA1MjQsMzk3LjQgIi8+Cjxwb2x5Z29uIGlkPSJQYXRoXzNfIiBjbGFzcz0ic3QxIiBwb2ludHM9IjM3Ny4yLDYwMC41IDM3Ny4yLDQ4Mi41IDIzMC41LDM5Ny40ICIvPgo8cG9seWdvbiBpZD0iUGF0aF80XyIgY2xhc3M9InN0MiIgcG9pbnRzPSIzNzcuMiw0NTUuMiA1MjMuOSwzNzAuMSAzNzcuMiwzMDQuNSAiLz4KPHBvbHlnb24gaWQ9IlBhdGhfNV8iIGNsYXNzPSJzdDAiIHBvaW50cz0iMjMwLjUsMzcwLjEgMzc3LjIsNDU1LjIgMzc3LjIsMzA0LjUgIi8+Cjwvc3ZnPgo=';
  const currencyLogo$5 = "data:image/png;base64,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";
  const wrappedLogo$4 = "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png";

  var ethereum = {
    name: 'ethereum',
    id: '0x1',
    networkId: '1',
    namespace: 'eip155',
    platform: 'evm',
    label: 'Ethereum',
    fullName: 'Ethereum Mainnet',
    logo: logo$8,
    logoBackgroundColor: '#5683ec',
    logoWhiteBackground: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiCgkgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjgzLjUgMjgzLjUiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjgzLjUgMjgzLjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjMzQzNDM0IiBkPSJNMTQxLjcsMjUuOWwtMS41LDUuMnYxNTMuM2wxLjUsMS41bDcxLjItNDIuMUwxNDEuNywyNS45eiIvPgoJCTxwYXRoIGZpbGw9IiM4QzhDOEMiIGQ9Ik0xNDEuNywyNS45TDcwLjYsMTQzLjhsNzEuMSw0Mi4xdi03NC40VjI1Ljl6Ii8+CgkJPHBhdGggZmlsbD0iIzNDM0MzQiIgZD0iTTE0MS43LDE5OS40bC0wLjgsMS4xdjU0LjZsMC44LDIuNWw3MS4yLTEwMC4zTDE0MS43LDE5OS40eiIvPgoJCTxwYXRoIGZpbGw9IiM4QzhDOEMiIGQ9Ik0xNDEuNywyNTcuNnYtNTguMmwtNzEuMS00Mi4xTDE0MS43LDI1Ny42eiIvPgoJCTxwYXRoIGZpbGw9IiMxNDE0MTQiIGQ9Ik0xNDEuNywxODUuOWw3MS4yLTQyLjFsLTcxLjItMzIuM1YxODUuOXoiLz4KCQk8cGF0aCBmaWxsPSIjMzkzOTM5IiBkPSJNNzAuNiwxNDMuOGw3MS4xLDQyLjF2LTc0LjRMNzAuNiwxNDMuOHoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K',
    currency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: currencyLogo$5,
    },
    wrapped: {
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      logo: wrappedLogo$4,
      logoBackgroundColor: '#FFFFFF',
    },
    stables: { // max. 3 per fiat currency
      usd: ['0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', '0xdAC17F958D2ee523a2206206994597C13D831ec7', '0x6B175474E89094C44Da98b954EedeAC495271d0F']
    },
    explorer: 'https://etherscan.io',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://etherscan.io/tx/${transaction.id || transaction}` }
      if(token) { return `https://etherscan.io/token/${token}` }
      if(address) { return `https://etherscan.io/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://rpc.ankr.com/eth',
      'https://eth.llamarpc.com',
      'https://ethereum.publicnode.com'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": currencyLogo$5, "type": "NATIVE"},
      {"address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": wrappedLogo$4, "type": "20"},
      {"address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
      {"address": "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c", "symbol": "EUROC", "name": "EURO Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c/logo.png", "type": "20"},
      {"address": "0xdAC17F958D2ee523a2206206994597C13D831ec7", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
      {"address": "0x6B175474E89094C44Da98b954EedeAC495271d0F", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
      {"address": "0x853d955aCEf822Db058eb8505911ED77F175b99e", "symbol": "FRAX", "name": "Frax", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x853d955aCEf822Db058eb8505911ED77F175b99e/logo.png", "type": "20"},
      {"address": "0x956F47F50A910163D8BF957Cf5846D573E7f87CA", "symbol": "FEI", "name": "Fei USD", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x956F47F50A910163D8BF957Cf5846D573E7f87CA/logo.png", "type": "20"},
      {"address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png", "type": "20"},
      {"address": "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb", "symbol": "DEPAY", "name": "DePay", "decimals": 18, "logo": "https://depay.com/favicon.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$7 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNjAuNyAxNjAuOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYwLjcgMTYwLjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggaWQ9IlNoYXBlIiBjbGFzcz0ic3QwIiBkPSJNNzUuNCwyNS42YzIuNy0xLjQsNi44LTEuNCw5LjUsMGwyNy42LDE0LjZjMS42LDAuOSwyLjUsMi4xLDIuNywzLjVsMCwwVjExN2MwLDEuNC0wLjksMi45LTIuNywzLjgKCWwtMjcuNiwxNC42Yy0yLjcsMS40LTYuOCwxLjQtOS41LDBsLTI3LjYtMTQuNmMtMS44LTAuOS0yLjYtMi40LTIuNy0zLjhjMC0wLjEsMC0wLjMsMC0wLjRWNDQuMmMwLTAuMSwwLTAuMiwwLTAuM3YtMC4ybDAsMAoJYzAuMS0xLjMsMS0yLjYsMi42LTMuNUw3NS40LDI1LjZ6IE0xMTAuOSw4NC4zTDg0LjksOThjLTIuNywxLjQtNi44LDEuNC05LjUsMEw0OS41LDg0LjR2MzIuM2wyNS45LDEzLjZjMS41LDAuOCwzLjEsMS42LDQuNywxLjcKCWgwLjFjMS41LDAsMy0wLjgsNC42LTEuNWwyNi4yLTEzLjlMMTEwLjksODQuM0wxMTAuOSw4NC4zeiBNNDAuOCwxMTUuM2MwLDIuOCwwLjMsNC43LDEsNmMwLjUsMS4xLDEuMywxLjksMi44LDIuOWwwLjEsMC4xCgljMC4zLDAuMiwwLjcsMC40LDEuMSwwLjdsMC41LDAuM2wxLjYsMC45bC0yLjIsMy43bC0xLjctMS4xbC0wLjMtMC4yYy0wLjUtMC4zLTAuOS0wLjYtMS4zLTAuOGMtNC4yLTIuOC01LjctNS45LTUuNy0xMi4zdi0wLjIKCUw0MC44LDExNS4zTDQwLjgsMTE1LjN6IE03OC4xLDY0LjljLTAuMiwwLjEtMC40LDAuMS0wLjYsMC4yTDQ5LjksNzkuN2gtMC4xbDAsMGwwLDBoMC4xbDI3LjYsMTQuNmMwLjIsMC4xLDAuNCwwLjIsMC42LDAuMgoJQzc4LjEsOTQuNSw3OC4xLDY0LjksNzguMSw2NC45eiBNODIuNSw2NC45djI5LjhjMC4yLTAuMSwwLjQtMC4xLDAuNi0wLjJsMjcuNi0xNC42aDAuMWwwLDBsMCwwaC0wLjFMODMuMSw2NS4xCglDODIuOSw2NSw4Mi43LDY0LjksODIuNSw2NC45eiBNMTEwLjksNDguOGwtMjQuOCwxM2wyNC44LDEzQzExMC45LDc0LjgsMTEwLjksNDguOCwxMTAuOSw0OC44eiBNNDkuNSw0OC44djI2LjFsMjQuOC0xM0w0OS41LDQ4Ljh6CgkgTTgzLDI5LjVjLTEuNC0wLjgtNC0wLjgtNS41LDBMNDkuOSw0NC4xaC0wLjFsMCwwbDAsMGgwLjFsMjcuNiwxNC42YzEuNCwwLjgsNCwwLjgsNS41LDBsMjcuNi0xNC42aDAuMWwwLDBsMCwwaC0wLjFMODMsMjkuNXoKCSBNMTE1LDMwLjlsMS43LDEuMWwwLjMsMC4yYzAuNSwwLjMsMC45LDAuNiwxLjMsMC44YzQuMiwyLjgsNS43LDUuOSw1LjcsMTIuM3YwLjJoLTQuM2MwLTIuOC0wLjMtNC43LTEtNmMtMC41LTEuMS0xLjMtMS45LTIuOC0yLjkKCWwtMC4xLTAuMWMtMC4zLTAuMi0wLjctMC40LTEuMS0wLjdsLTAuNS0wLjNsLTEuNi0wLjlMMTE1LDMwLjl6Ii8+Cjwvc3ZnPgo=';
  const currencyLogo$4 = "https://assets.spooky.fi/tokens/FTM.png";
  const wrappedLogo$3 = "https://assets.spooky.fi/tokens/wFTM.png";

  var fantom = {
    name: 'fantom',
    id: '0xfa',
    networkId: '250',
    namespace: 'eip155',
    label: 'Fantom',
    fullName: 'Fantom Opera',
    logo: logo$7,
    logoBackgroundColor: '#226efb',
    logoWhiteBackground: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTkyIDE5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTkyIDE5MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iY2lyY2xlIj4KCTxnIGlkPSJGYW50b20tY2lyY2xlIj4KCQk8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsUnVsZT0iZXZlbm9kZCIgY2xpcFJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMxOTY5RkYiIGNsYXNzPSJzdDAiIGN4PSI5NiIgY3k9Ijk2IiByPSI4MC40Ii8+CgkJPHBhdGggaWQ9IlNoYXBlIiBmaWxsPSIjRkZGRkZGIiBkPSJNOTEuMSw0MS4yYzIuNy0xLjQsNi44LTEuNCw5LjUsMGwyNy42LDE0LjZjMS42LDAuOSwyLjUsMi4xLDIuNywzLjVoMHY3My4zCgkJCWMwLDEuNC0wLjksMi45LTIuNywzLjhsLTI3LjYsMTQuNmMtMi43LDEuNC02LjgsMS40LTkuNSwwbC0yNy42LTE0LjZjLTEuOC0wLjktMi42LTIuNC0yLjctMy44YzAtMC4xLDAtMC4zLDAtMC40bDAtNzIuNAoJCQljMC0wLjEsMC0wLjIsMC0wLjNsMC0wLjJoMGMwLjEtMS4zLDEtMi42LDIuNi0zLjVMOTEuMSw0MS4yeiBNMTI2LjYsOTkuOWwtMjYsMTMuN2MtMi43LDEuNC02LjgsMS40LTkuNSwwTDY1LjIsMTAwdjMyLjMKCQkJbDI1LjksMTMuNmMxLjUsMC44LDMuMSwxLjYsNC43LDEuN2wwLjEsMGMxLjUsMCwzLTAuOCw0LjYtMS41bDI2LjItMTMuOVY5OS45eiBNNTYuNSwxMzAuOWMwLDIuOCwwLjMsNC43LDEsNgoJCQljMC41LDEuMSwxLjMsMS45LDIuOCwyLjlsMC4xLDAuMWMwLjMsMC4yLDAuNywwLjQsMS4xLDAuN2wwLjUsMC4zbDEuNiwwLjlsLTIuMiwzLjdsLTEuNy0xLjFsLTAuMy0wLjJjLTAuNS0wLjMtMC45LTAuNi0xLjMtMC44CgkJCWMtNC4yLTIuOC01LjctNS45LTUuNy0xMi4zbDAtMC4ySDU2LjV6IE05My44LDgwLjVjLTAuMiwwLjEtMC40LDAuMS0wLjYsMC4yTDY1LjYsOTUuM2MwLDAtMC4xLDAtMC4xLDBsMCwwbDAsMGwwLjEsMGwyNy42LDE0LjYKCQkJYzAuMiwwLjEsMC40LDAuMiwwLjYsMC4yVjgwLjV6IE05OC4yLDgwLjV2MjkuOGMwLjItMC4xLDAuNC0wLjEsMC42LTAuMmwyNy42LTE0LjZjMCwwLDAuMSwwLDAuMSwwbDAsMGwwLDBsLTAuMSwwTDk4LjgsODAuNwoJCQlDOTguNiw4MC42LDk4LjQsODAuNSw5OC4yLDgwLjV6IE0xMjYuNiw2NC40bC0yNC44LDEzbDI0LjgsMTNWNjQuNHogTTY1LjIsNjQuNHYyNi4xbDI0LjgtMTNMNjUuMiw2NC40eiBNOTguNyw0NS4xCgkJCWMtMS40LTAuOC00LTAuOC01LjUsMEw2NS42LDU5LjdjMCwwLTAuMSwwLTAuMSwwbDAsMGwwLDBsMC4xLDBsMjcuNiwxNC42YzEuNCwwLjgsNCwwLjgsNS41LDBsMjcuNi0xNC42YzAsMCwwLjEsMCwwLjEsMGwwLDBsMCwwCgkJCWwtMC4xLDBMOTguNyw0NS4xeiBNMTMwLjcsNDYuNWwxLjcsMS4xbDAuMywwLjJjMC41LDAuMywwLjksMC42LDEuMywwLjhjNC4yLDIuOCw1LjcsNS45LDUuNywxMi4zbDAsMC4yaC00LjNjMC0yLjgtMC4zLTQuNy0xLTYKCQkJYy0wLjUtMS4xLTEuMy0xLjktMi44LTIuOWwtMC4xLTAuMWMtMC4zLTAuMi0wLjctMC40LTEuMS0wLjdsLTAuNS0wLjNsLTEuNi0wLjlMMTMwLjcsNDYuNXoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K',
    currency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: currencyLogo$4,
    },
    wrapped: {
      address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logo: wrappedLogo$3,
    },
    stables: { // max. 3 per fiat currency
      usd: ['0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf', '0x1B6382DBDEa11d97f24495C9A90b7c88469134a4']
    },
    explorer: 'https://ftmscan.com',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://ftmscan.com/tx/${transaction.id || transaction}` }
      if(token) { return `https://ftmscan.com/token/${token}` }
      if(address) { return `https://ftmscan.com/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://rpc.ftm.tools',
      'https://fantom.publicnode.com',
      'https://rpc2.fantom.network'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "FTM", "name": "Fantom", "decimals": 18, "logo": currencyLogo$4, "type": "NATIVE"},
      {"address": "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83", "symbol": "WFTM", "name": "Wrapped Fantom", "decimals": 18, "logo": wrappedLogo$3, "type": "20"},
      {"address": "0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf", "symbol": "lzUSDC", "name": "LayerZero USDC", "decimals": 6, "logo": "https://assets.spooky.fi/tokens/USDC.png", "type": "20"},
      {"address": "0x1B6382DBDEa11d97f24495C9A90b7c88469134a4", "symbol": "Axelar Wrapped", "name": "Axelar Wrapped USDC", "decimals": 6, "logo": "https://assets.spooky.fi/tokens/USDC.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$6 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy4zLDIxLjFjLTAuNiwwLjQtMSwxLTEsMS44djguMWMwLDAuOCwwLjQsMS41LDEsMS44bDYuOSw0YzAuNiwwLjQsMS40LDAuNCwyLDBsNi45LTRjMC42LTAuNCwxLTEsMS0xLjh2LTIuOQoJbC0zLjItMS44djIuN2MwLDAuOC0wLjQsMS41LTEsMS44TDE2LjMsMzNjLTAuNiwwLjQtMS40LDAuNC0yLDBsLTMuNi0yLjFjLTAuNi0wLjQtMS0xLTEtMS44di00LjJjMC0wLjgsMC40LTEuNSwxLTEuOGwzLjctMi4xCgljMC42LTAuNCwxLjQtMC40LDIsMGw0LjcsMi43bDMuMiwxLjlsNC43LDIuN2MwLjYsMC40LDEuNCwwLjQsMiwwbDctNGMwLjYtMC40LDEtMSwxLTEuOHYtOGMwLTAuNi0wLjQtMS4zLTEtMS43bC03LTQKCWMtMC42LTAuNC0xLjQtMC40LTIsMGwtNi45LDRjLTAuNiwwLjQtMSwxLTEsMS44djIuOWwzLjIsMS45di0yLjljMC0wLjgsMC40LTEuNSwxLTEuOGwzLjctMi4yYzAuNi0wLjQsMS40LTAuNCwyLDBsMy43LDIuMQoJYzAuNiwwLjQsMSwxLDEsMS44djQuMmMwLDAuOC0wLjUsMS41LTEsMS44TDMxLDI0LjZjLTAuNiwwLjQtMS40LDAuNC0yLDBsLTQuNy0yLjlMMjEsMTkuOWwtNC45LTIuOWMtMC42LTAuNC0xLjQtMC40LTIsMAoJQzE0LjEsMTcuMSw3LjQsMjEuMSw3LjMsMjEuMXoiLz4KPC9zdmc+Cg==';
  const currencyLogo$3 = "https://app.uniswap.org/static/media/matic-token-icon.da7b877d41122a55de4a43760bb4c8e5.svg";
  const wrappedLogo$2 = "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png";

  var polygon = {
    name: 'polygon',
    id: '0x89',
    networkId: '137',
    namespace: 'eip155',
    label: 'Polygon (POS)',
    fullName: 'Polygon (POS) Mainnet',
    logo: logo$6,
    logoBackgroundColor: '#824ee2',
    logoWhiteBackground: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4MjQ3RTU7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNiwyMWMtMC43LDAuNC0xLjEsMS4xLTEuMSwydjguOGMwLDAuOSwwLjQsMS42LDEuMSwybDcuNSw0LjRjMC43LDAuNCwxLjUsMC40LDIuMiwwbDcuNS00LjQKCWMwLjctMC40LDEuMS0xLjEsMS4xLTJ2LTMuMWwtMy41LTJ2Mi45YzAsMC45LTAuNCwxLjYtMS4xLDJsLTQsMi4zYy0wLjcsMC40LTEuNSwwLjQtMi4yLDBsLTMuOS0yLjNjLTAuNy0wLjQtMS4xLTEuMS0xLjEtMlYyNQoJYzAtMC45LDAuNC0xLjYsMS4xLTJsNC0yLjNjMC42LTAuNCwxLjUtMC40LDIuMiwwbDUuMSwyLjlsMy41LDIuMWw1LjEsMi45YzAuNywwLjQsMS41LDAuNCwyLjIsMGw3LjYtNC40YzAuNy0wLjQsMS4xLTEuMSwxLjEtMgoJdi04LjdjMC0wLjctMC40LTEuNC0xLjEtMS44bC03LjYtNC40Yy0wLjctMC40LTEuNS0wLjQtMi4yLDBMMjIsMTEuN2MtMC43LDAuNC0xLjEsMS4xLTEuMSwydjMuMmwzLjUsMi4xdi0zLjFjMC0wLjksMC40LTEuNiwxLjEtMgoJbDQtMi40YzAuNy0wLjQsMS41LTAuNCwyLjIsMGw0LDIuM2MwLjYsMC40LDEuMSwxLjEsMS4xLDJ2NC42YzAsMC45LTAuNSwxLjYtMS4xLDJsLTQsMi40Yy0wLjYsMC40LTEuNSwwLjQtMi4yLDBsLTUuMS0zLjFsLTMuNS0yCglsLTUuMy0zLjFjLTAuNi0wLjQtMS41LTAuNC0yLjIsMEMxMy40LDE2LjYsNi4xLDIxLDYsMjF6Ii8+Cjwvc3ZnPgo=',
    currency: {
      name: 'Polygon',
      symbol: 'MATIC',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: currencyLogo$3
    },
    wrapped: {
      address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      logo: wrappedLogo$2,
    },
    stables: { // max. 3 per fiat currency
      usd: ['0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063']
    },
    explorer: 'https://polygonscan.com',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://polygonscan.com/tx/${transaction.id || transaction}` }
      if(token) { return `https://polygonscan.com/token/${token}` }
      if(address) { return `https://polygonscan.com/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://polygon-rpc.com',
      'https://poly-rpc.gateway.pokt.network',
      'https://polygon.llamarpc.com'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "MATIC", "name": "Polygon", "decimals": 18, "logo": currencyLogo$3, "type": "NATIVE"},
      {"address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", "symbol": "WMATIC", "name": "Wrapped Matic", "decimals": 18, "logo": wrappedLogo$2, "type": "20"},
      {"address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
      {"address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
      {"address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
      {"address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png", "type": "20"},
      {"address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png", "type": "20"},
      {"address": "0xf6261529C6C2fBEB313aB25cDEcD243613b40EB5", "symbol": "DEPAY", "name": "DePay", "decimals": 18, "logo": "https://depay.com/favicon.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$5 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNPTEFOQV9TVkdJRF8xIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM1LjU5NzQiIHkxPSI3NzIuOTI3NyIgeDI9IjE4LjE0MjIiIHkyPSI4MDYuMzYxNiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDAgLTc2NS43NjUpIj4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEZGQTMiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzFGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggZmlsbD0idXJsKCNTT0xBTkFfU1ZHSURfMSkiIGQ9Ik0xMiwyOS4xYzAuMi0wLjIsMC41LTAuMywwLjctMC4zSDM4YzAuNSwwLDAuNywwLjYsMC40LDAuOWwtNSw1Yy0wLjIsMC4yLTAuNSwwLjMtMC43LDAuM0g3LjQKCUM2LjksMzUsNi43LDM0LjQsNywzNEwxMiwyOS4xeiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzAwMDAwMTYwODY5NzIyMjI5NDY0Mzk5NzMwMDAwMDA5NDA3MDIxNTc4MjQ4MDg3NzExXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNy45NTk1IiB5MT0iNzY5LjEyNDQiIHgyPSIxMC41MDQzIiB5Mj0iODAyLjU1ODIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIC03NjUuNzY1KSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBGRkEzIi8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojREMxRkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMDAwMDAxNjA4Njk3MjIyMjk0NjQzOTk3MzAwMDAwMDk0MDcwMjE1NzgyNDgwODc3MTFfKTsiIGQ9Ik0xMiwxMC42YzAuMi0wLjIsMC41LTAuMywwLjctMC4zSDM4CgljMC41LDAsMC43LDAuNiwwLjQsMC45bC01LDVjLTAuMiwwLjItMC41LDAuMy0wLjcsMC4zSDcuNGMtMC41LDAtMC43LTAuNi0wLjQtMC45TDEyLDEwLjZ6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMDAwMDAxMzkyODMyMTczNzg2NTYwOTQ4NjAwMDAwMDM2OTQ4OTUzNzkwNzgxMTY3ODJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjMxLjc0MDYiIHkxPSI3NzEuMDk4NSIgeDI9IjE0LjI4NTUiIHkyPSI4MDQuNTMyMyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDAgLTc2NS43NjUpIj4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEZGQTMiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzFGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8wMDAwMDEzOTI4MzIxNzM3ODY1NjA5NDg2MDAwMDAwMzY5NDg5NTM3OTA3ODExNjc4Ml8pOyIgZD0iTTMzLjQsMTkuOGMtMC4yLTAuMi0wLjUtMC4zLTAuNy0wLjNINy40CgljLTAuNSwwLTAuNywwLjYtMC40LDAuOWw1LDVjMC4yLDAuMiwwLjUsMC4zLDAuNywwLjNIMzhjMC41LDAsMC43LTAuNiwwLjQtMC45TDMzLjQsMTkuOHoiLz4KPC9zdmc+Cg==';
  const currencyLogo$2 = 'https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png';

  var solana = {
    name: 'solana',
    networkId: 'solana',
    namespace: 'solana',
    label: 'Solana',
    fullName: 'Solana Mainnet Beta',
    logo: logo$5,
    logoBackgroundColor: '#000000',
    logoWhiteBackground: logo$5,
    currency: {
      name: 'Solana',
      symbol: 'SOL',
      decimals: 9,
      address: '11111111111111111111111111111111',
      logo: currencyLogo$2,
    },
    wrapped: {
      address: 'So11111111111111111111111111111111111111112',
      logo: currencyLogo$2,
    },
    stables: { // max. 3 per fiat currency
      usd: ['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB']
    },
    explorer: 'https://solscan.io',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://solscan.io/tx/${transaction.id || transaction}` }
      if(token) { return `https://solscan.io/token/${token}` }
      if(address) { return `https://solscan.io/address/${address}` }
    },
    endpoints: [
      'https://solana-mainnet.phantom.app/YBPpkkN4g91xDiAnTE9r0RcMkjg0sKUIWvAfoFVJ',
      'https://mainnet-beta.solflare.network',
      'https://solana-mainnet.rpc.extrnode.com'
    ],
    sockets: [
      'wss://solana-mainnet.phantom.app/YBPpkkN4g91xDiAnTE9r0RcMkjg0sKUIWvAfoFVJ',
      'wss://mainnet-beta.solflare.network'
    ],
    tokens: [ // only major tokens
      {"address": "11111111111111111111111111111111", "symbol": "SOL", "name": "Solana", "decimals": 9, "logo": currencyLogo$2, "type": "NATIVE"},
      {"address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://img.raydium.io/icon/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png", "type": "SPL"},
      {"address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "symbol": "USDT", "name": "USDT", "decimals": 6, "logo": "https://img.raydium.io/icon/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.png", "type": "SPL"},
      {"address": "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj", "symbol": "stSOL", "name": "Lido Staked SOL", "decimals": 9, "logo": "https://img.raydium.io/icon/7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj.png", "type": "SPL"},
      {"address": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263", "symbol": "BONK", "name": "BONK", "decimals": 5, "logo": "https://img.raydium.io/icon/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263.png", "type": "SPL"},
      {"address": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU", "symbol": "SAMO", "name": "Samoyed Coin", "decimals": 9, "logo": "https://img.raydium.io/icon/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU.png", "type": "SPL"},
      {"address": "DePay1miDBPWXs6PVQrdC5Vch2jemgEPaiyXLNLLa2NF", "symbol": "DEPAY", "name": "DePay", "decimals": 9, "logo": "https://depay.com/favicon.png", "type": "SPL"},
    ],
    zero: '0',
    maxInt: '340282366920938463463374607431768211455',
  };

  const logo$4 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOnhvZG09Imh0dHA6Ly93d3cuY29yZWwuY29tL2NvcmVsZHJhdy9vZG0vMjAwMyIKCSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI1MDAgMjUwMCIKCSBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO30KCS5zdDF7ZmlsbDojMjEzMTQ3O30KCS5zdDJ7ZmlsbDojMTJBQUZGO30KCS5zdDN7ZmlsbDojOURDQ0VEO30KCS5zdDR7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgoJPGcgaWQ9Il8yNDA1NTg4NDc3MjMyIj4KCQk8cmVjdCB4PSIyMjYiIHk9IjIyNiIgY2xhc3M9InN0MCIgd2lkdGg9IjIwNDgiIGhlaWdodD0iMjA0OCIvPgoJCTxnPgoJCQk8Zz4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00MTEuMSw4NDguNnY4MDIuOGMwLDUxLjYsMjcsOTguMyw3Mi4xLDEyNC41bDY5NS41LDQwMS40YzQ0LjIsMjUuNCw5OS4xLDI1LjQsMTQzLjQsMGw2OTUuNS00MDEuNAoJCQkJCWM0NC4yLTI1LjQsNzIuMS03Mi45LDcyLjEtMTI0LjVWODQ4LjZjMC01MS42LTI3LTk4LjMtNzIuMS0xMjQuNWwtNjk1LjUtNDAxLjRjLTQ0LjItMjUuNC05OS4xLTI1LjQtMTQzLjQsMEw0ODMuMiw3MjQuMQoJCQkJCWMtNDQuMiwyNS40LTcxLjMsNzIuOS03MS4zLDEyNC41SDQxMS4xeiIvPgoJCQkJPGc+CgkJCQkJPGc+CgkJCQkJCTxnPgoJCQkJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE0MDEuNiwxNDA1LjdsLTk5LjEsMjcyYy0yLjUsNy40LTIuNSwxNS42LDAsMjMuOGwxNzAuNCw0NjcuOGwxOTcuNC0xMTMuOWwtMjM2LjgtNjQ5LjYKCQkJCQkJCQlDMTQyNy44LDEzOTAuOSwxNDA3LjMsMTM5MC45LDE0MDEuNiwxNDA1Ljd6Ii8+CgkJCQkJCTwvZz4KCQkJCQkJPGc+CgkJCQkJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTYwMC42LDk0OC41Yy01LjctMTQuNy0yNi4yLTE0LjctMzEuOSwwbC05OS4xLDI3MmMtMi41LDcuNC0yLjUsMTUuNiwwLDIzLjhsMjc5LjQsNzY2bDE5Ny40LTExMy45CgkJCQkJCQkJbC0zNDUuNy05NDdWOTQ4LjV6Ii8+CgkJCQkJCTwvZz4KCQkJCQk8L2c+CgkJCQk8L2c+CgkJCQk8Zz4KCQkJCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTI1MCwzNTNjNC45LDAsOS44LDEuNiwxMy45LDQuMWw3NTIsNDM0LjJjOSw0LjksMTMuOSwxNC43LDEzLjksMjQuNnY4NjguNGMwLDkuOC01LjcsMTkuNy0xMy45LDI0LjYKCQkJCQkJbC03NTIsNDM0LjJjLTQuMSwyLjUtOSw0LjEtMTMuOSw0LjFzLTkuOC0xLjYtMTMuOS00LjFsLTc1Mi00MzQuMmMtOS00LjktMTMuOS0xNC43LTEzLjktMjQuNlY4MTVjMC05LjgsNS43LTE5LjcsMTMuOS0yNC42CgkJCQkJCWw3NTItNDM0LjJjNC4xLTIuNSw5LTQuMSwxMy45LTQuMWwwLDBWMzUzeiBNMTI1MCwyMjZjLTI3LDAtNTMuMiw2LjYtNzcuOCwyMC41bC03NTIsNDM0LjJjLTQ4LjMsMjcuOS03Ny44LDc4LjYtNzcuOCwxMzQuNAoJCQkJCQl2ODY4LjRjMCw1NS43LDI5LjUsMTA2LjUsNzcuOCwxMzQuNGw3NTIsNDM0LjJjMjMuOCwxMy45LDUwLjgsMjAuNSw3Ny44LDIwLjVzNTMuMi02LjYsNzcuOC0yMC41bDc1Mi00MzQuMgoJCQkJCQljNDguMy0yNy45LDc3LjgtNzguNiw3Ny44LTEzNC40VjgxNWMwLTU1LjctMjkuNS0xMDYuNS03Ny44LTEzNC40TDEzMjcsMjQ2LjVjLTIzLjgtMTMuOS01MC44LTIwLjUtNzcuOC0yMC41bDAsMEgxMjUweiIvPgoJCQkJPC9nPgoJCQkJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI3NTEuOSwyMDExIDgyMS42LDE4MjEgOTYwLjgsMTkzNi41IDgzMC42LDIwNTYuMSAJCQkJIi8+CgkJCQk8Zz4KCQkJCQk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTE4Ni4xLDc1My42SDk5NS4yYy0xMy45LDAtMjcsOS0zMS45LDIyLjFMNTU0LjUsMTg5Ni40bDE5Ny40LDExMy45bDQ1MC42LTEyMzQuNgoJCQkJCQljNC4xLTExLjUtNC4xLTIyLjktMTUuNi0yMi45TDExODYuMSw3NTMuNnoiLz4KCQkJCQk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTUyMC4zLDc1My42aC0xOTAuOWMtMTMuOSwwLTI3LDktMzEuOSwyMi4xbC00NjcsMTI3OS42bDE5Ny40LDExMy45bDUwNy45LTEzOTMuNQoJCQkJCQljNC4xLTExLjUtNC4xLTIyLjktMTUuNi0yMi45Vjc1My42eiIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=';

  var arbitrum = {
    name: 'arbitrum',
    id: '0xa4b1',
    networkId: '42161',
    namespace: 'eip155',
    platform: 'evm',
    label: 'Arbitrum',
    fullName: 'Arbitrum One',
    logo: logo$4,
    logoBackgroundColor: '#2b354d',
    logoWhiteBackground: logo$4,
    currency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: ethereum.currency.logo,
    },
    wrapped: {
      address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      logo: ethereum.wrapped.logo,
    },
    stables: { // max. 3 per fiat currency
      usd: ['0xaf88d065e77c8cC2239327C5EDb3A432268e5831', '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1']
    },
    explorer: 'https://arbiscan.io',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://arbiscan.io/tx/${transaction.id || transaction}` }
      if(token) { return `https://arbiscan.io/token/${token}` }
      if(address) { return `https://arbiscan.io/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://arbitrum.blockpi.network/v1/rpc/public',
      'https://arbitrum-one.publicnode.com',
      'https://endpoints.omniatech.io/v1/arbitrum/one/public'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.currency.logo, "type": "NATIVE"},
      {"address": "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
      {"address": "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8/logo.png", "type": "20"},
      {"address": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/logo.png", "type": "20"},
      {"address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1/logo.png", "type": "20"},
      {"address": "0x912CE59144191C1204E64559FE8253a0e49E6548", "symbol": "ARB", "name": "Arbitrum", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$3 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNTAzIDE1MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE1MDMgMTUwNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTM4LjcsMTA1MC45SDM5Mi45Yy0zMC42LDAtNDUuOCwwLTU1LTUuOWMtMTAtNi41LTE2LjEtMTcuMi0xNi44LTI5Yy0wLjYtMTAuOSw3LTI0LjIsMjIuMS01MC43bDM1OS45LTYzNC4zCgljMTUuMy0yNi45LDIzLjEtNDAuNCwzMi44LTQ1LjRjMTAuNS01LjMsMjMuMS01LjMsMzMuNiwwYzkuOCw1LDE3LjUsMTguNCwzMi44LDQ1LjRsNzQsMTI5LjFsMC40LDAuNwoJYzE2LjUsMjguOSwyNC45LDQzLjYsMjguNiw1OC45YzQuMSwxNi44LDQuMSwzNC41LDAsNTEuM2MtMy43LDE1LjUtMTIsMzAuMy0yOC44LDU5LjZsLTE4OSwzMzQuMmwtMC41LDAuOQoJYy0xNi42LDI5LjEtMjUuMSw0My45LTM2LjgsNTVjLTEyLjcsMTIuMi0yOCwyMS00NC44LDI2QzU5MC4yLDEwNTAuOSw1NzMsMTA1MC45LDUzOC43LDEwNTAuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTkwNi44LDEwNTAuOWgyMDguOGMzMC44LDAsNDYuMywwLDU1LjUtNi4xYzEwLTYuNSwxNi4yLTE3LjMsMTYuOC0yOS4yYzAuNS0xMC41LTYuOS0yMy4zLTIxLjQtNDguMwoJYy0wLjUtMC45LTEtMS43LTEuNS0yLjZsLTEwNC42LTE3OWwtMS4yLTJjLTE0LjctMjQuOS0yMi4xLTM3LjQtMzEuNy00Mi4zYy0xMC41LTUuNC0yMi45LTUuNC0zMy40LDBjLTkuNiw1LTE3LjMsMTguMS0zMi43LDQ0LjUKCWwtMTA0LjIsMTc5bC0wLjQsMC42Yy0xNS4zLDI2LjMtMjIuOSwzOS41LTIyLjMsNTAuM2MwLjcsMTEuOCw2LjgsMjIuNywxNi44LDI5LjFDODYwLjQsMTA1MC45LDg3NS45LDEwNTAuOSw5MDYuOCwxMDUwLjl6Ii8+Cjwvc3ZnPgo=';
  const currencyLogo$1 = "https://traderjoexyz.com/static/media/avalanche.7c81486190237e87e238c029fd746008.svg";
  const wrappedLogo$1 = "https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/logo.png";

  var avalanche = {
    name: 'avalanche',
    id: '0xa86a',
    networkId: '43114',
    namespace: 'eip155',
    platform: 'evm',
    label: 'Avalanche',
    fullName: 'Avalanche C-Chain',
    logo: logo$3,
    logoBackgroundColor: '#E84142',
    logoWhiteBackground: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMyIgaGVpZ2h0PSIxNTA0IiB2aWV3Qm94PSIwIDAgMTUwMyAxNTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIyODciIHk9IjI1OCIgd2lkdGg9IjkyOCIgaGVpZ2h0PSI4NDQiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUwMi41IDc1MkMxNTAyLjUgMTE2Ni43NyAxMTY2LjI3IDE1MDMgNzUxLjUgMTUwM0MzMzYuNzM0IDE1MDMgMC41IDExNjYuNzcgMC41IDc1MkMwLjUgMzM3LjIzNCAzMzYuNzM0IDEgNzUxLjUgMUMxMTY2LjI3IDEgMTUwMi41IDMzNy4yMzQgMTUwMi41IDc1MlpNNTM4LjY4OCAxMDUwLjg2SDM5Mi45NEMzNjIuMzE0IDEwNTAuODYgMzQ3LjE4NiAxMDUwLjg2IDMzNy45NjIgMTA0NC45NkMzMjcuOTk5IDEwMzguNSAzMjEuOTExIDEwMjcuOCAzMjEuMTczIDEwMTUuOTlDMzIwLjYxOSAxMDA1LjExIDMyOC4xODQgOTkxLjgyMiAzNDMuMzEyIDk2NS4yNTVMNzAzLjE4MiAzMzAuOTM1QzcxOC40OTUgMzAzLjk5OSA3MjYuMjQzIDI5MC41MzEgNzM2LjAyMSAyODUuNTVDNzQ2LjUzNyAyODAuMiA3NTkuMDgzIDI4MC4yIDc2OS41OTkgMjg1LjU1Qzc3OS4zNzcgMjkwLjUzMSA3ODcuMTI2IDMwMy45OTkgODAyLjQzOCAzMzAuOTM1TDg3Ni40MiA0NjAuMDc5TDg3Ni43OTcgNDYwLjczOEM4OTMuMzM2IDQ4OS42MzUgOTAxLjcyMyA1MDQuMjg5IDkwNS4zODUgNTE5LjY2OUM5MDkuNDQzIDUzNi40NTggOTA5LjQ0MyA1NTQuMTY5IDkwNS4zODUgNTcwLjk1OEM5MDEuNjk1IDU4Ni40NTUgODkzLjM5MyA2MDEuMjE1IDg3Ni42MDQgNjMwLjU0OUw2ODcuNTczIDk2NC43MDJMNjg3LjA4NCA5NjUuNTU4QzY3MC40MzYgOTk0LjY5MyA2NjEuOTk5IDEwMDkuNDYgNjUwLjMwNiAxMDIwLjZDNjM3LjU3NiAxMDMyLjc4IDYyMi4yNjMgMTA0MS42MyA2MDUuNDc0IDEwNDYuNjJDNTkwLjE2MSAxMDUwLjg2IDU3My4wMDQgMTA1MC44NiA1MzguNjg4IDEwNTAuODZaTTkwNi43NSAxMDUwLjg2SDExMTUuNTlDMTE0Ni40IDEwNTAuODYgMTE2MS45IDEwNTAuODYgMTE3MS4xMyAxMDQ0Ljc4QzExODEuMDkgMTAzOC4zMiAxMTg3LjM2IDEwMjcuNDMgMTE4Ny45MiAxMDE1LjYzQzExODguNDUgMTAwNS4xIDExODEuMDUgOTkyLjMzIDExNjYuNTUgOTY3LjMwN0MxMTY2LjA1IDk2Ni40NTUgMTE2NS41NSA5NjUuNTg4IDExNjUuMDQgOTY0LjcwNkwxMDYwLjQzIDc4NS43NUwxMDU5LjI0IDc4My43MzVDMTA0NC41NCA3NTguODc3IDEwMzcuMTIgNzQ2LjMyNCAxMDI3LjU5IDc0MS40NzJDMTAxNy4wOCA3MzYuMTIxIDEwMDQuNzEgNzM2LjEyMSA5OTQuMTk5IDc0MS40NzJDOTg0LjYwNSA3NDYuNDUzIDk3Ni44NTcgNzU5LjU1MiA5NjEuNTQ0IDc4NS45MzRMODU3LjMwNiA5NjQuODkxTDg1Ni45NDkgOTY1LjUwN0M4NDEuNjkgOTkxLjg0NyA4MzQuMDY0IDEwMDUuMDEgODM0LjYxNCAxMDE1LjgxQzgzNS4zNTIgMTAyNy42MiA4NDEuNDQgMTAzOC41IDg1MS40MDIgMTA0NC45NkM4NjAuNDQzIDEwNTAuODYgODc1Ljk0IDEwNTAuODYgOTA2Ljc1IDEwNTAuODZaIiBmaWxsPSIjRTg0MTQyIi8+Cjwvc3ZnPgo=',
    currency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: currencyLogo$1,
    },
    wrapped: {
      address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      logo: wrappedLogo$1,
    },
    stables: { // max. 3 per fiat currency
      usd: ['0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7', '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70']
    },
    explorer: 'https://snowtrace.io',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://snowtrace.io/tx/${transaction.id || transaction}` }
      if(token) { return `https://snowtrace.io/token/${token}` }
      if(address) { return `https://snowtrace.io/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://avalanche.public-rpc.com',
      'https://avalanche.blockpi.network/v1/rpc/public',
      'https://avax.meowrpc.com'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "AVAX", "name": "Avalanche", "decimals": 18, "logo": currencyLogo$1, "type": "NATIVE"},
      {"address": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", "symbol": "WAVAX", "name": "Wrapped AVAX", "decimals": 18, "logo": wrappedLogo$1, "type": "20"},
      {"address": "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7/logo.png", "type": "20"},
      {"address": "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E/logo.png", "type": "20"},
      {"address": "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70/logo.png", "type": "20"},
      {"address": "0xC891EB4cbdEFf6e073e859e987815Ed1505c2ACD", "symbol": "EUROC", "name": "EURO Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0xC891EB4cbdEFf6e073e859e987815Ed1505c2ACD/logo.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$2 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOnhvZG09Imh0dHA6Ly93d3cuY29yZWwuY29tL2NvcmVsZHJhdy9vZG0vMjAwMyIKCSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI1MDAgMjUwMCIKCSBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgoJPGcgaWQ9Il8yMjM0NDYzMDM5NzQ0Ij4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODQ5LDEzODQuN2M1Ni4xLDAsMTEwLjYtMTguNywxNTUtNTIuOUw2NDguOSw5NzYuN2MtODUuNywxMTAuNi02NS40LDI2OS40LDQ1LjIsMzU1LjEKCQkJYzQ0LjQsMzMuNSw5OC45LDUyLjIsMTU1LDUyLjJsMCwwVjEzODQuN3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTkwNC4xLDExMzEuNmMwLTU2LjEtMTguNy0xMTAuNi01Mi45LTE1NWwtMzU1LjEsMzU1LjFjMTEwLjYsODUuNywyNjkuNCw2NS40LDM1NS4xLTQ1LjIKCQkJQzE4ODUuNCwxMjQyLjIsMTkwNC4xLDExODcuNywxOTA0LjEsMTEzMS42eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMDgzLjEsNzQ1LjRsLTE1Ny4zLDE1Ny4zYzEyNi4xLDE1MS44LDEwNi43LDM3Ni45LTQ1LjIsNTAzLjhjLTEzMy4xLDExMS4zLTMyNS41LDExMS4zLTQ1OC42LDAKCQkJTDEyNTAsMTU3OC42bC0xNzIuMS0xNzIuMWMtMTUxLjgsMTI2LjEtMzc2LjksMTA2LjctNTAzLjgtNDUuMmMtMTExLjMtMTMzLjEtMTExLjMtMzI1LjUsMC00NTguNmwtODAuMi04MC4ybC03Ni4zLTc3LjEKCQkJQzMyNSw4OTcuMywyNzYuNywxMDcxLjcsMjc2LjcsMTI1MGMwLDUzNy4zLDQzNiw5NzMuMyw5NzMuMyw5NzMuM3M5NzMuMy00MzYsOTczLjMtOTczLjMKCQkJQzIyMjQuMSwxMDcyLjUsMjE3NC4zLDg5Ny4zLDIwODMuMSw3NDUuNHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTk1My45LDU3OGMtMzcwLjYtMzg4LjUtOTg2LjUtNDAzLjMtMTM3NS4xLTMyLjdjLTExLjcsMTAuOS0yMi42LDIxLjgtMzIuNywzMi43CgkJCWMtMjQuMSwyNS43LTQ2LjcsNTIuMi02OC41LDc5LjRsNzcyLjQsNzcyLjRsNzcyLjQtNzcyLjRDMjAwMS40LDYyOS40LDE5NzgsNjAyLjksMTk1My45LDU3OHogTTEyNTAsNDAzLjYKCQkJYzIyNy40LDAsNDM5LjIsODgsNTk4LjgsMjQ3LjZMMTI1MCwxMjUwTDY1MS4yLDY1MS4yQzgxMC4xLDQ5MC44LDEwMjIuNiw0MDMuNiwxMjUwLDQwMy42eiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=';
  const currencyLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAAC7CAMAAAAKTh9YAAAAYFBMVEVHcEz////////////////////////////////////j++ma6qVj5nsl5lAK4zpA6mXO79aD8Zyr87uCvq0J2TkItEkOhl4EeVsKzSwLrxMNtQpjsZG42dEeuxyF2oU6wzjPwJjeAAAACnRSTlMAEUB9r9j/YO+Kf6/iMwAABD1JREFUeAHU1EESQjEMAlBIAq33v7ArV7+OLss7AZOB4IDVI/kW0nQRf+Ca7QvNwg/s7VtpGJP8oPFNybdT4aidoPHEcYZn6ymnEEOjH8KPk0zeTI+DLacpfMhpxKTGnFtDB9o8/Jisw8uxh1/OtGIrYw9Ah9pEOVWhnaoxTvWCnErR2Z3rzX59JMYOAkEYXr1gRJfIzP1PalbOpZm2aEf+tcKnCCz7bS37si/7si/7si/7si/7srvRHAE5kJHdbV4wkn076Q9RMMLu04fYnceT/An9JnhMkr19Ezwvvvee73ieOL1dfdN15yQlwas2S7vbgTn4iLfaDO0emIPPeLtgZt+AOfhcQHJGdieYg88VLG9k98AUfG7gBRu7YAo+9wpeNLEnYAY+915wkIndQ4Xn9IajgoV9hwbP6b3iqGRhF5zH537VHi3swGl87tft3tB+Ap/7Z9lFhef0z3hndmjwnP4Z32qEAs/po4//Rwao8JzeC3hiMyeACs/ppnMCUlThOf3wxjurObAKz+kHNz5arT0CNHhO5zde7NZ8UYXn9N4K2Utnt8NzOsFL+Kuz2+EJneA5nduN8bmTWsXzKqNzuyX+FZ3rL43Sud0Un/txtV7KqNY+6Hq7Kb71Gxt0W7seX5od/Z6a+8BuGASCMMwraRK4103A9z9leq+Q3zCYC+h7oy7tbr6d4zGd2zme04Ed4AEd2AEe0Kmd4wGd2jke0Kmd4wGd2jke0Kmd4wGd2jke0Kmd4wGd2Tl+B+jQzvH7j/ThnNub4Xd7Rud2gLc9pyM7wO9sz+nEDvA7e8G/0vX2IeTan/DXPdWL+cwD/hl/c3r2lT2u7XbWk31aYt9vesp9yD5Xn1ZPx7svtNtMYwfX9/hqjwAvuq8awIufZwzgxc+RZgAvfn43gBe/N5lxPLAD+sTs2HgnS53jnS51jHfC1CneKVOHeCdNneGdNnWEd+LUCd6pUwd4p04d4J06dYB3tekAL64nSAAvr+PgeGYHdI6ndkDneGoHdI4HdkAvxw/V7IsiegU8sIdSejk+VbIvyumveBY8twdQh51A8PL691x8PBf3HRD8oO33QPhR2mfD8EnZ3wTxXthXRvFe18+H8anbPsqkOVfnnJ6DF/RmPdE5vs69aQiYnoH3rXuzXukcP6jmE3C8734uxAgfgSvM4+D4RcV37SmgZ+BT6/kz0yd6KT5+kcex9bel+fDPupXP+MOs8byl6esGYfRxbDPnanG0OVf+8ODeH9Ks5f+mE50vJlp37d23EQQhFATRr6Yg/4RPuSe9o6tmIni7gN2222677bbbbrvttttuu5sw/7EP1j7kfhO6m5Wbak90Jw7d54NeGsV9jb0y1B+f+P5qpHB08XvD8M4zrq9N7pqje/L8jj/twXa8XOl4uSoe4/363RnvlyOo/LE1R8JnZfywrB7pGLY0Xa/gV5AhY9e5oJHCAAAAAElFTkSuQmCC';
  const wrappedLogo = 'data:image/png;base64,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';

  var gnosis = {
    name: 'gnosis',
    id: '0x64',
    networkId: '100',
    namespace: 'eip155',
    label: 'Gnosis',
    fullName: 'Gnosis Chain',
    logo: logo$2,
    logoBackgroundColor: '#406958',
    logoWhiteBackground: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojM0U2OTU3O30KPC9zdHlsZT4KPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgoJPGcgaWQ9Il8yMjM0NDYzMDM5NzQ0Ij4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzM1LDE0MjNjNzIsMCwxNDItMjQsMTk5LTY4TDQ3OCw4OTljLTExMCwxNDItODQsMzQ2LDU4LDQ1NmM1Nyw0MywxMjcsNjcsMTk5LDY3bDAsMFYxNDIzeiI+PC9wYXRoPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMDkwLDEwOThjMC03Mi0yNC0xNDItNjgtMTk5bC00NTYsNDU2YzE0MiwxMTAsMzQ2LDg0LDQ1Ni01OEMyMDY2LDEyNDAsMjA5MCwxMTcwLDIwOTAsMTA5OHoiPjwvcGF0aD4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjMyMCw2MDJsLTIwMiwyMDJjMTYyLDE5NSwxMzcsNDg0LTU4LDY0N2MtMTcxLDE0My00MTgsMTQzLTU4OSwwbC0yMjEsMjIxbC0yMjEtMjIxICAgIGMtMTk1LDE2Mi00ODQsMTM3LTY0Ny01OGMtMTQzLTE3MS0xNDMtNDE4LDAtNTg5TDI3OSw3MDFsLTk4LTk5QzYyLDc5NywwLDEwMjEsMCwxMjUwYzAsNjkwLDU2MCwxMjUwLDEyNTAsMTI1MCAgICBzMTI1MC01NjAsMTI1MC0xMjUwQzI1MDEsMTAyMiwyNDM3LDc5NywyMzIwLDYwMnoiPjwvcGF0aD4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjE1NCwzODdDMTY3OC0xMTIsODg3LTEzMSwzODgsMzQ1Yy0xNSwxNC0yOSwyOC00Miw0MmMtMzEsMzMtNjAsNjctODgsMTAybDk5Miw5OTJsOTkyLTk5MiAgICBDMjIxNSw0NTMsMjE4NSw0MTksMjE1NCwzODd6IE0xMjUwLDE2M2MyOTIsMCw1NjQsMTEzLDc2OSwzMThsLTc2OSw3NjlMNDgxLDQ4MUM2ODUsMjc1LDk1OCwxNjMsMTI1MCwxNjN6Ij48L3BhdGg+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==',
    currency: {
      name: 'xDAI',
      symbol: 'xDAI',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: currencyLogo,
    },
    wrapped: {
      address: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
      logo: wrappedLogo,
    },
    stables: { // max. 3 per fiat currency
      usd: ['0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', '0x4ECaBa5870353805a9F068101A40E0f32ed605C6', '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83']
    },
    explorer: 'https://gnosisscan.io',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://gnosisscan.io/tx/${transaction.id || transaction}` }
      if(token) { return `https://gnosisscan.io/token/${token}` }
      if(address) { return `https://gnosisscan.io/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://rpc.gnosis.gateway.fm',
      'https://rpc.gnosischain.com',
      'https://gnosis.blockpi.network/v1/rpc/public'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "xDAI", "name": "xDAI", "decimals": 18, "logo": currencyLogo, "type": "NATIVE"},
      {"address": "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d", "symbol": "WXDAI", "name": "Wrapped XDAI", "decimals": 18, "logo": wrappedLogo, "type": "20"},
      {"address": "0x4ECaBa5870353805a9F068101A40E0f32ed605C6", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png', "type": "20"},
      {"address": "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png', "type": "20"},
      {"address": "0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb", "symbol": "GNO", "name": "Gnosis", "decimals": 18, "logo": 'https://cdn.sushi.com/image/upload/f_auto,c_limit,w_16,q_auto/tokens/100/0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb.jpg', "type": "20"},
      {"address": "0xD057604A14982FE8D88c5fC25Aac3267eA142a08", "symbol": "HOPR", "name": "HOPR", "decimals": 18, "logo": 'https://hoprnet.org/assets/icons/hopr_icon.svg', "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$1 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MCA1MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAgNTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI1LjEsMjEuNWMtMC4yLTAuNi0wLjUtMS4yLTEtMS42Yy0wLjUtMC40LTEtMC44LTEuNy0xYy0wLjctMC4yLTEuNC0wLjMtMi4yLTAuM2MtMS44LDAtMy4zLDAuNC00LjQsMS4zCgljLTEuMSwwLjktMS44LDIuMi0yLjMsMy45Yy0wLjEsMC42LTAuMywxLjEtMC40LDEuN2MtMC4xLDAuNS0wLjIsMS4xLTAuMywxLjZjLTAuMSwwLjktMC4xLDEuNiwwLjEsMi4zYzAuMiwwLjYsMC41LDEuMiwxLDEuNgoJYzAuNSwwLjQsMSwwLjgsMS43LDFjMC43LDAuMiwxLjQsMC4zLDIuMiwwLjNjMS44LDAsMy4zLTAuNCw0LjQtMS4zYzEuMS0wLjksMS44LTIuMiwyLjMtMy45YzAuMS0wLjUsMC4yLTEuMSwwLjQtMS42CgljMC4xLTAuNSwwLjItMS4xLDAuMy0xLjdDMjUuMywyMi45LDI1LjMsMjIuMSwyNS4xLDIxLjV6IE0yMS42LDIzLjhjLTAuMSwwLjUtMC4yLDEtMC4zLDEuNWMtMC4xLDAuNS0wLjIsMS0wLjQsMS42CgljLTAuMiwwLjktMC42LDEuNS0xLjEsMS45Yy0wLjUsMC40LTEuMSwwLjYtMS44LDAuNmMtMC43LDAtMS4yLTAuMi0xLjUtMC42Yy0wLjMtMC40LTAuNC0xLjEtMC4yLTEuOWMwLjEtMC42LDAuMi0xLjEsMC4zLTEuNgoJYzAuMS0wLjUsMC4yLTEsMC40LTEuNWMwLjItMC45LDAuNi0xLjUsMS4xLTEuOWMwLjUtMC40LDEuMS0wLjYsMS44LTAuNmMwLjcsMCwxLjIsMC4yLDEuNSwwLjZDMjEuNywyMi4zLDIxLjgsMjIuOSwyMS42LDIzLjh6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zOC4zLDIxLjJjLTAuMi0wLjYtMC41LTEtMC45LTEuNGMtMC40LTAuNC0wLjktMC42LTEuNi0wLjhjLTAuNi0wLjItMS4zLTAuMy0yLjEtMC4zaC01LjEKCWMtMC4xLDAtMC4yLDAtMC40LDAuMWMtMC4xLDAuMS0wLjIsMC4yLTAuMiwwLjNsLTIuNiwxMi40YzAsMC4xLDAsMC4zLDAuMSwwLjNjMC4xLDAuMSwwLjIsMC4xLDAuMywwLjFoMi42YzAuMSwwLDAuMywwLDAuNC0wLjEKCWMwLjEtMC4xLDAuMi0wLjIsMC4yLTAuM2wwLjktNC4yaDIuNmMxLjYsMCwyLjktMC4zLDMuOS0xYzEtMC43LDEuNi0xLjgsMS45LTMuMkMzOC41LDIyLjQsMzguNSwyMS43LDM4LjMsMjEuMnogTTM0LjgsMjMuMQoJYy0wLjEsMC42LTAuNCwxLTAuOCwxLjNjLTAuNCwwLjMtMC45LDAuNC0xLjQsMC40aC0yLjJsMC43LTMuNGgyLjNjMC41LDAsMC44LDAuMSwxLDAuMmMwLjIsMC4yLDAuNCwwLjQsMC40LDAuNgoJQzM0LjksMjIuNCwzNC45LDIyLjcsMzQuOCwyMy4xeiIvPgo8L3N2Zz4K';

  var optimism = {
    name: 'optimism',
    id: '0xa',
    networkId: '10',
    namespace: 'eip155',
    label: 'Optimism',
    fullName: 'Optimism',
    logo: logo$1,
    logoBackgroundColor: '#FF0420',
    logoWhiteBackground: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUgNTBDMzguODA3MSA1MCA1MCAzOC44MDcxIDUwIDI1QzUwIDExLjE5MjkgMzguODA3MSAwIDI1IDBDMTEuMTkyOSAwIDAgMTEuMTkyOSAwIDI1QzAgMzguODA3MSAxMS4xOTI5IDUwIDI1IDUwWk0xNS41OTEgMzEuODY3QzE2LjI3NSAzMi4wODIzIDE3LjAxNiAzMi4xOSAxNy44MTQgMzIuMTlDMTkuNjUwNyAzMi4xOSAyMS4xMTM3IDMxLjc2NTcgMjIuMjAzIDMwLjkxN0MyMy4yOTIzIDMwLjA1NTcgMjQuMDUyMyAyOC43NTczIDI0LjQ4MyAyNy4wMjJDMjQuNjA5NyAyNi40NzczIDI0LjczIDI1LjkzMjcgMjQuODQ0IDI1LjM4OEMyNC45NzA3IDI0Ljg0MzMgMjUuMDc4MyAyNC4yOTIzIDI1LjE2NyAyMy43MzVDMjUuMzE5IDIyLjg3MzcgMjUuMjkzNyAyMi4xMiAyNS4wOTEgMjEuNDc0QzI0LjkwMSAyMC44MjggMjQuNTY1MyAyMC4yODMzIDI0LjA4NCAxOS44NEMyMy42MTUzIDE5LjM5NjcgMjMuMDM5IDE5LjA2NzMgMjIuMzU1IDE4Ljg1MkMyMS42ODM3IDE4LjYyNCAyMC45NDkgMTguNTEgMjAuMTUxIDE4LjUxQzE4LjMwMTcgMTguNTEgMTYuODMyMyAxOC45NTMzIDE1Ljc0MyAxOS44NEMxNC42NTM3IDIwLjcyNjcgMTMuOSAyMi4wMjUgMTMuNDgyIDIzLjczNUMxMy4zNTUzIDI0LjI5MjMgMTMuMjI4NyAyNC44NDMzIDEzLjEwMiAyNS4zODhDMTIuOTg4IDI1LjkzMjcgMTIuODgwMyAyNi40NzczIDEyLjc3OSAyNy4wMjJDMTIuNjM5NyAyNy44ODMzIDEyLjY2NSAyOC42MzcgMTIuODU1IDI5LjI4M0MxMy4wNTc3IDI5LjkyOSAxMy4zOTMzIDMwLjQ2NzMgMTMuODYyIDMwLjg5OEMxNC4zMzA3IDMxLjMyODcgMTQuOTA3IDMxLjY1MTcgMTUuNTkxIDMxLjg2N1pNMTkuODY2IDI4Ljg0NkMxOS4zNDY3IDI5LjI1MTMgMTguNzQ1IDI5LjQ1NCAxOC4wNjEgMjkuNDU0QzE3LjM2NDMgMjkuNDU0IDE2Ljg2NCAyOS4yNTEzIDE2LjU2IDI4Ljg0NkMxNi4yNTYgMjguNDQwNyAxNi4xOCAyNy43OTQ3IDE2LjMzMiAyNi45MDhDMTYuNDMzMyAyNi4zNTA3IDE2LjUzNDcgMjUuODI1IDE2LjYzNiAyNS4zMzFDMTYuNzUgMjQuODM3IDE2Ljg3NjcgMjQuMzI0IDE3LjAxNiAyMy43OTJDMTcuMjMxMyAyMi45MDUzIDE3LjU5MjMgMjIuMjU5MyAxOC4wOTkgMjEuODU0QzE4LjYxODMgMjEuNDQ4NyAxOS4yMiAyMS4yNDYgMTkuOTA0IDIxLjI0NkMyMC41ODggMjEuMjQ2IDIxLjA4ODMgMjEuNDQ4NyAyMS40MDUgMjEuODU0QzIxLjcyMTcgMjIuMjU5MyAyMS43OTc3IDIyLjkwNTMgMjEuNjMzIDIzLjc5MkMyMS41NDQzIDI0LjMyNCAyMS40NDMgMjQuODM3IDIxLjMyOSAyNS4zMzFDMjEuMjI3NyAyNS44MjUgMjEuMTA3MyAyNi4zNTA3IDIwLjk2OCAyNi45MDhDMjAuNzUyNyAyNy43OTQ3IDIwLjM4NTMgMjguNDQwNyAxOS44NjYgMjguODQ2Wk0yNS42NDA0IDMxLjg2N0MyNS43MTY0IDMxLjk1NTcgMjUuODE3NyAzMiAyNS45NDQ0IDMySDI4LjUyODRDMjguNjY3NyAzMiAyOC43ODggMzEuOTU1NyAyOC44ODk0IDMxLjg2N0MyOS4wMDM0IDMxLjc3ODMgMjkuMDczIDMxLjY2NDMgMjkuMDk4NCAzMS41MjVMMjkuOTcyNCAyNy4zNjRIMzIuNTM3NEMzNC4xNzE0IDI3LjM2NCAzNS40Njk3IDI3LjAxNTcgMzYuNDMyNCAyNi4zMTlDMzcuNDA3NyAyNS42MjIzIDM4LjA1MzcgMjQuNTQ1NyAzOC4zNzA0IDIzLjA4OUMzOC41MjI0IDIyLjM1NDMgMzguNTE2IDIxLjcxNDcgMzguMzUxNCAyMS4xN0MzOC4xODY3IDIwLjYxMjcgMzcuODk1NCAyMC4xNTAzIDM3LjQ3NzQgMTkuNzgzQzM3LjA1OTQgMTkuNDE1NyAzNi41MzM3IDE5LjE0MzMgMzUuOTAwNCAxOC45NjZDMzUuMjc5NyAxOC43ODg3IDM0LjU4MyAxOC43IDMzLjgxMDQgMTguN0gyOC43NTY0QzI4LjYyOTcgMTguNyAyOC41MDk0IDE4Ljc0NDMgMjguMzk1NCAxOC44MzNDMjguMjgxNCAxOC45MjE3IDI4LjIxMTcgMTkuMDM1NyAyOC4xODY0IDE5LjE3NUwyNS41NjQ0IDMxLjUyNUMyNS41MzkgMzEuNjY0MyAyNS41NjQ0IDMxLjc3ODMgMjUuNjQwNCAzMS44NjdaTTMyLjY1MTQgMjQuNzQySDMwLjQ2NjRMMzEuMjA3NCAyMS4zNDFIMzMuNDg3NEMzMy45NDM0IDIxLjM0MSAzNC4yNzkgMjEuNDE3IDM0LjQ5NDQgMjEuNTY5QzM0LjcyMjQgMjEuNzIxIDM0Ljg1NTQgMjEuOTIzNyAzNC44OTM0IDIyLjE3N0MzNC45MzE0IDIyLjQzMDMgMzQuOTE4NyAyMi43MjE3IDM0Ljg1NTQgMjMuMDUxQzM0LjcyODcgMjMuNjIxIDM0LjQ1NjQgMjQuMDQ1MyAzNC4wMzg0IDI0LjMyNEMzMy42MzMgMjQuNjAyNyAzMy4xNzA3IDI0Ljc0MiAzMi42NTE0IDI0Ljc0MloiIGZpbGw9IiNGRjA0MjAiLz4KPC9zdmc+Cg==',
    currency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: ethereum.currency.logo,
    },
    wrapped: {
      address: '0x4200000000000000000000000000000000000006',
      logo: ethereum.wrapped.logo,
    },
    stables: { // max. 3 per fiat currency
      usd: ['0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1']
    },
    explorer: 'https://optimistic.etherscan.io',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://optimistic.etherscan.io/tx/${transaction.id || transaction}` }
      if(token) { return `https://optimistic.etherscan.io/token/${token}` }
      if(address) { return `https://optimistic.etherscan.io/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://optimism.blockpi.network/v1/rpc/public',
      'https://optimism.meowrpc.com',
      'https://optimism.publicnode.com'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.currency.logo, "type": "NATIVE"},
      {"address": "0x4200000000000000000000000000000000000006", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
      {"address": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x94b008aA00579c1307B0EF2c499aD98a8ce58e58/logo.png', "type": "20"},
      {"address": "0x7F5c764cBc14f9669B88837ca1490cCa17c31607", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x7F5c764cBc14f9669B88837ca1490cCa17c31607/logo.png', "type": "20"},
      {"address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png', "type": "20"},
      {"address": "0x4200000000000000000000000000000000000042", "symbol": "OP", "name": "Optimism", "decimals": 18, "logo": 'https://user-images.githubusercontent.com/1300064/219575413-d7990d69-1d21-44ef-a2b1-e9c682c79802.svg', "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMTEgMTExIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMTEgMTExOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01NC45LDkzLjdjMjEuNCwwLDM4LjgtMTcuMywzOC44LTM4LjdjMC0yMS40LTE3LjQtMzguNy0zOC44LTM4LjdjLTIwLjMsMC0zNywxNS42LTM4LjYsMzUuNGg1MS4ydjYuNUgxNi4zCglDMTgsNzguMSwzNC42LDkzLjcsNTQuOSw5My43eiIvPgo8L3N2Zz4K';

  var base = {
    name: 'base',
    id: '0x2105',
    networkId: '8453',
    namespace: 'eip155',
    label: 'Base',
    fullName: 'Base',
    logo,
    logoBackgroundColor: '#0052FF',
    logoWhiteBackground: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTExIiBoZWlnaHQ9IjExMSIgdmlld0JveD0iMCAwIDExMSAxMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01NC45MjEgMTEwLjAzNEM4NS4zNTkgMTEwLjAzNCAxMTAuMDM0IDg1LjQwMiAxMTAuMDM0IDU1LjAxN0MxMTAuMDM0IDI0LjYzMTkgODUuMzU5IDAgNTQuOTIxIDBDMjYuMDQzMiAwIDIuMzUyODEgMjIuMTcxNCAwIDUwLjM5MjNINzIuODQ2N1Y1OS42NDE2SDMuOTU2NWUtMDdDMi4zNTI4MSA4Ny44NjI1IDI2LjA0MzIgMTEwLjAzNCA1NC45MjEgMTEwLjAzNFoiIGZpbGw9IiMwMDUyRkYiLz4KPC9zdmc+Cg==',
    currency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: ethereum.currency.logo,
    },
    wrapped: {
      address: '0x4200000000000000000000000000000000000006',
      logo: ethereum.wrapped.logo,
    },
    stables: { // max. 3 per fiat currency
      usd: ['0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA', '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb']
    },
    explorer: 'https://basescan.org',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://basescan.org/tx/${transaction.id || transaction}` }
      if(token) { return `https://basescan.org/token/${token}` }
      if(address) { return `https://basescan.org/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://base.blockpi.network/v1/rpc/public',
      'https://base.meowrpc.com',
      'https://mainnet.base.org'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.currency.logo, "type": "NATIVE"},
      {"address": "0x4200000000000000000000000000000000000006", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
      {"address": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://ethereum-optimism.github.io/data/USDC/logo.png", "type": "20"},
      {"address": "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA", "symbol": "USDbC", "name": "USD Base Coin", "decimals": 6, "logo": "https://ethereum-optimism.github.io/data/USDC/logo.png", "type": "20"},
      {"address": "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const all = [
    ethereum,
    bsc,
    polygon,
    solana,
    fantom,
    arbitrum,
    avalanche,
    gnosis,
    optimism,
    base,
  ];

  const findById = function (id) {
    let fixedId = id;
    if (fixedId.match('0x0')) {
      // remove leading 0
      fixedId = fixedId.replace(/0x0+/, '0x');
    }
    let found = all.find((blockchain) => {
      return blockchain.id && blockchain.id.toLowerCase() == fixedId.toLowerCase()
    });
    return found
  };

  const findByNetworkId = function (networkId) {
    networkId = networkId.toString();
    let found = all.find((blockchain) => {
      return blockchain.networkId == networkId
    });
    return found
  };

  const findByName = function (name) {
    return all.find((blockchain) => {
      return blockchain.name == name
    })
  };

  var index = {
    ethereum,
    bsc,
    polygon,
    solana,
    fantom,
    arbitrum,
    avalanche,
    gnosis,
    optimism,
    base,
    
    all,
    findById,
    findByNetworkId,
    findByName,
  };

  return index;

})));
