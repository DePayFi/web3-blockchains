import ethereum from './ethereum'

const logo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTExIiBoZWlnaHQ9IjExMSIgdmlld0JveD0iMCAwIDExMSAxMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01NC45MjEgMTEwLjAzNEM4NS4zNTkgMTEwLjAzNCAxMTAuMDM0IDg1LjQwMiAxMTAuMDM0IDU1LjAxN0MxMTAuMDM0IDI0LjYzMTkgODUuMzU5IDAgNTQuOTIxIDBDMjYuMDQzMiAwIDIuMzUyODEgMjIuMTcxNCAwIDUwLjM5MjNINzIuODQ2N1Y1OS42NDE2SDMuOTU2NWUtMDdDMi4zNTI4MSA4Ny44NjI1IDI2LjA0MzIgMTEwLjAzNCA1NC45MjEgMTEwLjAzNFoiIGZpbGw9IiMwMDUyRkYiLz4KPC9zdmc+Cg=='

export default {
  name: 'base',
  id: '0x2105',
  networkId: '8453',
  namespace: 'eip155',
  label: 'Base',
  fullName: 'Base',
  logo,
  currency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    logo: ethereum.logo
  },
  wrapped: {
    address: '0x4200000000000000000000000000000000000006',
    logo: ethereum.wrapped.logo
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
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.logo, "type": "NATIVE"},
    {"address": "0x4200000000000000000000000000000000000006", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
    {"address": "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA", "symbol": "USDbC", "name": "USD Base Coin", "decimals": 6, "logo": "https://basescan.org/images/main/empty-token.png", "type": "20"},
    {"address": "0xEB466342C4d449BC9f53A865D5Cb90586f405215", "symbol": "axlUSDC", "name": "Axelar Wrapped USDC", "decimals": 6, "logo": "https://basescan.org/images/main/empty-token.png", "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
}
