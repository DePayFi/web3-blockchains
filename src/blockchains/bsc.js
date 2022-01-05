export default {
  name: 'bsc',
  id: '0x38',
  networkId: '56',
  label: 'Binance Smart Chain',
  fullName: 'Binance Smart Chain Mainnet',
  logo:
    'data:image/png;base64,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',
  currency: {
    name: 'Binance Coin',
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
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "BNB", "name": "Binance Coin", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png"},
    {"address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "symbol": "BUSD", "name": "BUSD Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png"},
    {"address": "0x55d398326f99059fF775485246999027B3197955", "symbol": "USDT", "name": "Binance-Peg BSC-USD", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png"},
    {"address": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "symbol": "Cake", "name": "PancakeSwap Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png"},
    {"address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", "symbol": "USDC", "name": "USD Coin", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d/logo.png"},
    {"address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", "symbol": "ETH", "name": "Ethereum Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png"},
    {"address": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", "symbol": "BTCB", "name": "BTCB Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png"}
  ]
}
