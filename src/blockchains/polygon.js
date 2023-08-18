const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxvZ28iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MzEuNiA3MzEuNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzMxLjYgNzMxLjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO2ZpbGwtb3BhY2l0eTowLjYwMjt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjtmaWxsLW9wYWNpdHk6MC4yO30KPC9zdHlsZT4KPHBvbHlnb24gaWQ9IlBhdGgiIGNsYXNzPSJzdDAiIHBvaW50cz0iMzc3LjIsOTEuNCAzNzcuMiwyOTQuMiA1NDguNiwzNzAuOCAiLz4KPHBvbHlnb24gaWQ9IlBhdGhfMV8iIGNsYXNzPSJzdDEiIHBvaW50cz0iMzc3LjIsOTEuNCAyMDUuOCwzNzAuOCAzNzcuMiwyOTQuMiAiLz4KPHBvbHlnb24gaWQ9IlBhdGhfMl8iIGNsYXNzPSJzdDAiIHBvaW50cz0iMzc3LjIsNTAyLjIgMzc3LjIsNjQwIDU0OC43LDQwMi43ICIvPgo8cG9seWdvbiBpZD0iUGF0aF8zXyIgY2xhc3M9InN0MSIgcG9pbnRzPSIzNzcuMiw2NDAgMzc3LjIsNTAyLjIgMjA1LjgsNDAyLjcgIi8+Cjxwb2x5Z29uIGlkPSJQYXRoXzRfIiBjbGFzcz0ic3QyIiBwb2ludHM9IjM3Ny4yLDQ3MC4zIDU0OC42LDM3MC44IDM3Ny4yLDI5NC4yICIvPgo8cG9seWdvbiBpZD0iUGF0aF81XyIgY2xhc3M9InN0MCIgcG9pbnRzPSIyMDUuOCwzNzAuOCAzNzcuMiw0NzAuMyAzNzcuMiwyOTQuMiAiLz4KPC9zdmc+Cg=='
const currencyLogo = "https://app.uniswap.org/static/media/matic-token-icon.da7b877d41122a55de4a43760bb4c8e5.svg"
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
  stables: { // max. 3 per fiat currency
    usd: ['0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063']
  },
  explorer: 'https://polygonscan.com',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://polygonscan.com/tx/${transaction.id || transaction}` }
    if(token) { return `https://polygonscan.com/token/${token}` }
    if(address) { return `https://polygonscan.com/address/${address}` }
  },
  endpoints: [ // make sure provider supports batch size of 99 batch requests!
    'https://polygon-rpc.com',
    'https://poly-rpc.gateway.pokt.network',
    'https://polygon.llamarpc.com'
  ],
  tokens: [ // only major tokens
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "MATIC", "name": "Polygon", "decimals": 18, "logo": currencyLogo, "type": "NATIVE"},
    {"address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", "symbol": "WMATIC", "name": "Wrapped Matic", "decimals": 18, "logo": wrappedLogo, "type": "20"},
    {"address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
    {"address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
    {"address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
    {"address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png", "type": "20"},
    {"address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png", "type": "20"},
    {"address": "0xf6261529C6C2fBEB313aB25cDEcD243613b40EB5", "symbol": "DEPAY", "name": "DePay", "decimals": 18, "logo": "https://depay.com/favicon.png", "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
}
