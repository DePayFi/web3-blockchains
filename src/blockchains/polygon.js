const logo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTMwLjIgMTcuN2MtLjYtLjMtMS4zLS4zLTEuOCAwbC00LjMgMi41LTIuOSAxLjYtNC4yIDIuNWMtLjYuMy0xLjMuMy0xLjggMGwtMy4zLTJjLS41LS4zLS45LS45LS45LTEuNnYtMy44YzAtLjcuNC0xLjMuOS0xLjZsMy4zLTEuOWMuNi0uMyAxLjItLjMgMS44IDBsMy4zIDJjLjYuMy45LjkuOSAxLjZ2Mi41bDIuOS0xLjd2LTIuNmMwLS43LS4zLTEuMy0uOS0xLjZMMTcuMSAxMGMtLjYtLjMtMS4yLS4zLTEuOCAwTDkgMTMuN2MtLjYuMy0uOS45LS45IDEuNXY3LjFjMCAuNy4zIDEuMy45IDEuNmw2LjIgMy42Yy42LjMgMS4yLjMgMS44IDBsNC4yLTIuNCAyLjktMS43IDQuMi0yLjRjLjYtLjMgMS4zLS4zIDEuOCAwbDMuMyAxLjljLjYuMy45LjkuOSAxLjZ2My44YzAgLjctLjMgMS4zLS45IDEuNmwtMy4yIDEuOWMtLjYuMy0xLjIuMy0xLjggMGwtMy4zLTEuOWMtLjYtLjMtLjktLjktLjktMS42di0yLjRsLTIuOSAxLjd2Mi41YzAgLjcuMyAxLjMuOSAxLjZsNi4xIDMuNmMuNi4zIDEuMi4zIDEuOCAwbDYuMS0zLjZjLjYtLjMuOS0uOS45LTEuNnYtNy4yYzAtLjctLjMtMS4zLS45LTEuNmwtNi0zLjZ6IiBzdHlsZT0iZmlsbDojODI0N2U1Ii8+PC9zdmc+Cg=='

export default {
  name: 'polygon',
  id: '0x89',
  networkId: '137',
  label: 'Polygon',
  fullName: 'Polygon Mainnet',
  logo,
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
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "MATIC", "name": "Polygon", "decimals": 18, "logo": logo, "type": "NATIVE"},
    {"address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", "symbol": "WMATIC", "name": "Wrapped Matic", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png", "type": "20"},
    {"address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png", "type": "20"},
    {"address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
    {"address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
    {"address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1", "symbol": "miMATIC", "name": "miMATIC", "decimals": 18, "logo": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png", "type": "20"},
    {"address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
    {"address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png", "type": "20"}
  ]
}
