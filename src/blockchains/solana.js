const logo = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDF7ZmlsbDp1cmwoI1NWR0lEXzAwMDAwMDE5Njc2ODQzODE5NzI3MzAwODIwMDAwMDA1OTQ3NjMyODMzODYxMjM4OTE3Xyl9LnN0MntmaWxsOnVybCgjU1ZHSURfMDAwMDAwNjQzMjA1MjE4MTcxODM4NzM1NjAwMDAwMDMxNzkyNDIxNTkzMzkwODM5NjdfKX08L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iODE1Ljg1NiIgeTE9IjcwLjgyNCIgeDI9IjM4OC4zMzYiIHkyPSItNzQ4LjA1MiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDE5MS40MzUpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGZmYTMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkYzFmZmYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0yMzcuOSA2NTcuOWM0LjktNC45IDEyLjItNy4zIDE3LjEtNy4zaDYxOS43YzEyLjIgMCAxNy4xIDE0LjcgOS44IDIyTDc2Mi4xIDc5NS4xYy00LjkgNC45LTEyLjIgNy4zLTE3LjEgNy4zSDEyNS4zYy0xMi4yIDAtMTcuMS0xNC43LTkuOC0yNC41bDEyMi40LTEyMHoiIGZpbGw9InVybCgjU1ZHSURfMV8pIi8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8wMDAwMDE1MDgxNTQ0MzI2NzI2OTc2MDQ0MDAwMDAxMzQ2MDgyNDM3MDQwMzE3MjU0M18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNjI4LjQ4MSIgeTE9IjE2NC4xMzQiIHgyPSIyMDAuOTYyIiB5Mj0iLTY1NC43NCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDE5MS40MzUpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGZmYTMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkYzFmZmYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0yMzcuOSAyMDQuOGM0LjktNC45IDEyLjItNy4zIDE3LjEtNy4zaDYxOS43YzEyLjIgMCAxNy4xIDE0LjcgOS44IDIyTDc2Mi4xIDM0MmMtNC45IDQuOS0xMi4yIDcuMy0xNy4xIDcuM0gxMjUuM2MtMTIuMiAwLTE3LjEtMTQuNy05LjgtMjJsMTIyLjQtMTIyLjV6IiBmaWxsPSJ1cmwoI1NWR0lEXzAwMDAwMTUwODE1NDQzMjY3MjY5NzYwNDQwMDAwMDEzNDYwODI0MzcwNDAzMTcyNTQzXykiLz48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzAwMDAwMDA3NDA5ODc3MzYzMTA0OTgxNjMwMDAwMDE1MTMzNzA1NTcwNjgwMDk3NzA5XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI3MjAuOTIzIiB5MT0iMTE1Ljg3IiB4Mj0iMjkzLjQwNiIgeTI9Ii03MDMuMDAzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTkxLjQzNSkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwZmZhMyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2RjMWZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTc2Mi4xIDQzMC4xYy00LjktNC45LTEyLjItNy4zLTE3LjEtNy4zSDEyNS4zYy0xMi4yIDAtMTcuMSAxNC43LTkuOCAyMkwyMzggNTY3LjNjNC45IDQuOSAxMi4yIDcuMyAxNy4xIDcuM2g2MTkuN2MxMi4yIDAgMTcuMS0xNC43IDkuOC0yMkw3NjIuMSA0MzAuMXoiIGZpbGw9InVybCgjU1ZHSURfMDAwMDAwMDc0MDk4NzczNjMxMDQ5ODE2MzAwMDAwMTUxMzM3MDU1NzA2ODAwOTc3MDlfKSIvPjwvc3ZnPgo='
const currencyLogo = 'https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png'

export default {
  name: 'solana',
  networkId: 'solana',
  namespace: 'solana',
  label: 'Solana',
  fullName: 'Solana Mainnet Beta',
  logo,
  logoBackgroundColor: '#000000',
  logoWhiteBackground: logo,
  currency: {
    name: 'Solana',
    symbol: 'SOL',
    decimals: 9,
    address: '11111111111111111111111111111111',
    logo: currencyLogo,
  },
  wrapped: {
    address: 'So11111111111111111111111111111111111111112',
    logo: currencyLogo,
  },
  stables: { // max. 2 per fiat currency
    usd: ['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB']
  },
  explorer: 'https://solscan.io',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://solscan.io/tx/${transaction.id || transaction}` }
    if(token) { return `https://solscan.io/token/${token}` }
    if(address) { return `https://solscan.io/address/${address}` }
  },
  endpoints: [
    'https://solana.a.exodus.io',
    'https://mainnet-beta.solflare.network',
    'https://swr.xnftdata.com/rpc-proxy'
  ],
  sockets: [
    'wss://solana.drpc.org',
    'wss://mainnet-beta.solflare.network',
    'wss://solana.a.exodus.io'
  ],
  tokens: [ // only major tokens
    {"address": "11111111111111111111111111111111", "symbol": "SOL", "name": "Solana", "decimals": 9, "logo": currencyLogo, "type": "NATIVE"},
    {"address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://img.raydium.io/icon/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png", "type": "SPL"},
    {"address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "symbol": "USDT", "name": "USDT", "decimals": 6, "logo": "https://img.raydium.io/icon/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.png", "type": "SPL"},
    {"address": "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj", "symbol": "stSOL", "name": "Lido Staked SOL", "decimals": 9, "logo": "https://img.raydium.io/icon/7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj.png", "type": "SPL"},
    {"address": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263", "symbol": "BONK", "name": "BONK", "decimals": 5, "logo": "https://img.raydium.io/icon/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263.png", "type": "SPL"},
    {"address": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU", "symbol": "SAMO", "name": "Samoyed Coin", "decimals": 9, "logo": "https://img.raydium.io/icon/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU.png", "type": "SPL"},
    {"address": "DePay1miDBPWXs6PVQrdC5Vch2jemgEPaiyXLNLLa2NF", "symbol": "DEPAY", "name": "DePay", "decimals": 9, "logo": "https://depay.com/favicon.png", "type": "SPL"},
  ],
  zero: '0',
  maxInt: '340282366920938463463374607431768211455',
}
