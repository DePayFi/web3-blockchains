import ethereum from './ethereum'

const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO30KCS5zdDF7ZmlsbDojMjEzMTQ3O30KCS5zdDJ7ZmlsbDojMTJBQUZGO30KCS5zdDN7ZmlsbDojOURDQ0VEO30KCS5zdDR7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgoJPGcgaWQ9Il8yNDA1NTg4NDc3MjMyIj4KCQk8cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIj48L3JlY3Q+CgkJPGc+CgkJCTxnPgoJCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTIyNiw3NjB2OTgwYzAsNjMsMzMsMTIwLDg4LDE1Mmw4NDksNDkwYzU0LDMxLDEyMSwzMSwxNzUsMGw4NDktNDkwYzU0LTMxLDg4LTg5LDg4LTE1MlY3NjAgICAgICBjMC02My0zMy0xMjAtODgtMTUybC04NDktNDkwYy01NC0zMS0xMjEtMzEtMTc1LDBMMzE0LDYwOGMtNTQsMzEtODcsODktODcsMTUySDIyNnoiPjwvcGF0aD4KCQkJCTxnPgoJCQkJCTxnPgoJCQkJCQk8Zz4KCQkJCQkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNDM1LDE0NDBsLTEyMSwzMzJjLTMsOS0zLDE5LDAsMjlsMjA4LDU3MWwyNDEtMTM5bC0yODktNzkzQzE0NjcsMTQyMiwxNDQyLDE0MjIsMTQzNSwxNDQweiI+PC9wYXRoPgoJCQkJCQk8L2c+CgkJCQkJCTxnPgoJCQkJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE2NzgsODgyYy03LTE4LTMyLTE4LTM5LDBsLTEyMSwzMzJjLTMsOS0zLDE5LDAsMjlsMzQxLDkzNWwyNDEtMTM5TDE2NzgsODgzVjg4MnoiPjwvcGF0aD4KCQkJCQkJPC9nPgoJCQkJCTwvZz4KCQkJCTwvZz4KCQkJCTxnPgoJCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xMjUwLDE1NWM2LDAsMTIsMiwxNyw1bDkxOCw1MzBjMTEsNiwxNywxOCwxNywzMHYxMDYwYzAsMTItNywyNC0xNywzMGwtOTE4LDUzMGMtNSwzLTExLDUtMTcsNSAgICAgICBzLTEyLTItMTctNWwtOTE4LTUzMGMtMTEtNi0xNy0xOC0xNy0zMFY3MTljMC0xMiw3LTI0LDE3LTMwbDkxOC01MzBjNS0zLDExLTUsMTctNWwwLDBWMTU1eiBNMTI1MCwwYy0zMywwLTY1LDgtOTUsMjVMMjM3LDU1NSAgICAgICBjLTU5LDM0LTk1LDk2LTk1LDE2NHYxMDYwYzAsNjgsMzYsMTMwLDk1LDE2NGw5MTgsNTMwYzI5LDE3LDYyLDI1LDk1LDI1czY1LTgsOTUtMjVsOTE4LTUzMGM1OS0zNCw5NS05Niw5NS0xNjRWNzE5ICAgICAgIGMwLTY4LTM2LTEzMC05NS0xNjRMMTM0NCwyNWMtMjktMTctNjItMjUtOTUtMjVsMCwwSDEyNTB6Ij48L3BhdGg+CgkJCQk8L2c+CgkJCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjY0MiwyMTc5IDcyNywxOTQ3IDg5NywyMDg4IDczOCwyMjM0ICAgICAiPjwvcG9seWdvbj4KCQkJCTxnPgoJCQkJCTxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMTcyLDY0NEg5MzljLTE3LDAtMzMsMTEtMzksMjdMNDAxLDIwMzlsMjQxLDEzOWw1NTAtMTUwN2M1LTE0LTUtMjgtMTktMjhMMTE3Miw2NDR6Ij48L3BhdGg+CgkJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0iTTE1ODAsNjQ0aC0yMzNjLTE3LDAtMzMsMTEtMzksMjdMNzM4LDIyMzNsMjQxLDEzOWw2MjAtMTcwMWM1LTE0LTUtMjgtMTktMjhWNjQ0eiI+PC9wYXRoPgoJCQkJPC9nPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo='

export default {
  name: 'arbitrum',
  id: '0xa4b1',
  networkId: '42161',
  namespace: 'eip155',
  platform: 'evm',
  label: 'Arbitrum',
  fullName: 'Arbitrum One',
  logo,
  logoBackgroundColor: '#2b354d',
  currency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    logo: ethereum.currency.logo,
  },
  wrapped: {
    address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    logo: ethereum.wrapped.logo,
  },
  stables: { // max. 3 per fiat currency
    usd: ['0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1']
  },
  explorer: 'https://arbiscan.io',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://arbiscan.io/tx/${transaction.id || transaction}` }
    if(token) { return `https://arbiscan.io/token/${token}` }
    if(address) { return `https://arbiscan.io/address/${address}` }
  },
  endpoints: [ // make sure provider supports batch size of 99 batch requests!
    'https://arbitrum.blockpi.network/v1/rpc/public',
    'https://arbitrum-one.publicnode.com',
    'https://endpoints.omniatech.io/v1/arbitrum/one/public'
  ],
  tokens: [ // only major tokens
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.currency.logo, "type": "NATIVE"},
    {"address": "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
    {"address": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/logo.png", "type": "20"},
    {"address": "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8/logo.png", "type": "20"},
    {"address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1/logo.png", "type": "20"},
    {"address": "0x912CE59144191C1204E64559FE8253a0e49E6548", "symbol": "ARB", "name": "Arbitrum", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png", "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
}
