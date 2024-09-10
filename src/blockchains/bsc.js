const logo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yOTkuMyAyMzcuNSA1MDAgMTIybDIwMC43IDExNS41LTczLjUgNDIuNkw1MDAgMjA4LjJsLTEyNy4xIDcxLjktNzMuNi00Mi42em00MDEuNCAxNDYtNzMuNS00Mi42LTEyNy4xIDczTDM3MyAzNDAuNGwtNzMuNSA0My4xdjg1LjdsMTI3LjEgNzN2MTQ1LjRsNzMuNSA0My4xIDczLjUtNDMuMVY1NDIuMWwxMjcuMS03M3YtODUuNnptMCAyMzIuMXYtODUuN2wtNzMuNSA0Mi42djg1LjdjLS4xLS42IDczLjUtNDIuNiA3My41LTQyLjZ6bTUxLjkgMjkuMy0xMjcuMSA3M3Y4NS43TDgyNi4xIDY4OFY0NTYuNGwtNzMuNSA0My4xdjE0NS40em0tNzMuNS0zMzQuNCA3My41IDQzLjF2ODUuN2w3My41LTQzLjF2LTg1LjdsLTczLjUtNDMuMS03My41IDQzLjF6TTQyNi41IDc0OS40djg1LjdsNzMuNSA0My4xIDczLjUtNDMuMXYtODUuN2wtNzMuNSA0Mi03My41LTQyek0yOTkuMyA2MTUuNmw3My41IDQzLjF2LTg2LjJMMjk5LjMgNTMwdjg1LjZ6bTEyNy4yLTMwNS4xIDczLjUgNDMuMSA3My41LTQzLjEtNzMuNS00Mi42YzAtLjUtNzMuNSA0Mi42LTczLjUgNDIuNnptLTE3OS4xIDQzLjEgNzMuNS00My4xLTczLjUtNDMuMS03My41IDQzLjF2ODUuN2w3My41IDQzLjF2LTg1Ljd6bTAgMTQ1LjQtNzMuNS00Mi42VjY4OGwyMDAuNyAxMTUuNXYtODUuN2wtMTI3LjEtNzNjLS4xLjEtLjEtMTQ1LjgtLjEtMTQ1Ljh6IiBmaWxsPSIjZjBiOTBiIi8+PC9zdmc+'
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
  stables: { // max. 2 per fiat currency
    usd: ['0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', '0x55d398326f99059fF775485246999027B3197955']
  },
  explorer: 'https://bscscan.com',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://bscscan.com/tx/${transaction.id || transaction}` }
    if(token) { return `https://bscscan.com/token/${token}` }
    if(address) { return `https://bscscan.com/address/${address}` }
  },
  endpoints: [ // make sure provider supports batch size of 50 batch requests!
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
  permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3'
}
