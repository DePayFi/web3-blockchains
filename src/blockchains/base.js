import ethereum from './ethereum'

const logo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik00OTguNiA4NDJDNjg4IDg0MiA4NDIgNjg4LjkgODQyIDQ5OS41UzY4OCAxNTcgNDk4LjYgMTU3QzMxOSAxNTcgMTcxLjIgMjk1LjEgMTU3IDQ3MC4zaDQ1My4xdjU3LjVIMTU3QzE3MiA3MDMuOSAzMTkgODQyIDQ5OC42IDg0MnoiIGZpbGw9IiNmZmYiLz48L3N2Zz4='

export default {
  name: 'base',
  id: '0x2105',
  networkId: '8453',
  namespace: 'eip155',
  label: 'Base',
  fullName: 'Base',
  logo,
  logoBackgroundColor: '#0052FF',
  logoWhiteBackground: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik00OTguOSA4NDVDNjkwLjEgODQ1IDg0NSA2OTAuMyA4NDUgNDk5LjVTNjkwLjEgMTU0IDQ5OC45IDE1NEMzMTcuNiAxNTQgMTY4LjggMjkzLjMgMTU0IDQ3MC41aDQ1Ny40djU4LjFIMTU0QzE2OC44IDcwNS44IDMxNy42IDg0NSA0OTguOSA4NDV6IiBmaWxsPSIjMDA1MmZmIi8+PC9zdmc+',
  currency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    logo: ethereum.currency.logo,
  },
  wrapped: {
    address: '0x4200000000000000000000000000000000000006',
    logo: ethereum.wrapped.logo,
  },
  stables: { // max. 2 per fiat currency
    usd: ['0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA']
  },
  explorer: 'https://basescan.org',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://basescan.org/tx/${transaction.id || transaction}` }
    if(token) { return `https://basescan.org/token/${token}` }
    if(address) { return `https://basescan.org/address/${address}` }
  },
  endpoints: [ // make sure provider supports batch size of 50 batch requests!
    'https://mainnet.base.org',
    'https://base.llamarpc.com',
    'https://base.rpc.subquery.network/public'
  ],
  tokens: [ // only major tokens
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.currency.logo, "type": "NATIVE"},
    {"address": "0x4200000000000000000000000000000000000006", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
    {"address": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://ethereum-optimism.github.io/data/USDC/logo.png", "type": "20"},
    {"address": "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA", "symbol": "USDbC", "name": "USD Base Coin", "decimals": 6, "logo": "https://ethereum-optimism.github.io/data/USDC/logo.png", "type": "20"},
    {"address": "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3'
}
