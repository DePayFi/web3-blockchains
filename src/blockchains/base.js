import ethereum from './ethereum'

const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMTEgMTExIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMTEgMTExOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01NC45LDkzLjdjMjEuNCwwLDM4LjgtMTcuMywzOC44LTM4LjdjMC0yMS40LTE3LjQtMzguNy0zOC44LTM4LjdjLTIwLjMsMC0zNywxNS42LTM4LjYsMzUuNGg1MS4ydjYuNUgxNi4zCglDMTgsNzguMSwzNC42LDkzLjcsNTQuOSw5My43eiIvPgo8L3N2Zz4K'

export default {
  name: 'base',
  id: '0x2105',
  networkId: '8453',
  namespace: 'eip155',
  label: 'Base',
  fullName: 'Base',
  logo,
  logoBackgroundColor: '#0052FF',
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
  stables: { // max. 3 per fiat currency
    usd: ['0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA', '0xEB466342C4d449BC9f53A865D5Cb90586f405215']
  },
  explorer: 'https://basescan.org',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://basescan.org/tx/${transaction.id || transaction}` }
    if(token) { return `https://basescan.org/token/${token}` }
    if(address) { return `https://basescan.org/address/${address}` }
  },
  endpoints: [ // make sure provider supports batch size of 99 batch requests!
    'https://base.blockpi.network/v1/rpc/public',
    'https://base.meowrpc.com',
    'https://mainnet.base.org'
  ],
  tokens: [ // only major tokens
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.currency.logo, "type": "NATIVE"},
    {"address": "0x4200000000000000000000000000000000000006", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
    {"address": "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA", "symbol": "USDbC", "name": "USD Base Coin", "decimals": 6, "logo": "https://assets.coingecko.com/coins/images/31164/small/baseusdc.jpg", "type": "20"},
    {"address": "0xEB466342C4d449BC9f53A865D5Cb90586f405215", "symbol": "axlUSDC", "name": "Axelar Wrapped USDC", "decimals": 6, "logo": "https://basescan.org/images/main/empty-token.png", "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
}
