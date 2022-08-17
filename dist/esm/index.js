const logo$4 = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjgzLjUgMjgzLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4My41IDI4My41IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MXtmaWxsOiM4YzhjOGN9PC9zdHlsZT48Zz48Zz48cGF0aCBzdHlsZT0iZmlsbDojMzQzNDM0IiBkPSJtMTQxLjcgNTUtMS4xIDMuOXYxMTQuOGwxLjEgMS4xIDUzLjMtMzEuNXoiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJtMTQxLjcgNTUtNTMuMiA4OC4zIDUzLjIgMzEuNXYtNTUuN3oiLz48cGF0aCBzdHlsZT0iZmlsbDojM2MzYzNiIiBkPSJtMTQxLjcgMTg0LjktLjYuOHY0MC45bC42IDEuOSA1My4zLTc1LjF6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTE0MS43IDIyOC41di00My42bC01My4yLTMxLjV6Ii8+PHBhdGggc3R5bGU9ImZpbGw6IzE0MTQxNCIgZD0ibTE0MS43IDE3NC44IDUzLjMtMzEuNS01My4zLTI0LjJ6Ii8+PHBhdGggc3R5bGU9ImZpbGw6IzM5MzkzOSIgZD0ibTg4LjUgMTQzLjMgNTMuMiAzMS41di01NS43eiIvPjwvZz48L2c+PC9zdmc+Cg==';

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

const logo$3 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgMTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIgMTkyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNjIuOCA1Mi42IDk2IDMzLjVsMzMuMiAxOS4xLTEyLjIgNy0yMS0xMS45LTIxIDEyLTEyLjItNy4xem02Ni40IDI0LjItMTIuMi03LTIxIDEyLTIxLTEyLjEtMTIuMiA3LjFWOTFsMjEgMTIuMXYyNC4xbDEyLjIgNy4xIDEyLjItNy4xdi0yNC4xbDIxLTEyLjFWNzYuOHptMCAzOC40VjEwMWwtMTIuMiA3djE0LjJsMTIuMi03em04LjYgNC44LTIxIDEyLjF2MTQuMmwzMy4yLTE5LjFWODguOUwxMzcuOCA5NnYyNHptLTEyLjItNTUuMyAxMi4yIDcuMVY4NmwxMi4yLTcuMVY2NC43bC0xMi4yLTcuMS0xMi4yIDcuMXptLTQxLjggNzIuNnYxNC4ybDEyLjIgNy4xIDEyLjItNy4xdi0xNC4ybC0xMi4yIDctMTIuMi03em0tMjEtMjIuMSAxMi4yIDcuMVYxMDhsLTEyLjItN3YxNC4yem0yMS01MC41TDk2IDcxLjhsMTIuMi03LjEtMTIuMi03YzAtLjEtMTIuMiA3LTEyLjIgN3ptLTI5LjYgNy4xIDEyLjItNy4xLTEyLjItNy4xTDQyIDY0Ljd2MTQuMkw1NC4yIDg2VjcxLjh6bTAgMjQuMS0xMi4yLTd2MzguM2wzMy4yIDE5LjF2LTE0LjJsLTIxLTEyLjFWOTUuOXoiIHN0eWxlPSJmaWxsOiNmMGI5MGIiLz48L3N2Zz4=';

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

const logo$2 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTMwLjIgMTcuN2MtLjYtLjMtMS4zLS4zLTEuOCAwbC00LjMgMi41LTIuOSAxLjYtNC4yIDIuNWMtLjYuMy0xLjMuMy0xLjggMGwtMy4zLTJjLS41LS4zLS45LS45LS45LTEuNnYtMy44YzAtLjcuNC0xLjMuOS0xLjZsMy4zLTEuOWMuNi0uMyAxLjItLjMgMS44IDBsMy4zIDJjLjYuMy45LjkuOSAxLjZ2Mi41bDIuOS0xLjd2LTIuNmMwLS43LS4zLTEuMy0uOS0xLjZMMTcuMSAxMGMtLjYtLjMtMS4yLS4zLTEuOCAwTDkgMTMuN2MtLjYuMy0uOS45LS45IDEuNXY3LjFjMCAuNy4zIDEuMy45IDEuNmw2LjIgMy42Yy42LjMgMS4yLjMgMS44IDBsNC4yLTIuNCAyLjktMS43IDQuMi0yLjRjLjYtLjMgMS4zLS4zIDEuOCAwbDMuMyAxLjljLjYuMy45LjkuOSAxLjZ2My44YzAgLjctLjMgMS4zLS45IDEuNmwtMy4yIDEuOWMtLjYuMy0xLjIuMy0xLjggMGwtMy4zLTEuOWMtLjYtLjMtLjktLjktLjktMS42di0yLjRsLTIuOSAxLjd2Mi41YzAgLjcuMyAxLjMuOSAxLjZsNi4xIDMuNmMuNi4zIDEuMi4zIDEuOCAwbDYuMS0zLjZjLjYtLjMuOS0uOS45LTEuNnYtNy4yYzAtLjctLjMtMS4zLS45LTEuNmwtNi0zLjZ6IiBzdHlsZT0iZmlsbDojODI0N2U1Ii8+PC9zdmc+Cg==';

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

const logo$1 = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM5Ny43IDMxMS43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzOTcuNyAzMTEuNyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGxpbmVhckdyYWRpZW50IGlkPSJ3ZWIzX2Jsb2NrY2hhaW5zX3NvbGFuYV9ncmFkaWVudF8xIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI5MS44NTQiIHkxPSIxNC4zNTkiIHgyPSIxNjUuNzY4IiB5Mj0iMjU1Ljg2NiIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwIDMwLjUzNSkiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwZmZhMyIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I2RjMWZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTEyMS44IDIwMi45YzEuNC0xLjQgMy4zLTIuMiA1LjMtMi4yaDE4Mi4yYzMuMyAwIDUgNCAyLjYgNi40bC0zNiAzNmMtMS40IDEuNC0zLjMgMi4yLTUuMyAyLjJIODguNGMtMy4zIDAtNS00LTIuNi02LjRsMzYtMzZ6IiBzdHlsZT0iZmlsbDp1cmwoI3dlYjNfYmxvY2tjaGFpbnNfc29sYW5hX2dyYWRpZW50XzEpIi8+PGxpbmVhckdyYWRpZW50IGlkPSJ3ZWIzX2Jsb2NrY2hhaW5zX3NvbGFuYV9ncmFkaWVudF8yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIzNi43MjciIHkxPSItMTQuNDIyIiB4Mj0iMTEwLjY0MSIgeTI9IjIyNy4wODUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAzMC41MzUpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMGZmYTMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNkYzFmZmYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjd2ViM19ibG9ja2NoYWluc19zb2xhbmFfZ3JhZGllbnRfMikiIGQ9Ik0xMjEuOCA2OC42YzEuNC0xLjQgMy4zLTIuMiA1LjMtMi4yaDE4Mi4yYzMuMyAwIDUgNCAyLjYgNi40bC0zNiAzNmMtMS40IDEuNC0zLjMgMi4yLTUuMyAyLjJIODguNGMtMy4zIDAtNS00LTIuNi02LjRsMzYtMzZ6Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJ3ZWIzX2Jsb2NrY2hhaW5zX3NvbGFuYV9ncmFkaWVudF8zIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI2NC4xMTQiIHkxPSItLjEyMyIgeDI9IjEzOC4wMjgiIHkyPSIyNDEuMzgzIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzAuNTM1KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBmZmEzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojZGMxZmZmIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBzdHlsZT0iZmlsbDp1cmwoI3dlYjNfYmxvY2tjaGFpbnNfc29sYW5hX2dyYWRpZW50XzMpIiBkPSJNMjc1LjkgMTM1LjNjLTEuNC0xLjQtMy4zLTIuMi01LjMtMi4ySDg4LjRjLTMuMyAwLTUgNC0yLjYgNi40bDM2IDM2YzEuNCAxLjQgMy4zIDIuMiA1LjMgMi4yaDE4Mi4yYzMuMyAwIDUtNCAyLjYtNi40bC0zNi0zNnoiLz48L3N2Zz4K';

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
