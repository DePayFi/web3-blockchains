const logo = '<svg version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 283.5 283.5" style="enable-background:new 0 0 283.5 283.5" xml:space="preserve"><style>.st1{fill:#8c8c8c}</style><g><g><path style="fill:#343434" d="m141.7 55-1.1 3.9v114.8l1.1 1.1 53.3-31.5z"/><path class="st1" d="m141.7 55-53.2 88.3 53.2 31.5v-55.7z"/><path style="fill:#3c3c3b" d="m141.7 184.9-.6.8v40.9l.6 1.9 53.3-75.1z"/><path class="st1" d="M141.7 228.5v-43.6l-53.2-31.5z"/><path style="fill:#141414" d="m141.7 174.8 53.3-31.5-53.3-24.2z"/><path style="fill:#393939" d="m88.5 143.3 53.2 31.5v-55.7z"/></g></g></svg>'

export default {
  name: 'ethereum',
  id: '0x1',
  networkId: '1',
  label: 'Ethereum',
  fullName: 'Ethereum Mainnet',
  logo,
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
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": logo, "type": "NATIVE"},
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
}


