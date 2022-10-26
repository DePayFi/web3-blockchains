const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzAwMDAwMDQ0MTY4MjQyNjgwOTUxMTcwMjEwMDAwMDE4MTQxNDU5MTUzNDQ3NTY5NTg4Xyk7fQoJLnN0MntmaWxsOnVybCgjU1ZHSURfMDAwMDAxNjczOTQ0NzMyOTQ3Njk0ODc1NTAwMDAwMDAyNjQ3ODM4NzY5MjQ5MjE0OTNfKTt9Cjwvc3R5bGU+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzUuNTk3NCIgeTE9Ijc3Mi45Mjc3IiB4Mj0iMTguMTQyMiIgeTI9IjgwNi4zNjE2IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMCAtNzY1Ljc2NSkiPgoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwRkZBMyIvPgoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0RDMUZGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTIsMjkuMWMwLjItMC4yLDAuNS0wLjMsMC43LTAuM0gzOGMwLjUsMCwwLjcsMC42LDAuNCwwLjlsLTUsNWMtMC4yLDAuMi0wLjUsMC4zLTAuNywwLjNINy40CglDNi45LDM1LDYuNywzNC40LDcsMzRMMTIsMjkuMXoiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8wMDAwMDE2MDg2OTcyMjIyOTQ2NDM5OTczMDAwMDAwOTQwNzAyMTU3ODI0ODA4NzcxMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjcuOTU5NSIgeTE9Ijc2OS4xMjQ0IiB4Mj0iMTAuNTA0MyIgeTI9IjgwMi41NTgyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMCAtNzY1Ljc2NSkiPgoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwRkZBMyIvPgoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0RDMUZGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzAwMDAwMTYwODY5NzIyMjI5NDY0Mzk5NzMwMDAwMDA5NDA3MDIxNTc4MjQ4MDg3NzExXyk7IiBkPSJNMTIsMTAuNmMwLjItMC4yLDAuNS0wLjMsMC43LTAuM0gzOAoJYzAuNSwwLDAuNywwLjYsMC40LDAuOWwtNSw1Yy0wLjIsMC4yLTAuNSwwLjMtMC43LDAuM0g3LjRjLTAuNSwwLTAuNy0wLjYtMC40LTAuOUwxMiwxMC42eiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzAwMDAwMTM5MjgzMjE3Mzc4NjU2MDk0ODYwMDAwMDAzNjk0ODk1Mzc5MDc4MTE2NzgyXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzMS43NDA2IiB5MT0iNzcxLjA5ODUiIHgyPSIxNC4yODU1IiB5Mj0iODA0LjUzMjMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIC03NjUuNzY1KSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBGRkEzIi8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojREMxRkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMDAwMDAxMzkyODMyMTczNzg2NTYwOTQ4NjAwMDAwMDM2OTQ4OTUzNzkwNzgxMTY3ODJfKTsiIGQ9Ik0zMy40LDE5LjhjLTAuMi0wLjItMC41LTAuMy0wLjctMC4zSDcuNAoJYy0wLjUsMC0wLjcsMC42LTAuNCwwLjlsNSw1YzAuMiwwLjIsMC41LDAuMywwLjcsMC4zSDM4YzAuNSwwLDAuNy0wLjYsMC40LTAuOUwzMy40LDE5Ljh6Ii8+Cjwvc3ZnPgo='

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
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://solscan.io/tx/${transaction.id || transaction}` }
    if(token) { return `https://solscan.io/token/${token}` }
    if(address) { return `https://solscan.io/address/${address}` }
  },
  rpc: 'https://api.mainnet-beta.solana.com',
  tokens: [ // only major tokens
    {"address": "11111111111111111111111111111111", "symbol": "SOL", "name": "Solana", "decimals": 9, "logo": logo, "type": "NATIVE"},
    {"address": "So11111111111111111111111111111111111111112", "symbol": "WSOL", "name": "Wrapped SOL", "decimals": 9, "logo": "https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png", "type": "SPL"},
    {"address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://img.raydium.io/icon/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png", "type": "SPL"},
    {"address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "symbol": "USDT", "name": "USDT", "decimals": 6, "logo": "https://img.raydium.io/icon/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.png", "type": "SPL"}
  ]
}
