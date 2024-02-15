const logo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0xMzEuNSA0NTkuM2MtMTQuNCA5LjYtMjQgMjQtMjQgNDMuMnYxOTQuNGMwIDE5LjIgOS42IDM2IDI0IDQzLjJsMTY1LjYgOTZjMTQuNCA5LjYgMzMuNiA5LjYgNDggMGwxNjUuNi05NmMxNC40LTkuNiAyNC0yNCAyNC00My4ydi02OS42bC03Ni44LTQzLjJ2NjQuOGMwIDE5LjItOS42IDM2LTI0IDQzLjJsLTg2LjQgNTIuOGMtMTQuNCA5LjYtMzMuNiA5LjYtNDggMGwtODYuNC01MC40Yy0xNC40LTkuNi0yNC0yNC0yNC00My4yVjU1MC41YzAtMTkuMiA5LjYtMzYgMjQtNDMuMmw4OC44LTUwLjRjMTQuNC05LjYgMzMuNi05LjYgNDggMGwxMTIuOCA2NC44IDc2LjggNDUuNiAxMTIuOCA2NC44YzE0LjQgOS42IDMzLjYgOS42IDQ4IDBsMTY4LTk2YzE0LjQtOS42IDI0LTI0IDI0LTQzLjJ2LTE5MmMwLTE0LjQtOS42LTMxLjItMjQtNDAuOGwtMTY4LTk2Yy0xNC40LTkuNi0zMy42LTkuNi00OCAwbC0xNjUuNiA5NmMtMTQuNCA5LjYtMjQgMjQtMjQgNDMuMnY2OS42bDc2LjggNDUuNnYtNjkuNmMwLTE5LjIgOS42LTM2IDI0LTQzLjJsODguOC01Mi44YzE0LjQtOS42IDMzLjYtOS42IDQ4IDBsODguOCA1MC40YzE0LjQgOS42IDI0IDI0IDI0IDQzLjJ2MTAwLjhjMCAxOS4yLTEyIDM2LTI0IDQzLjJsLTg4LjggNTIuOGMtMTQuNCA5LjYtMzMuNiA5LjYtNDggMGwtMTEyLjgtNjkuNi03OS4yLTQzLjItMTE3LjYtNjkuNmMtMTQuNC05LjYtMzMuNi05LjYtNDggMCAwIDIuNC0xNjAuOCA5OC40LTE2My4yIDk4LjR6IiBmaWxsPSIjZmZmIi8+PC9zdmc+'
const currencyLogo = "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/info/logo.png"
const wrappedLogo = "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png"

export default {
  name: 'polygon',
  id: '0x89',
  networkId: '137',
  namespace: 'eip155',
  label: 'Polygon (POS)',
  fullName: 'Polygon (POS) Mainnet',
  logo,
  logoBackgroundColor: '#824ee2',
  logoWhiteBackground: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0xMDkuNyA0NTljLTE2LjQgOS40LTI1LjggMjUuOC0yNS44IDQ2Ljl2MjA2LjNjMCAyMS4xIDkuNCAzNy41IDI1LjggNDYuOWwxNzUuOCAxMDMuMWMxNi40IDkuNCAzNS4yIDkuNCA1MS42IDBsMTc1LjgtMTAzLjFjMTYuNC05LjQgMjUuOC0yNS44IDI1LjgtNDYuOXYtNzIuN2wtODItNDYuOXY2OGMwIDIxLjEtOS40IDM3LjUtMjUuOCA0Ni45TDMzNyA3NjEuNGMtMTYuNCA5LjQtMzUuMiA5LjQtNTEuNiAwTDE5NCA3MDcuNWMtMTYuNC05LjQtMjUuOC0yNS44LTI1LjgtNDYuOVY1NTIuOGMwLTIxLjEgOS40LTM3LjUgMjUuOC00Ni45bDkzLjgtNTMuOWMxNC4xLTkuNCAzNS4yLTkuNCA1MS42IDBsMTE5LjUgNjggODIgNDkuMiAxMTkuNSA2OGMxNi40IDkuNCAzNS4yIDkuNCA1MS42IDBMODkwLjIgNTM0YzE2LjQtOS40IDI1LjgtMjUuOCAyNS44LTQ2LjlWMjgzLjJjMC0xNi40LTkuNC0zMi44LTI1LjgtNDIuMkw3MTIuMSAxMzcuOWMtMTYuNC05LjQtMzUuMi05LjQtNTEuNiAwTDQ4NC43IDI0MWMtMTYuNCA5LjQtMjUuOCAyNS44LTI1LjggNDYuOXY3NWw4MiA0OS4ydi03Mi43YzAtMjEuMSA5LjQtMzcuNSAyNS44LTQ2LjlsOTMuOC01Ni4zYzE2LjQtOS40IDM1LjItOS40IDUxLjYgMGw5My44IDUzLjljMTQuMSA5LjQgMjUuOCAyNS44IDI1LjggNDYuOXYxMDhjMCAyMS4xLTExLjcgMzcuNS0yNS44IDQ2LjlsLTkzLjggNTYuM2MtMTQuMSA5LjQtMzUuMiA5LjQtNTEuNiAwTDU0MSA0NzUuNGwtODItNDYuOS0xMjQuMi03Mi43Yy0xNC4xLTkuNC0zNS4yLTkuNC01MS42IDAtLjEuMS0xNzEuMiAxMDMuMi0xNzMuNSAxMDMuMnoiIGZpbGw9IiM4MjQ3ZTUiLz48L3N2Zz4=',
  currency: {
    name: 'Polygon',
    symbol: 'MATIC',
    decimals: 18,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    logo: currencyLogo
  },
  wrapped: {
    address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    logo: wrappedLogo,
  },
  stables: { // max. 2 per fiat currency
    usd: ['0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359', '0xc2132D05D31c914a87C6611C10748AEb04B58e8F']
  },
  explorer: 'https://polygonscan.com',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://polygonscan.com/tx/${transaction.id || transaction}` }
    if(token) { return `https://polygonscan.com/token/${token}` }
    if(address) { return `https://polygonscan.com/address/${address}` }
  },
  endpoints: [ // make sure provider supports batch size of 99 batch requests!
    'https://polygon-rpc.com',
    'https://polygon.meowrpc.com',
    'https://polygon-bor.publicnode.com'
  ],
  tokens: [ // only major tokens
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "MATIC", "name": "Polygon", "decimals": 18, "logo": currencyLogo, "type": "NATIVE"},
    {"address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", "symbol": "WMATIC", "name": "Wrapped Matic", "decimals": 18, "logo": wrappedLogo, "type": "20"},
    {"address": "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
    {"address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
    {"address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
    {"address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png", "type": "20"},
    {"address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png", "type": "20"},
    {"address": "0xf6261529C6C2fBEB313aB25cDEcD243613b40EB5", "symbol": "DEPAY", "name": "DePay", "decimals": 18, "logo": "https://depay.com/favicon.png", "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
}
