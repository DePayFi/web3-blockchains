const logo = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" style="enable-background:new 0 0 192 192" xml:space="preserve"><path d="m57.9 46.2 38.1-22 38.1 21.9-14 8.1L96 40.5 71.9 54.3l-14-8.1zM134.1 74l-14-8.1L96 79.7 71.9 65.8l-14 8.1v16.3L82 104.1v27.7l14 8.1 14-8.1v-27.7l24.1-13.9V74zm0 44v-16.3l-14 8.1v16.3l14-8.1zm9.9 5.6-24.1 13.9v16.3l38.1-21.9V87.8l-14 8.1v27.7zm-14-63.5 14 8.1v16.3l14-8.1V60.1L144 52l-14 8.1zm-48 83.3v16.3l14 8.1 14-8.1v-16.3l-14 8.1-14-8.1zM57.9 118l14 8.1v-16.3l-14-8.1V118zM82 60.1l14 8.1 14-8.1L96 52c0-.1-14 8.1-14 8.1zm-34 8.1 14-8.1L48 52l-14 8.1v16.3l14 8.1V68.2zm0 27.7-14-8.1v44l38.1 21.9v-16.3L48 123.5V95.9z" style="fill:#f0b90b"/></svg>'

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
