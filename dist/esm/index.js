var ethereum = {
  name: 'ethereum',
  id: '0x1',
  networkId: '1',
  label: 'Ethereum',
  fullName: 'Ethereum Mainnet',
  logo:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAxOSAoNjQtQml0KSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZlcnNpb249IjEuMSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIKdmlld0JveD0iMCAwIDc4NC4zNyAxMjc3LjM5IgogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiPgogPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+CiAgPGcgaWQ9Il8xNDIxMzk0MzQyNDAwIj4KICAgPGc+CiAgICA8cG9seWdvbiBmaWxsPSIjMzQzNDM0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iMzkyLjA3LDAgMzgzLjUsMjkuMTEgMzgzLjUsODczLjc0IDM5Mi4wNyw4ODIuMjkgNzg0LjEzLDY1MC41NCAiLz4KICAgIDxwb2x5Z29uIGZpbGw9IiM4QzhDOEMiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIzOTIuMDcsMCAtMCw2NTAuNTQgMzkyLjA3LDg4Mi4yOSAzOTIuMDcsNDcyLjMzICIvPgogICAgPHBvbHlnb24gZmlsbD0iIzNDM0MzQiIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjM5Mi4wNyw5NTYuNTIgMzg3LjI0LDk2Mi40MSAzODcuMjQsMTI2My4yOCAzOTIuMDcsMTI3Ny4zOCA3ODQuMzcsNzI0Ljg5ICIvPgogICAgPHBvbHlnb24gZmlsbD0iIzhDOEM4QyIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjM5Mi4wNywxMjc3LjM4IDM5Mi4wNyw5NTYuNTIgLTAsNzI0Ljg5ICIvPgogICAgPHBvbHlnb24gZmlsbD0iIzE0MTQxNCIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjM5Mi4wNyw4ODIuMjkgNzg0LjEzLDY1MC41NCAzOTIuMDcsNDcyLjMzICIvPgogICAgPHBvbHlnb24gZmlsbD0iIzM5MzkzOSIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjAsNjUwLjU0IDM5Mi4wNyw4ODIuMjkgMzkyLjA3LDQ3Mi4zMyAiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==',
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
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": "data:image/png;base64,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", "type": "NATIVE"},
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

var bsc = {
  name: 'bsc',
  id: '0x38',
  networkId: '56',
  label: 'BNB Smart Chain',
  fullName: 'BNB Smart Chain Mainnet',
  logo:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOTIgMTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIgMTkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0YwQjkwQjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00OS43LDM1LjRMOTYsOC43bDQ2LjMsMjYuN2wtMTcsOS45TDk2LDI4LjVMNjYuNyw0NS4zTDQ5LjcsMzUuNHogTTE0Mi4zLDY5LjJsLTE3LTkuOUw5Niw3Ni4yTDY2LjcsNTkuMwoJbC0xNyw5Ljl2MTkuOEw3OSwxMDUuOHYzMy43bDE3LDkuOWwxNy05Ljl2LTMzLjdsMjkuMy0xNi45TDE0Mi4zLDY5LjJ6IE0xNDIuMywxMjIuN3YtMTkuOGwtMTcsOS45djE5LjhMMTQyLjMsMTIyLjd6IE0xNTQuNCwxMjkuNgoJbC0yOS4zLDE2Ljl2MTkuOGw0Ni4zLTI2LjdWODZsLTE3LDkuOUwxNTQuNCwxMjkuNnogTTEzNy40LDUyLjNsMTcsOS45djE5LjhsMTctOS45VjUyLjNsLTE3LTkuOUwxMzcuNCw1Mi4zeiBNNzksMTUzLjd2MTkuOAoJbDE3LDkuOWwxNy05Ljl2LTE5LjhsLTE3LDkuOUw3OSwxNTMuN3ogTTQ5LjcsMTIyLjdsMTcsOS45di0xOS44bC0xNy05LjlMNDkuNywxMjIuN3ogTTc5LDUyLjNsMTcsOS45bDE3LTkuOWwtMTctOS45TDc5LDUyLjN6CgkgTTM3LjYsNjIuMmwxNy05LjlsLTE3LTkuOWwtMTcsOS45djE5LjhsMTcsOS45TDM3LjYsNjIuMnogTTM3LjYsOTUuOWwtMTctOS45djUzLjVsNDYuMywyNi43di0xOS44bC0yOS4zLTE2LjlWOTUuOXoiLz4KPC9zdmc+Cg==',
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
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "BNB", "name": "Binance Coin", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png", "type": "NATIVE"},
    {"address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "symbol": "WBNB", "name": "Wrapped BNB", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png", "type": "20"},
    {"address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "symbol": "BUSD", "name": "BUSD Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png", "type": "20"},
    {"address": "0x55d398326f99059fF775485246999027B3197955", "symbol": "USDT", "name": "Tether USD", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png", "type": "20"},
    {"address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", "symbol": "USDC", "name": "USD Coin", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d/logo.png", "type": "20"},
    {"address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", "symbol": "ETH", "name": "Ethereum Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png", "type": "20"},
    {"address": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "symbol": "Cake", "name": "PancakeSwap Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png", "type": "20"},
    {"address": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", "symbol": "BTCB", "name": "BTCB Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png", "type": "20"}
  ]
};

var polygon = {
  name: 'polygon',
  id: '0x89',
  networkId: '137',
  label: 'Polygon',
  fullName: 'Polygon Mainnet',
  logo:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzOC40IDMzLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4LjQgMzMuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4MjQ3RTU7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOSwxMC4yYy0wLjctMC40LTEuNi0wLjQtMi40LDBMMjEsMTMuNWwtMy44LDIuMWwtNS41LDMuM2MtMC43LDAuNC0xLjYsMC40LTIuNCwwTDUsMTYuMwoJCWMtMC43LTAuNC0xLjItMS4yLTEuMi0yLjF2LTVjMC0wLjgsMC40LTEuNiwxLjItMi4xbDQuMy0yLjVjMC43LTAuNCwxLjYtMC40LDIuNCwwTDE2LDcuMmMwLjcsMC40LDEuMiwxLjIsMS4yLDIuMXYzLjNsMy44LTIuMlY3CgkJYzAtMC44LTAuNC0xLjYtMS4yLTIuMWwtOC00LjdjLTAuNy0wLjQtMS42LTAuNC0yLjQsMEwxLjIsNUMwLjQsNS40LDAsNi4yLDAsN3Y5LjRjMCwwLjgsMC40LDEuNiwxLjIsMi4xbDguMSw0LjcKCQljMC43LDAuNCwxLjYsMC40LDIuNCwwbDUuNS0zLjJsMy44LTIuMmw1LjUtMy4yYzAuNy0wLjQsMS42LTAuNCwyLjQsMGw0LjMsMi41YzAuNywwLjQsMS4yLDEuMiwxLjIsMi4xdjVjMCwwLjgtMC40LDEuNi0xLjIsMi4xCgkJTDI5LDI4LjhjLTAuNywwLjQtMS42LDAuNC0yLjQsMGwtNC4zLTIuNWMtMC43LTAuNC0xLjItMS4yLTEuMi0yLjFWMjFsLTMuOCwyLjJ2My4zYzAsMC44LDAuNCwxLjYsMS4yLDIuMWw4LjEsNC43CgkJYzAuNywwLjQsMS42LDAuNCwyLjQsMGw4LjEtNC43YzAuNy0wLjQsMS4yLTEuMiwxLjItMi4xVjE3YzAtMC44LTAuNC0xLjYtMS4yLTIuMUwyOSwxMC4yeiIvPgo8L2c+Cjwvc3ZnPgo=',
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
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "MATIC", "name": "Polygon", "decimals": 18, "logo": "data:image/png;base64,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", "type": "NATIVE"},
    {"address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", "symbol": "WMATIC", "name": "Wrapped Matic", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png", "type": "20"},
    {"address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png", "type": "20"},
    {"address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
    {"address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
    {"address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1", "symbol": "miMATIC", "name": "miMATIC", "decimals": 18, "logo": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png", "type": "20"},
    {"address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
    {"address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png", "type": "20"}
  ]
};

var solana = {
  name: 'solana',
  networkId: 'mainnet-beta',
  label: 'Solana',
  fullName: 'Solana',
  logo:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzOTcuNyAzMTEuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzk3LjcgMzExLjc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9Cgkuc3Qxe2ZpbGw6dXJsKCNTVkdJRF8yXyk7fQoJLnN0MntmaWxsOnVybCgjU1ZHSURfM18pO30KPC9zdHlsZT4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzNjAuODc5MSIgeTE9IjM1MS40NTUzIiB4Mj0iMTQxLjIxMyIgeTI9Ii02OS4yOTM2IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMzE0KSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBGRkEzIi8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojREMxRkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02NC42LDIzNy45YzIuNC0yLjQsNS43LTMuOCw5LjItMy44aDMxNy40YzUuOCwwLDguNyw3LDQuNiwxMS4xbC02Mi43LDYyLjdjLTIuNCwyLjQtNS43LDMuOC05LjIsMy44SDYuNQoJYy01LjgsMC04LjctNy00LjYtMTEuMUw2NC42LDIzNy45eiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI2NC44MjkxIiB5MT0iNDAxLjYwMTQiIHgyPSI0NS4xNjMiIHkyPSItMTkuMTQ3NSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDMxNCkiPgoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwRkZBMyIvPgoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0RDMUZGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjQuNiwzLjhDNjcuMSwxLjQsNzAuNCwwLDczLjgsMGgzMTcuNGM1LjgsMCw4LjcsNyw0LjYsMTEuMWwtNjIuNyw2Mi43Yy0yLjQsMi40LTUuNywzLjgtOS4yLDMuOEg2LjUKCWMtNS44LDAtOC43LTctNC42LTExLjFMNjQuNiwzLjh6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfM18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzEyLjU0ODQiIHkxPSIzNzYuNjg4IiB4Mj0iOTIuODgyMiIgeTI9Ii00NC4wNjEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAzMTQpIj4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEZGQTMiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzFGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTMzMy4xLDEyMC4xYy0yLjQtMi40LTUuNy0zLjgtOS4yLTMuOEg2LjVjLTUuOCwwLTguNyw3LTQuNiwxMS4xbDYyLjcsNjIuN2MyLjQsMi40LDUuNywzLjgsOS4yLDMuOGgzMTcuNAoJYzUuOCwwLDguNy03LDQuNi0xMS4xTDMzMy4xLDEyMC4xeiIvPgo8L3N2Zz4K',
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
    {"address": "11111111111111111111111111111111", "symbol": "SOL", "name": "Solana", "decimals": 9, "logo": "https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png", "type": "NATIVE"},
    {"address": "So11111111111111111111111111111111111111112", "symbol": "WSOL", "name": "Wrapped SOL", "decimals": 9, "logo": "https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png", "type": "SPL"},
    {"address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://img.raydium.io/icon/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png", "type": "SPL"},
    {"address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "symbol": "USDT", "name": "USDT", "decimals": 6, "logo": "https://img.raydium.io/icon/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.png", "type": "SPL"}
  ]
};

var unknown = {
  id: 'unknown',
  name: 'unknown',
  label: 'Unknown',
  logo:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjgzLjUgMjgzLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4My41IDI4My41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxjaXJjbGUgZmlsbD0iI0YwRUZFRiIgY3g9IjE0MS43IiBjeT0iMTQxLjciIHI9IjE0MS43Ii8+CjxnPgoJPHBhdGggZmlsbD0iI0FCQUJBQiIgZD0iTTEyNywxNzUuMXYtNC40YzAtOC40LDEuMS0xNS4zLDMuNC0yMC43YzIuMy01LjQsNS4xLTEwLDguNC0xMy44YzMuMy0zLjcsNi42LTcsMTAuMS05LjdzNi4zLTUuNiw4LjYtOC41CgkJYzIuMy0yLjksMy40LTYuNCwzLjQtMTAuNWMwLTUtMS4xLTguNy0zLjMtMTEuMWMtMi4yLTIuNC01LTQtOC40LTQuOGMtMy40LTAuOC02LjktMS4zLTEwLjUtMS4zYy01LjgsMC0xMS44LDEtMTcuOSwyLjkKCQljLTYuMSwxLjktMTEuNSw0LjctMTYsOC40Vjc0YzIuMy0xLjcsNS40LTMuMyw5LjQtNC45YzQtMS42LDguNC0yLjksMTMuNC00YzUtMS4xLDEwLjEtMS42LDE1LjUtMS42YzguMSwwLDE1LjEsMS4xLDIxLjEsMy40CgkJYzYsMi4zLDEwLjgsNS41LDE0LjcsOS41YzMuOCw0LDYuNyw4LjcsOC42LDE0LjFjMS45LDUuMywyLjksMTEuMSwyLjksMTcuMmMwLDYuNi0xLjEsMTItMy40LDE2LjNjLTIuMyw0LjMtNS4xLDgtOC41LDExLjIKCQljLTMuNCwzLjItNi44LDYuNC0xMC4yLDkuNWMtMy40LDMuMS02LjMsNi44LTguNiwxMWMtMi4zLDQuMi0zLjQsOS41LTMuNCwxNS45djMuNEgxMjd6IE0xMjUuMiwyMTguMnYtMjcuN2gzM3YyNy43SDEyNS4yeiIvPgo8L2c+Cjwvc3ZnPgo='
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

export { Blockchain };
