import ethereum from './ethereum'

const logo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik00ODcuMSAzOTUuN2MtNS4yLTE1LjgtMTMuMi0zMS43LTI2LjQtNDIuMi0xMy4yLTEwLjUtMjYuNC0yMS4yLTQ0LjktMjYuNC0xOC41LTUuMi0zNy04LTU4LjEtOC00Ny41IDAtODcuMSAxMC41LTExNi4xIDM0LjQtMjkgMjMuOC00Ny41IDU4LjEtNjAuNyAxMDIuOS0yLjYgMTUuOC04IDI5LTEwLjUgNDQuOS0yLjYgMTMuMi01LjIgMjktOCA0Mi4yLTIuNiAyMy44LTIuNiA0Mi4yIDIuNiA2MC43IDUuMiAxNS44IDEzLjIgMzEuNyAyNi40IDQyLjIgMTMuMiAxMC41IDI2LjQgMjEuMiA0NC45IDI2LjQgMTguNCA1LjIgMzcgOCA1OC4xIDggNDcuNSAwIDg3LjEtMTAuNSAxMTYuMS0zNC40czQ3LjUtNTguMSA2MC43LTEwMi45YzIuNi0xMy4yIDUuMi0yOSAxMC41LTQyLjIgMi42LTEzLjIgNS4yLTI5IDgtNDQuOSAyLjgtMjMuOCAyLjgtNDQuOC0yLjYtNjAuN3ptLTkyLjQgNjAuOGMtMi42IDEzLjItNS4yIDI2LjQtOCAzOS41LTIuNiAxMy4yLTUuMiAyNi40LTEwLjUgNDIuMi01LjIgMjMuOC0xNS44IDM5LjUtMjkgNTAuMi0xMy4yIDEwLjUtMjkgMTUuOC00Ny41IDE1LjgtMTguNCAwLTMxLjctNS4yLTM5LjUtMTUuOC04LTEwLjUtMTAuNS0yOS01LjItNTAuMiAyLjYtMTUuOCA1LjItMjkgOC00Mi4yIDIuNi0xMy4yIDUuMi0yNi40IDEwLjUtMzkuNSA1LjItMjMuOCAxNS44LTM5LjUgMjktNTAuMiAxMy4yLTEwLjUgMjktMTUuOCA0Ny41LTE1LjggMTguNCAwIDMxLjcgNS4yIDM5LjUgMTUuOCA3LjkgMTAuNiAxMC41IDI2LjMgNS4yIDUwLjJ6bTQ0MC45LTY4LjZjLTUuMi0xNS44LTEzLjItMjYuNC0yMy44LTM3cy0yMy44LTE1LjgtNDIuMi0yMS4yYy0xNS44LTUuMi0zNC40LTgtNTUuNC04SDU3OS43Yy0yLjYgMC01LjIgMC0xMC41IDIuNi0yLjYgMi42LTUuMiA1LjItNS4yIDhsLTY4LjYgMzI3LjRjMCAyLjYgMCA4IDIuNiA4IDIuNiAyLjYgNS4yIDIuNiA4IDIuNmg2OC42YzIuNiAwIDggMCAxMC41LTIuNnM1LjItNS4yIDUuMi04bDIzLjgtMTEwLjloNjguNmM0Mi4yIDAgNzYuNi04IDEwMi45LTI2LjQgMjYuNC0xOC40IDQyLjItNDcuNSA1MC4yLTg0LjYgNS4xLTE4LjQgNS4xLTM2LjctLjItNDkuOXpNNzQzLjEgNDM4Yy0yLjYgMTUuOC0xMC41IDI2LjQtMjEuMiAzNC40cy0yMy44IDEwLjUtMzcgMTAuNWgtNTguMWwxOC40LTg5LjdoNjAuN2MxMy4yIDAgMjEuMiAyLjYgMjYuNCA1LjIgNS4yIDUuMiAxMC41IDEwLjUgMTAuNSAxNS44IDMgNS4yIDMgMTMuMi4zIDIzLjh6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=='

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
  endpoints: [ // make sure provider supports batch size of 50 batch requests!
    'https://optimism.llamarpc.com',
    'https://optimism.publicnode.com',
    'https://optimism.rpc.subquery.network/public'
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
  permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
  blockTime: 2000, // 2s
}
