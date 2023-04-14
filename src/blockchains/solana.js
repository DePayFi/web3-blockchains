const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNPTEFOQV9TVkdJRF8xIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM1LjU5NzQiIHkxPSI3NzIuOTI3NyIgeDI9IjE4LjE0MjIiIHkyPSI4MDYuMzYxNiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDAgLTc2NS43NjUpIj4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEZGQTMiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzFGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggZmlsbD0idXJsKCNTT0xBTkFfU1ZHSURfMSkiIGQ9Ik0xMiwyOS4xYzAuMi0wLjIsMC41LTAuMywwLjctMC4zSDM4YzAuNSwwLDAuNywwLjYsMC40LDAuOWwtNSw1Yy0wLjIsMC4yLTAuNSwwLjMtMC43LDAuM0g3LjQKCUM2LjksMzUsNi43LDM0LjQsNywzNEwxMiwyOS4xeiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzAwMDAwMTYwODY5NzIyMjI5NDY0Mzk5NzMwMDAwMDA5NDA3MDIxNTc4MjQ4MDg3NzExXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNy45NTk1IiB5MT0iNzY5LjEyNDQiIHgyPSIxMC41MDQzIiB5Mj0iODAyLjU1ODIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIC03NjUuNzY1KSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBGRkEzIi8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojREMxRkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMDAwMDAxNjA4Njk3MjIyMjk0NjQzOTk3MzAwMDAwMDk0MDcwMjE1NzgyNDgwODc3MTFfKTsiIGQ9Ik0xMiwxMC42YzAuMi0wLjIsMC41LTAuMywwLjctMC4zSDM4CgljMC41LDAsMC43LDAuNiwwLjQsMC45bC01LDVjLTAuMiwwLjItMC41LDAuMy0wLjcsMC4zSDcuNGMtMC41LDAtMC43LTAuNi0wLjQtMC45TDEyLDEwLjZ6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMDAwMDAxMzkyODMyMTczNzg2NTYwOTQ4NjAwMDAwMDM2OTQ4OTUzNzkwNzgxMTY3ODJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjMxLjc0MDYiIHkxPSI3NzEuMDk4NSIgeDI9IjE0LjI4NTUiIHkyPSI4MDQuNTMyMyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDAgLTc2NS43NjUpIj4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEZGQTMiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzFGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8wMDAwMDEzOTI4MzIxNzM3ODY1NjA5NDg2MDAwMDAwMzY5NDg5NTM3OTA3ODExNjc4Ml8pOyIgZD0iTTMzLjQsMTkuOGMtMC4yLTAuMi0wLjUtMC4zLTAuNy0wLjNINy40CgljLTAuNSwwLTAuNywwLjYtMC40LDAuOWw1LDVjMC4yLDAuMiwwLjUsMC4zLDAuNywwLjNIMzhjMC41LDAsMC43LTAuNiwwLjQtMC45TDMzLjQsMTkuOHoiLz4KPC9zdmc+Cg=='

export default {
  name: 'solana',
  networkId: 'mainnetBeta',
  namespace: 'solana',
  label: 'Solana',
  fullName: 'Solana',
  logo,
  currency: {
    name: 'Solana',
    symbol: 'SOL',
    decimals: 9,
    address: '11111111111111111111111111111111'
  },
  wrapped: {
    address: 'So11111111111111111111111111111111111111112'
  },
  stables: { // max. 3 per fiat currency
    usd: ['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB']
  },
  explorer: 'https://solscan.io',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://solscan.io/tx/${transaction.id || transaction}` }
    if(token) { return `https://solscan.io/token/${token}` }
    if(address) { return `https://solscan.io/address/${address}` }
  },
  rpc: 'https://api.mainnet-beta.solana.com',
  tokens: [ // only major tokens
    {"address": "11111111111111111111111111111111", "symbol": "SOL", "name": "Solana", "decimals": 9, "logo": logo, "type": "NATIVE"},
    {"address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://img.raydium.io/icon/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png", "type": "SPL"},
    {"address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "symbol": "USDT", "name": "USDT", "decimals": 6, "logo": "https://img.raydium.io/icon/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.png", "type": "SPL"},
    {"address": "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj", "symbol": "stSOL", "name": "Lido Staked SOL", "decimals": 9, "logo": "https://img.raydium.io/icon/7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj.png", "type": "SPL"},
    {"address": "9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E", "symbol": "wBTC", "name": "Wrapped Bitcoin (Sollet)", "decimals": 6, "logo": "https://img.raydium.io/icon/9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E.png", "type": "SPL"},
    {"address": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263", "symbol": "BONK", "name": "BONK", "decimals": 5, "logo": "https://img.raydium.io/icon/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263.png", "type": "SPL"},
  ],
  zero: '0',
  maxInt: '340282366920938463463374607431768211455',
}
