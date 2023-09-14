import ethereum from './ethereum'

const logo = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTUwMS42IDQ0My40Yy0zLjItOS43LTguMS0xOS41LTE2LjItMjUuOS04LjEtNi41LTE2LjItMTMtMjcuNi0xNi4ycy0yMi43LTQuOS0zNS43LTQuOWMtMjkuMiAwLTUzLjUgNi41LTcxLjMgMjEuMS0xNy44IDE0LjYtMjkuMiAzNS43LTM3LjMgNjMuMi0xLjYgOS43LTQuOSAxNy44LTYuNSAyNy42LTEuNiA4LjEtMy4yIDE3LjgtNC45IDI1LjktMS42IDE0LjYtMS42IDI1LjkgMS42IDM3LjMgMy4yIDkuNyA4LjEgMTkuNSAxNi4yIDI1LjkgOC4xIDYuNSAxNi4yIDEzIDI3LjYgMTYuMiAxMS4zIDMuMiAyMi43IDQuOSAzNS43IDQuOSAyOS4yIDAgNTMuNS02LjUgNzEuMy0yMS4xIDE3LjgtMTQuNiAyOS4yLTM1LjcgMzcuMy02My4yIDEuNi04LjEgMy4yLTE3LjggNi41LTI1LjkgMS42LTguMSAzLjItMTcuOCA0LjktMjcuNiAxLjctMTQuNiAxLjctMjcuNS0xLjYtMzcuM3ptLTU2LjcgMzcuM2MtMS42IDguMS0zLjIgMTYuMi00LjkgMjQuMy0xLjYgOC4xLTMuMiAxNi4yLTYuNSAyNS45LTMuMiAxNC42LTkuNyAyNC4zLTE3LjggMzAuOC04LjEgNi41LTE3LjggOS43LTI5LjIgOS43LTExLjMgMC0xOS41LTMuMi0yNC4zLTkuNy00LjktNi41LTYuNS0xNy44LTMuMi0zMC44IDEuNi05LjcgMy4yLTE3LjggNC45LTI1LjkgMS42LTguMSAzLjItMTYuMiA2LjUtMjQuMyAzLjItMTQuNiA5LjctMjQuMyAxNy44LTMwLjggOC4xLTYuNSAxNy44LTkuNyAyOS4yLTkuNyAxMS4zIDAgMTkuNSAzLjIgMjQuMyA5LjcgNC44IDYuNSA2LjQgMTYuMiAzLjIgMzAuOHpNNzE1LjYgNDM4LjZjLTMuMi05LjctOC4xLTE2LjItMTQuNi0yMi43cy0xNC42LTkuNy0yNS45LTEzYy05LjctMy4yLTIxLjEtNC45LTM0LTQuOWgtODIuN2MtMS42IDAtMy4yIDAtNi41IDEuNi0xLjYgMS42LTMuMiAzLjItMy4yIDQuOWwtNDIuMSAyMDFjMCAxLjYgMCA0LjkgMS42IDQuOSAxLjYgMS42IDMuMiAxLjYgNC45IDEuNmg0Mi4xYzEuNiAwIDQuOSAwIDYuNS0xLjYgMS42LTEuNiAzLjItMy4yIDMuMi00LjlsMTQuNi02OC4xaDQyLjFjMjUuOSAwIDQ3LTQuOSA2My4yLTE2LjIgMTYuMi0xMS4zIDI1LjktMjkuMiAzMC44LTUxLjkgMy4yLTExLjMgMy4yLTIyLjYgMC0zMC43em0tNTYuOCAzMC44Yy0xLjYgOS43LTYuNSAxNi4yLTEzIDIxLjEtNi41IDQuOS0xNC42IDYuNS0yMi43IDYuNWgtMzUuN2wxMS4zLTU1LjFINjM2YzguMSAwIDEzIDEuNiAxNi4yIDMuMiAzLjIgMy4yIDYuNSA2LjUgNi41IDkuNyAxLjggMy4yIDEuOCA4LjEuMSAxNC42eiIvPjwvc3ZnPgo='

export default {
  name: 'optimism',
  id: '0xa',
  networkId: '10',
  namespace: 'eip155',
  label: 'Optimism',
  fullName: 'Optimism',
  logo,
  logoBackgroundColor: '#FF0420',
  logoWhiteBackground: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxjaXJjbGUgY3g9IjUwMCIgY3k9IjUwMCIgcj0iMzk2LjYiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNTAwIDg5Ni42YzIxOS4xIDAgMzk2LjYtMTc3LjYgMzk2LjYtMzk2LjZTNzE5LjEgMTAzLjQgNTAwIDEwMy40IDEwMy40IDI4MC45IDEwMy40IDUwMCAyODAuOSA4OTYuNiA1MDAgODk2LjZ6TTM1MC43IDYwOWMxMC45IDMuNCAyMi42IDUuMSAzNS4zIDUuMSAyOS4xIDAgNTIuNC02LjcgNjkuNi0yMC4yIDE3LjMtMTMuNyAyOS4zLTM0LjMgMzYuMi02MS44IDItOC42IDMuOS0xNy4zIDUuNy0yNS45IDItOC42IDMuNy0xNy40IDUuMS0yNi4yIDIuNC0xMy43IDItMjUuNi0xLjItMzUuOS0zLTEwLjItOC4zLTE4LjktMTYtMjUuOS03LjQtNy0xNi42LTEyLjMtMjcuNC0xNS43LTEwLjctMy42LTIyLjMtNS40LTM1LTUuNC0yOS4zIDAtNTIuNyA3LTY5LjkgMjEuMXMtMjkuMiAzNC43LTM1LjkgNjEuOGMtMiA4LjgtNCAxNy42LTYgMjYuMi0xLjggOC42LTMuNSAxNy4zLTUuMSAyNS45LTIuMiAxMy43LTEuOCAyNS42IDEuMiAzNS45IDMuMiAxMC4yIDguNSAxOC44IDE2IDI1LjYgNy40IDYuOCAxNi42IDExLjkgMjcuNCAxNS40em02Ny44LTQ4Yy04LjIgNi40LTE3LjggOS42LTI4LjYgOS42LTExLjEgMC0xOS0zLjItMjMuOC05LjYtNC44LTYuNC02LTE2LjctMy42LTMwLjcgMS42LTguOCAzLjItMTcuMiA0LjgtMjUgMS44LTcuOCAzLjgtMTYgNi0yNC40IDMuNC0xNC4xIDkuMS0yNC4zIDE3LjItMzAuNyA4LjItNi40IDE3LjgtOS42IDI4LjYtOS42czE4LjggMy4yIDIzLjggOS42IDYuMiAxNi43IDMuNiAzMC43Yy0xLjQgOC40LTMgMTYuNi00LjggMjQuNC0xLjYgNy44LTMuNSAxNi4yLTUuNyAyNS0zLjQgMTQtOS4yIDI0LjMtMTcuNSAzMC43em05MS43IDQ4YzEuMiAxLjQgMi44IDIuMSA0LjggMi4xaDQxYzIuMiAwIDQuMS0uNyA1LjctMi4xIDEuOC0xLjQgMi45LTMuMiAzLjMtNS40bDEzLjktNjZoNDAuN2MyNS45IDAgNDYuNS01LjUgNjEuOC0xNi42IDE1LjUtMTEuMSAyNS43LTI4LjEgMzAuNy01MS4yIDIuNC0xMS43IDIuMy0yMS44LS4zLTMwLjQtMi42LTguOC03LjItMTYuMi0xMy45LTIyLTYuNi01LjgtMTUtMTAuMS0yNS0xMy05LjgtMi44LTIwLjktNC4yLTMzLjItNC4yaC04MC4yYy0yIDAtMy45LjctNS43IDIuMS0xLjggMS40LTIuOSAzLjItMy4zIDUuNEw1MDkgNjAzLjVjLS40IDIuMiAwIDQgMS4yIDUuNXptMTExLjItMTEzLjFoLTM0LjdsMTEuOC01NGgzNi4yYzcuMiAwIDEyLjYgMS4yIDE2IDMuNiAzLjYgMi40IDUuNyA1LjYgNi4zIDkuNi42IDQgLjQgOC42LS42IDEzLjktMiA5LTYuMyAxNS44LTEzIDIwLjItNi40IDQuNS0xMy44IDYuNy0yMiA2Ljd6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmMDQyMCIvPjwvc3ZnPg==',
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
    usd: ['0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', '0x7F5c764cBc14f9669B88837ca1490cCa17c31607']
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
