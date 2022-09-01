const logo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgMTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIgMTkyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNjIuOCA1Mi42IDk2IDMzLjVsMzMuMiAxOS4xLTEyLjIgNy0yMS0xMS45LTIxIDEyLTEyLjItNy4xem02Ni40IDI0LjItMTIuMi03LTIxIDEyLTIxLTEyLjEtMTIuMiA3LjFWOTFsMjEgMTIuMXYyNC4xbDEyLjIgNy4xIDEyLjItNy4xdi0yNC4xbDIxLTEyLjFWNzYuOHptMCAzOC40VjEwMWwtMTIuMiA3djE0LjJsMTIuMi03em04LjYgNC44LTIxIDEyLjF2MTQuMmwzMy4yLTE5LjFWODguOUwxMzcuOCA5NnYyNHptLTEyLjItNTUuMyAxMi4yIDcuMVY4NmwxMi4yLTcuMVY2NC43bC0xMi4yLTcuMS0xMi4yIDcuMXptLTQxLjggNzIuNnYxNC4ybDEyLjIgNy4xIDEyLjItNy4xdi0xNC4ybC0xMi4yIDctMTIuMi03em0tMjEtMjIuMSAxMi4yIDcuMVYxMDhsLTEyLjItN3YxNC4yem0yMS01MC41TDk2IDcxLjhsMTIuMi03LjEtMTIuMi03YzAtLjEtMTIuMiA3LTEyLjIgN3ptLTI5LjYgNy4xIDEyLjItNy4xLTEyLjItNy4xTDQyIDY0Ljd2MTQuMkw1NC4yIDg2VjcxLjh6bTAgMjQuMS0xMi4yLTd2MzguM2wzMy4yIDE5LjF2LTE0LjJsLTIxLTEyLjFWOTUuOXoiIHN0eWxlPSJmaWxsOiNmMGI5MGIiLz48L3N2Zz4='

export default {
  name: 'bsc',
  id: '0x38',
  networkId: '56',
  label: 'BNB Smart Chain',
  fullName: 'BNB Smart Chain Mainnet',
  logo,
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
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "BNB", "name": "Binance Coin", "decimals": 18, "logo": logo, "type": "NATIVE"},
    {"address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "symbol": "WBNB", "name": "Wrapped BNB", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png", "type": "20"},
    {"address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "symbol": "BUSD", "name": "BUSD Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png", "type": "20"},
    {"address": "0x55d398326f99059fF775485246999027B3197955", "symbol": "USDT", "name": "Tether USD", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png", "type": "20"},
    {"address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", "symbol": "USDC", "name": "USD Coin", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d/logo.png", "type": "20"},
    {"address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", "symbol": "ETH", "name": "Ethereum Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png", "type": "20"},
    {"address": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "symbol": "Cake", "name": "PancakeSwap Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png", "type": "20"},
    {"address": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", "symbol": "BTCB", "name": "BTCB Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png", "type": "20"}
  ]
}
