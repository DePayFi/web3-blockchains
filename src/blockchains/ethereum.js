const logo = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjgzLjUgMjgzLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4My41IDI4My41IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MXtmaWxsOiM4YzhjOGN9PC9zdHlsZT48Zz48Zz48cGF0aCBzdHlsZT0iZmlsbDojMzQzNDM0IiBkPSJtMTQxLjcgNTUtMS4xIDMuOXYxMTQuOGwxLjEgMS4xIDUzLjMtMzEuNXoiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJtMTQxLjcgNTUtNTMuMiA4OC4zIDUzLjIgMzEuNXYtNTUuN3oiLz48cGF0aCBzdHlsZT0iZmlsbDojM2MzYzNiIiBkPSJtMTQxLjcgMTg0LjktLjYuOHY0MC45bC42IDEuOSA1My4zLTc1LjF6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTE0MS43IDIyOC41di00My42bC01My4yLTMxLjV6Ii8+PHBhdGggc3R5bGU9ImZpbGw6IzE0MTQxNCIgZD0ibTE0MS43IDE3NC44IDUzLjMtMzEuNS01My4zLTI0LjJ6Ii8+PHBhdGggc3R5bGU9ImZpbGw6IzM5MzkzOSIgZD0ibTg4LjUgMTQzLjMgNTMuMiAzMS41di01NS43eiIvPjwvZz48L2c+PC9zdmc+Cg=='

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
    {"address": "0x8E870D67F660D95d5be530380D0eC0bd388289E1", "symbol": "USDP", "name": "Pax Dollar", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x8E870D67F660D95d5be530380D0eC0bd388289E1/logo.png", "type": "20"},
    {"address": "0x956F47F50A910163D8BF957Cf5846D573E7f87CA", "symbol": "FEI", "name": "Fei USD", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x956F47F50A910163D8BF957Cf5846D573E7f87CA/logo.png", "type": "20"}
  ]
}


