const logo = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM5Ny43IDMxMS43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzOTcuNyAzMTEuNyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGxpbmVhckdyYWRpZW50IGlkPSJ3ZWIzX2Jsb2NrY2hhaW5zX3NvbGFuYV9ncmFkaWVudF8xIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI5MS44NTQiIHkxPSIxNC4zNTkiIHgyPSIxNjUuNzY4IiB5Mj0iMjU1Ljg2NiIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwIDMwLjUzNSkiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwZmZhMyIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I2RjMWZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTEyMS44IDIwMi45YzEuNC0xLjQgMy4zLTIuMiA1LjMtMi4yaDE4Mi4yYzMuMyAwIDUgNCAyLjYgNi40bC0zNiAzNmMtMS40IDEuNC0zLjMgMi4yLTUuMyAyLjJIODguNGMtMy4zIDAtNS00LTIuNi02LjRsMzYtMzZ6IiBzdHlsZT0iZmlsbDp1cmwoI3dlYjNfYmxvY2tjaGFpbnNfc29sYW5hX2dyYWRpZW50XzEpIi8+PGxpbmVhckdyYWRpZW50IGlkPSJ3ZWIzX2Jsb2NrY2hhaW5zX3NvbGFuYV9ncmFkaWVudF8yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIzNi43MjciIHkxPSItMTQuNDIyIiB4Mj0iMTEwLjY0MSIgeTI9IjIyNy4wODUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAzMC41MzUpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMGZmYTMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNkYzFmZmYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjd2ViM19ibG9ja2NoYWluc19zb2xhbmFfZ3JhZGllbnRfMikiIGQ9Ik0xMjEuOCA2OC42YzEuNC0xLjQgMy4zLTIuMiA1LjMtMi4yaDE4Mi4yYzMuMyAwIDUgNCAyLjYgNi40bC0zNiAzNmMtMS40IDEuNC0zLjMgMi4yLTUuMyAyLjJIODguNGMtMy4zIDAtNS00LTIuNi02LjRsMzYtMzZ6Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJ3ZWIzX2Jsb2NrY2hhaW5zX3NvbGFuYV9ncmFkaWVudF8zIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI2NC4xMTQiIHkxPSItLjEyMyIgeDI9IjEzOC4wMjgiIHkyPSIyNDEuMzgzIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzAuNTM1KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBmZmEzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojZGMxZmZmIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBzdHlsZT0iZmlsbDp1cmwoI3dlYjNfYmxvY2tjaGFpbnNfc29sYW5hX2dyYWRpZW50XzMpIiBkPSJNMjc1LjkgMTM1LjNjLTEuNC0xLjQtMy4zLTIuMi01LjMtMi4ySDg4LjRjLTMuMyAwLTUgNC0yLjYgNi40bDM2IDM2YzEuNCAxLjQgMy4zIDIuMiA1LjMgMi4yaDE4Mi4yYzMuMyAwIDUtNCAyLjYtNi40bC0zNi0zNnoiLz48L3N2Zz4K'

export default {
  name: 'solana',
  networkId: 'mainnet-beta',
  label: 'Solana',
  fullName: 'Solana',
  logo,
  currency: {
    name: 'Solana',
    symbol: 'SOL',
    decimals: 9
  },
  explorer: 'https://solscan.io',
  explorerUrlFor: ({ transaction, token })=>{
    if(transaction) { return `https://solscan.io/tx/${transaction.id}` }
    if(token) { return `https://solscan.io/token/${token}` }
  },
  rpc: 'https://api.mainnet-beta.solana.com',
  tokens: [ // only major tokens
    {"address": "11111111111111111111111111111111", "symbol": "SOL", "name": "Solana", "decimals": 9, "logo": logo, "type": "NATIVE"},
    {"address": "So11111111111111111111111111111111111111112", "symbol": "WSOL", "name": "Wrapped SOL", "decimals": 9, "logo": "https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png", "type": "SPL"},
    {"address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://img.raydium.io/icon/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png", "type": "SPL"},
    {"address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "symbol": "USDT", "name": "USDT", "decimals": 6, "logo": "https://img.raydium.io/icon/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.png", "type": "SPL"}
  ]
}
