export default {
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
}
