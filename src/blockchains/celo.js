const logo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NTAgOTUwIj48cGF0aCBkPSJNMzc1IDg1MEMxNjcuOSA4NTAgMCA2ODIuMSAwIDQ3NVMxNjcuOSAxMDAgMzc1IDEwMGgyMDBjMjA3LjEgMCAzNzUgMTY3LjkgMzc1IDM3NVM3ODIuMSA4NTAgNTc1IDg1MEgzNzV6bTIwMC0xNTBjMTI0LjMgMCAyMjUtMTAwLjcgMjI1LTIyNVM2OTkuMyAyNTAgNTc1IDI1MEgzNzVjLTEyNC4zIDAtMjI1IDEwMC43LTIyNSAyMjVzMTAwLjcgMjI1IDIyNSAyMjVoMjAweiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=='
const logoWhiteBackground = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NTAgOTUwIj48cGF0aCBkPSJNMzc1IDg1MEMxNjcuOSA4NTAgMCA2ODIuMSAwIDQ3NVMxNjcuOSAxMDAgMzc1IDEwMGgyMDBjMjA3LjEgMCAzNzUgMTY3LjkgMzc1IDM3NVM3ODIuMSA4NTAgNTc1IDg1MEgzNzV6bTIwMC0xNTBjMTI0LjMgMCAyMjUtMTAwLjcgMjI1LTIyNVM2OTkuMyAyNTAgNTc1IDI1MEgzNzVjLTEyNC4zIDAtMjI1IDEwMC43LTIyNSAyMjVzMTAwLjcgMjI1IDIyNSAyMjVoMjAweiIgZmlsbD0iI0ZDRkY1MiIvPjwvc3ZnPg=='
const currencyLogo = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/celo/info/logo.png"
const wrappedLogo = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/celo/info/logo.png"

export default {
  name: 'celo',
  id: '0xa4ec',
  networkId: '42220',
  namespace: 'eip155',
  label: 'Celo',
  fullName: 'Celo Mainnet',
  logo,
  logoBackgroundColor: '#FCFF52',
  logoWhiteBackground,
  currency: {
    name: 'Celo',
    symbol: 'CELO',
    decimals: 18,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    logo: currencyLogo
  },
  wrapped: {
    address: '0x471EcE3750Da237f93B8E339c536989b8978a438',
    logo: wrappedLogo,
  },
  stables: { // max. 2 per fiat currency
    usd: ['0xcebA9300f2b948710d2653dD7B07f33A8B32118C', '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e']
  },
  explorer: 'https://celoscan.io',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://celoscan.io/tx/${transaction.id || transaction}` }
    if(token) { return `https://celoscan.io/token/${token}` }
    if(address) { return `https://celoscan.io/address/${address}` }
  },
  endpoints: [ // make sure provider supports batch size of 50 batch requests!
    'https://forno.celo.org',
    'https://celo.drpc.org',
    'https://1rpc.io/celo',
  ],
  tokens: [ // only major tokens
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "CELO", "name": "Celo", "decimals": 18, "logo": currencyLogo, "type": "NATIVE"},
    {"address": "0x471EcE3750Da237f93B8E339c536989b8978a438", "symbol": "WCELO", "name": "Wrapped Celo", "decimals": 18, "logo": wrappedLogo, "type": "20"},
    {"address": "0xcebA9300f2b948710d2653dD7B07f33A8B32118C", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
    {"address": "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
    {"address": "0x765DE816845861e75A25fCA122bb6898B8B1282a", "symbol": "cUSD", "name": "Celo Dollar", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/celo/assets/0x765DE816845861e75A25fCA122bb6898B8B1282a/logo.png", "type": "20"},
    {"address": "0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73", "symbol": "cEUR", "name": "Celo Euro", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/celo/assets/0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73/logo.png", "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
  blockTime: 5000, // 5s
}
