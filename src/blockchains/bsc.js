const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOTIgMTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIgMTkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0YwQjkwQjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01OS43LDQ4LjZMOTYsMjcuN2wzNi4zLDIwLjlMMTE5LDU2LjNsLTIzLTEzbC0yMywxM0w1OS43LDQ4LjZ6IE0xMzIuMyw3NUwxMTksNjcuM0w5Niw4MC41TDczLDY3LjJMNTkuNyw3NQoJdjE1LjVsMjMsMTMuMnYyNi4zbDEzLjMsNy44bDEzLjMtNy44di0yNi4zbDIzLTEzLjJWNzV6IE0xMzIuMywxMTd2LTE1LjVsLTEzLjMsNy43djE1LjVDMTE5LDEyNC42LDEzMi4zLDExNywxMzIuMywxMTd6CgkgTTE0MS43LDEyMi4zbC0yMywxMy4yVjE1MWwzNi4zLTIwLjlWODguMkwxNDEuNyw5NlYxMjIuM3ogTTEyOC40LDYxLjhsMTMuMyw3Ljh2MTUuNWwxMy4zLTcuOFY2MS44TDE0MS43LDU0TDEyOC40LDYxLjgKCUwxMjguNCw2MS44eiBNODIuNywxNDEuMnYxNS41bDEzLjMsNy44bDEzLjMtNy44di0xNS41TDk2LDE0OC44TDgyLjcsMTQxLjJ6IE01OS43LDExN2wxMy4zLDcuOHYtMTUuNmwtMTMuMy03LjdWMTE3TDU5LjcsMTE3egoJIE04Mi43LDYxLjhMOTYsNjkuNmwxMy4zLTcuOEw5Niw1NC4xQzk2LDU0LDgyLjcsNjEuOCw4Mi43LDYxLjhMODIuNyw2MS44eiBNNTAuMyw2OS42bDEzLjMtNy44TDUwLjMsNTRMMzcsNjEuOHYxNS41bDEzLjMsNy44CglWNjkuNkw1MC4zLDY5LjZ6IE01MC4zLDk1LjlMMzcsODguMnY0MS45TDczLjMsMTUxdi0xNS41bC0yMy0xMy4yVjk1LjlMNTAuMyw5NS45eiIvPgo8L3N2Zz4K'
const currencyLogo = "https://app.uniswap.org/static/media/bnb-logo.797868eb94521320b78e3967134febbe.svg"
const wrappedLogo = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png"

export default {
  name: 'bsc',
  id: '0x38',
  networkId: '56',
  namespace: 'eip155',
  platform: 'evm',
  label: 'BNB Smart Chain',
  fullName: 'BNB Smart Chain Mainnet',
  logo,
  logoBackgroundColor: '#000000',
  logoWhiteBackground: logo,
  currency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    logo: currencyLogo,
  },
  wrapped: {
    address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    logo: wrappedLogo,
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
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "BNB", "name": "Binance Coin", "decimals": 18, "logo": currencyLogo, "type": "NATIVE"},
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
}
