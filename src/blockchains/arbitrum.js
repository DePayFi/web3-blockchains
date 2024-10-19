import ethereum from './ethereum'

const logo = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDF7ZmlsbDojMjEzMTQ3fTwvc3R5bGU+PHBhdGggZD0iTTkyIDkyaDgxNnY4MTZIOTJWOTJ6IiBmaWxsPSJub25lIi8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTE2NS44IDM0MC4xVjY2MGMwIDIwLjYgMTAuOCAzOS4yIDI4LjcgNDkuNmwyNzcuMSAxNTkuOWMxNy42IDEwLjEgMzkuNSAxMC4xIDU3LjEgMGwyNzcuMS0xNTkuOWMxNy42LTEwLjEgMjguNy0yOSAyOC43LTQ5LjZWMzQwLjFjMC0yMC42LTEwLjgtMzkuMi0yOC43LTQ5LjZsLTI3Ny4xLTE2MGMtMTcuNi0xMC4xLTM5LjUtMTAuMS01Ny4xIDBsLTI3Ny4xIDE2MGMtMTcuNiAxMC4xLTI4LjQgMjktMjguNCA0OS42aC0uM3oiLz48cGF0aCBkPSJtNTYwLjQgNTYyLTM5LjUgMTA4LjRjLTEgMi45LTEgNi4yIDAgOS41bDY3LjkgMTg2LjQgNzguNi00NS40LTk0LjMtMjU4LjhjLTIuMy02LTEwLjQtNi0xMi43LS4xem03OS4zLTE4Mi4xYy0yLjMtNS45LTEwLjQtNS45LTEyLjcgMGwtMzkuNSAxMDguNGMtMSAyLjktMSA2LjIgMCA5LjVMNjk4LjggODAzbDc4LjYtNDUuNC0xMzcuNy0zNzcuNHYtLjN6IiBmaWxsPSIjMTJhYWZmIi8+PHBhdGggZD0iTTUwMCAxNDIuNmMyIDAgMy45LjYgNS41IDEuNmwyOTkuNiAxNzNjMy42IDIgNS41IDUuOSA1LjUgOS44djM0NmMwIDMuOS0yLjMgNy44LTUuNSA5LjhsLTI5OS42IDE3M2MtMS42IDEtMy42IDEuNi01LjUgMS42cy0zLjktLjYtNS41LTEuNmwtMjk5LjYtMTczYy0zLjYtMi01LjUtNS45LTUuNS05LjhWMzI2LjdjMC0zLjkgMi4zLTcuOCA1LjUtOS44bDI5OS42LTE3M2MxLjYtMSAzLjYtMS42IDUuNS0xLjZ2LjN6bTAtNTAuNmMtMTAuOCAwLTIxLjIgMi42LTMxIDguMmwtMjk5LjYgMTczYy0xOS4yIDExLjEtMzEgMzEuMy0zMSA1My41djM0NmMwIDIyLjIgMTEuOCA0Mi40IDMxIDUzLjVsMjk5LjYgMTczYzkuNSA1LjUgMjAuMiA4LjIgMzEgOC4yczIxLjItMi42IDMxLTguMmwyOTkuNi0xNzNjMTkuMi0xMS4xIDMxLTMxLjMgMzEtNTMuNXYtMzQ2YzAtMjIuMi0xMS44LTQyLjQtMzEtNTMuNWwtMjk5LjktMTczYy05LjUtNS41LTIwLjItOC4yLTMxLTguMmguM3oiIGZpbGw9IiM5ZGNjZWQiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJtMzAxLjUgODAzLjIgMjcuOC03NS43IDU1LjUgNDYtNTEuOSA0Ny43LTMxLjQtMTh6Ii8+PHBhdGggZD0iTTQ3NC41IDMwMi4yaC03Ni4xYy01LjUgMC0xMC44IDMuNi0xMi43IDguOEwyMjIuOSA3NTcuNWw3OC42IDQ1LjRMNDgxLjEgMzExYzEuNi00LjYtMS42LTkuMS02LjItOS4xbC0uNC4zem0xMzMuMiAwaC03Ni4xYy01LjUgMC0xMC44IDMuNi0xMi43IDguOGwtMTg2IDUwOS44IDc4LjYgNDUuNEw2MTMuOSAzMTFjMS42LTQuNi0xLjYtOS4xLTYuMi05LjF2LjN6IiBmaWxsPSIjZmZmIi8+PC9zdmc+Cg=='

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
  stables: { // max. 2 per fiat currency
    usd: ['0xaf88d065e77c8cC2239327C5EDb3A432268e5831', '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9']
  },
  explorer: 'https://arbiscan.io',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://arbiscan.io/tx/${transaction.id || transaction}` }
    if(token) { return `https://arbiscan.io/token/${token}` }
    if(address) { return `https://arbiscan.io/address/${address}` }
  },
  endpoints: [ // make sure provider supports batch size of 50 batch requests!
    'https://arbitrum.llamarpc.com',
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
  permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
  blockTime: 250, // 0.25s
}
