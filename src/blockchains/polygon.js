const logo = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.4 45.4" style="enable-background:new 0 0 45.4 45.4" xml:space="preserve"><path d="M30.2 17.7c-.6-.3-1.3-.3-1.8 0l-4.3 2.5-2.9 1.6-4.2 2.5c-.6.3-1.3.3-1.8 0l-3.3-2c-.5-.3-.9-.9-.9-1.6v-3.8c0-.7.4-1.3.9-1.6l3.3-1.9c.6-.3 1.2-.3 1.8 0l3.3 2c.6.3.9.9.9 1.6v2.5l2.9-1.7v-2.6c0-.7-.3-1.3-.9-1.6L17.1 10c-.6-.3-1.2-.3-1.8 0L9 13.7c-.6.3-.9.9-.9 1.5v7.1c0 .7.3 1.3.9 1.6l6.2 3.6c.6.3 1.2.3 1.8 0l4.2-2.4 2.9-1.7 4.2-2.4c.6-.3 1.3-.3 1.8 0l3.3 1.9c.6.3.9.9.9 1.6v3.8c0 .7-.3 1.3-.9 1.6l-3.2 1.9c-.6.3-1.2.3-1.8 0l-3.3-1.9c-.6-.3-.9-.9-.9-1.6v-2.4l-2.9 1.7v2.5c0 .7.3 1.3.9 1.6l6.1 3.6c.6.3 1.2.3 1.8 0l6.1-3.6c.6-.3.9-.9.9-1.6v-7.2c0-.7-.3-1.3-.9-1.6l-6-3.6z" style="fill:#8247e5"/></svg>'

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
