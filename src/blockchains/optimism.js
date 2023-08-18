import ethereum from './ethereum'

const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MCA1MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAgNTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI1LjEsMjEuNWMtMC4yLTAuNi0wLjUtMS4yLTEtMS42Yy0wLjUtMC40LTEtMC44LTEuNy0xYy0wLjctMC4yLTEuNC0wLjMtMi4yLTAuM2MtMS44LDAtMy4zLDAuNC00LjQsMS4zCgljLTEuMSwwLjktMS44LDIuMi0yLjMsMy45Yy0wLjEsMC42LTAuMywxLjEtMC40LDEuN2MtMC4xLDAuNS0wLjIsMS4xLTAuMywxLjZjLTAuMSwwLjktMC4xLDEuNiwwLjEsMi4zYzAuMiwwLjYsMC41LDEuMiwxLDEuNgoJYzAuNSwwLjQsMSwwLjgsMS43LDFjMC43LDAuMiwxLjQsMC4zLDIuMiwwLjNjMS44LDAsMy4zLTAuNCw0LjQtMS4zYzEuMS0wLjksMS44LTIuMiwyLjMtMy45YzAuMS0wLjUsMC4yLTEuMSwwLjQtMS42CgljMC4xLTAuNSwwLjItMS4xLDAuMy0xLjdDMjUuMywyMi45LDI1LjMsMjIuMSwyNS4xLDIxLjV6IE0yMS42LDIzLjhjLTAuMSwwLjUtMC4yLDEtMC4zLDEuNWMtMC4xLDAuNS0wLjIsMS0wLjQsMS42CgljLTAuMiwwLjktMC42LDEuNS0xLjEsMS45Yy0wLjUsMC40LTEuMSwwLjYtMS44LDAuNmMtMC43LDAtMS4yLTAuMi0xLjUtMC42Yy0wLjMtMC40LTAuNC0xLjEtMC4yLTEuOWMwLjEtMC42LDAuMi0xLjEsMC4zLTEuNgoJYzAuMS0wLjUsMC4yLTEsMC40LTEuNWMwLjItMC45LDAuNi0xLjUsMS4xLTEuOWMwLjUtMC40LDEuMS0wLjYsMS44LTAuNmMwLjcsMCwxLjIsMC4yLDEuNSwwLjZDMjEuNywyMi4zLDIxLjgsMjIuOSwyMS42LDIzLjh6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zOC4zLDIxLjJjLTAuMi0wLjYtMC41LTEtMC45LTEuNGMtMC40LTAuNC0wLjktMC42LTEuNi0wLjhjLTAuNi0wLjItMS4zLTAuMy0yLjEtMC4zaC01LjEKCWMtMC4xLDAtMC4yLDAtMC40LDAuMWMtMC4xLDAuMS0wLjIsMC4yLTAuMiwwLjNsLTIuNiwxMi40YzAsMC4xLDAsMC4zLDAuMSwwLjNjMC4xLDAuMSwwLjIsMC4xLDAuMywwLjFoMi42YzAuMSwwLDAuMywwLDAuNC0wLjEKCWMwLjEtMC4xLDAuMi0wLjIsMC4yLTAuM2wwLjktNC4yaDIuNmMxLjYsMCwyLjktMC4zLDMuOS0xYzEtMC43LDEuNi0xLjgsMS45LTMuMkMzOC41LDIyLjQsMzguNSwyMS43LDM4LjMsMjEuMnogTTM0LjgsMjMuMQoJYy0wLjEsMC42LTAuNCwxLTAuOCwxLjNjLTAuNCwwLjMtMC45LDAuNC0xLjQsMC40aC0yLjJsMC43LTMuNGgyLjNjMC41LDAsMC44LDAuMSwxLDAuMmMwLjIsMC4yLDAuNCwwLjQsMC40LDAuNgoJQzM0LjksMjIuNCwzNC45LDIyLjcsMzQuOCwyMy4xeiIvPgo8L3N2Zz4K'

export default {
  name: 'optimism',
  id: '0xa',
  networkId: '10',
  namespace: 'eip155',
  label: 'Optimism',
  fullName: 'Optimism',
  logo,
  logoBackgroundColor: '#FF0420',
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
    usd: ['0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1']
  },
  explorer: 'https://optimistic.etherscan.io',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://optimistic.etherscan.io/tx/${transaction.id || transaction}` }
    if(token) { return `https://optimistic.etherscan.io/token/${token}` }
    if(address) { return `https://optimistic.etherscan.io/address/${address}` }
  },
  endpoints: [ // make sure provider supports batch size of 99 batch requests!
    'https://optimism.blockpi.network/v1/rpc/public',
    'https://optimism.meowrpc.com',
    'https://optimism.publicnode.com'
  ],
  tokens: [ // only major tokens
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.currency.logo, "type": "NATIVE"},
    {"address": "0x4200000000000000000000000000000000000006", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
    {"address": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x94b008aA00579c1307B0EF2c499aD98a8ce58e58/logo.png', "type": "20"},
    {"address": "0x7F5c764cBc14f9669B88837ca1490cCa17c31607", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x7F5c764cBc14f9669B88837ca1490cCa17c31607/logo.png', "type": "20"},
    {"address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png', "type": "20"},
    {"address": "0x4200000000000000000000000000000000000042", "symbol": "OP", "name": "Optimism", "decimals": 18, "logo": 'https://user-images.githubusercontent.com/1300064/219575413-d7990d69-1d21-44ef-a2b1-e9c682c79802.svg', "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
}
