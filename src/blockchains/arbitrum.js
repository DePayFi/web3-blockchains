import ethereum from './ethereum'

const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOnhvZG09Imh0dHA6Ly93d3cuY29yZWwuY29tL2NvcmVsZHJhdy9vZG0vMjAwMyIKCSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI1MDAgMjUwMCIKCSBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO30KCS5zdDF7ZmlsbDojMjEzMTQ3O30KCS5zdDJ7ZmlsbDojMTJBQUZGO30KCS5zdDN7ZmlsbDojOURDQ0VEO30KCS5zdDR7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgoJPGcgaWQ9Il8yNDA1NTg4NDc3MjMyIj4KCQk8cmVjdCB4PSIyMjYiIHk9IjIyNiIgY2xhc3M9InN0MCIgd2lkdGg9IjIwNDgiIGhlaWdodD0iMjA0OCIvPgoJCTxnPgoJCQk8Zz4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00MTEuMSw4NDguNnY4MDIuOGMwLDUxLjYsMjcsOTguMyw3Mi4xLDEyNC41bDY5NS41LDQwMS40YzQ0LjIsMjUuNCw5OS4xLDI1LjQsMTQzLjQsMGw2OTUuNS00MDEuNAoJCQkJCWM0NC4yLTI1LjQsNzIuMS03Mi45LDcyLjEtMTI0LjVWODQ4LjZjMC01MS42LTI3LTk4LjMtNzIuMS0xMjQuNWwtNjk1LjUtNDAxLjRjLTQ0LjItMjUuNC05OS4xLTI1LjQtMTQzLjQsMEw0ODMuMiw3MjQuMQoJCQkJCWMtNDQuMiwyNS40LTcxLjMsNzIuOS03MS4zLDEyNC41SDQxMS4xeiIvPgoJCQkJPGc+CgkJCQkJPGc+CgkJCQkJCTxnPgoJCQkJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE0MDEuNiwxNDA1LjdsLTk5LjEsMjcyYy0yLjUsNy40LTIuNSwxNS42LDAsMjMuOGwxNzAuNCw0NjcuOGwxOTcuNC0xMTMuOWwtMjM2LjgtNjQ5LjYKCQkJCQkJCQlDMTQyNy44LDEzOTAuOSwxNDA3LjMsMTM5MC45LDE0MDEuNiwxNDA1Ljd6Ii8+CgkJCQkJCTwvZz4KCQkJCQkJPGc+CgkJCQkJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTYwMC42LDk0OC41Yy01LjctMTQuNy0yNi4yLTE0LjctMzEuOSwwbC05OS4xLDI3MmMtMi41LDcuNC0yLjUsMTUuNiwwLDIzLjhsMjc5LjQsNzY2bDE5Ny40LTExMy45CgkJCQkJCQkJbC0zNDUuNy05NDdWOTQ4LjV6Ii8+CgkJCQkJCTwvZz4KCQkJCQk8L2c+CgkJCQk8L2c+CgkJCQk8Zz4KCQkJCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTI1MCwzNTNjNC45LDAsOS44LDEuNiwxMy45LDQuMWw3NTIsNDM0LjJjOSw0LjksMTMuOSwxNC43LDEzLjksMjQuNnY4NjguNGMwLDkuOC01LjcsMTkuNy0xMy45LDI0LjYKCQkJCQkJbC03NTIsNDM0LjJjLTQuMSwyLjUtOSw0LjEtMTMuOSw0LjFzLTkuOC0xLjYtMTMuOS00LjFsLTc1Mi00MzQuMmMtOS00LjktMTMuOS0xNC43LTEzLjktMjQuNlY4MTVjMC05LjgsNS43LTE5LjcsMTMuOS0yNC42CgkJCQkJCWw3NTItNDM0LjJjNC4xLTIuNSw5LTQuMSwxMy45LTQuMWwwLDBWMzUzeiBNMTI1MCwyMjZjLTI3LDAtNTMuMiw2LjYtNzcuOCwyMC41bC03NTIsNDM0LjJjLTQ4LjMsMjcuOS03Ny44LDc4LjYtNzcuOCwxMzQuNAoJCQkJCQl2ODY4LjRjMCw1NS43LDI5LjUsMTA2LjUsNzcuOCwxMzQuNGw3NTIsNDM0LjJjMjMuOCwxMy45LDUwLjgsMjAuNSw3Ny44LDIwLjVzNTMuMi02LjYsNzcuOC0yMC41bDc1Mi00MzQuMgoJCQkJCQljNDguMy0yNy45LDc3LjgtNzguNiw3Ny44LTEzNC40VjgxNWMwLTU1LjctMjkuNS0xMDYuNS03Ny44LTEzNC40TDEzMjcsMjQ2LjVjLTIzLjgtMTMuOS01MC44LTIwLjUtNzcuOC0yMC41bDAsMEgxMjUweiIvPgoJCQkJPC9nPgoJCQkJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI3NTEuOSwyMDExIDgyMS42LDE4MjEgOTYwLjgsMTkzNi41IDgzMC42LDIwNTYuMSAJCQkJIi8+CgkJCQk8Zz4KCQkJCQk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTE4Ni4xLDc1My42SDk5NS4yYy0xMy45LDAtMjcsOS0zMS45LDIyLjFMNTU0LjUsMTg5Ni40bDE5Ny40LDExMy45bDQ1MC42LTEyMzQuNgoJCQkJCQljNC4xLTExLjUtNC4xLTIyLjktMTUuNi0yMi45TDExODYuMSw3NTMuNnoiLz4KCQkJCQk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTUyMC4zLDc1My42aC0xOTAuOWMtMTMuOSwwLTI3LDktMzEuOSwyMi4xbC00NjcsMTI3OS42bDE5Ny40LDExMy45bDUwNy45LTEzOTMuNQoJCQkJCQljNC4xLTExLjUtNC4xLTIyLjktMTUuNi0yMi45Vjc1My42eiIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo='

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
  logoWhiteBackground: logo,
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
    usd: ['0xaf88d065e77c8cC2239327C5EDb3A432268e5831', '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1']
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
    {"address": "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8/logo.png", "type": "20"},
    {"address": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/logo.png", "type": "20"},
    {"address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1/logo.png", "type": "20"},
    {"address": "0x912CE59144191C1204E64559FE8253a0e49E6548", "symbol": "ARB", "name": "Arbitrum", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png", "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
}
