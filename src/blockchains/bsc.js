const logo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgMTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIgMTkyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJtNTcuOSA0Ni4yIDM4LjEtMjIgMzguMSAyMS45LTE0IDguMUw5NiA0MC41IDcxLjkgNTQuM2wtMTQtOC4xek0xMzQuMSA3NGwtMTQtOC4xTDk2IDc5LjcgNzEuOSA2NS44bC0xNCA4LjF2MTYuM0w4MiAxMDQuMXYyNy43bDE0IDguMSAxNC04LjF2LTI3LjdsMjQuMS0xMy45Vjc0em0wIDQ0di0xNi4zbC0xNCA4LjF2MTYuM2wxNC04LjF6bTkuOSA1LjYtMjQuMSAxMy45djE2LjNsMzguMS0yMS45Vjg3LjhsLTE0IDguMXYyNy43em0tMTQtNjMuNSAxNCA4LjF2MTYuM2wxNC04LjFWNjAuMUwxNDQgNTJsLTE0IDguMXptLTQ4IDgzLjN2MTYuM2wxNCA4LjEgMTQtOC4xdi0xNi4zbC0xNCA4LjEtMTQtOC4xek01Ny45IDExOGwxNCA4LjF2LTE2LjNsLTE0LTguMVYxMTh6TTgyIDYwLjFsMTQgOC4xIDE0LTguMUw5NiA1MmMwLS4xLTE0IDguMS0xNCA4LjF6bS0zNCA4LjEgMTQtOC4xTDQ4IDUybC0xNCA4LjF2MTYuM2wxNCA4LjFWNjguMnptMCAyNy43LTE0LTguMXY0NGwzOC4xIDIxLjl2LTE2LjNMNDggMTIzLjVWOTUuOXoiIHN0eWxlPSJmaWxsOiNmMGI5MGIiLz48L3N2Zz4K'

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
  explorerUrlFor: ({ transaction, token })=>{
    if(transaction) { return `https://bscscan.com/tx/${transaction.id}` }
    if(token) { return `https://bscscan.com/token/${token}` }
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
