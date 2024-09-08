const logo = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzMgMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zMC43MTk1IDkuNzgxNjZDMjkuOTA5NyA3Ljg4MTIyIDI4Ljc2NDcgNi4xNzY0MiAyNy4yODQ1IDQuNjk1MkMyNS44MDQ0IDMuMjEzOTcgMjQuMTI4OCAyLjA2ODEyIDIyLjIyOTggMS4yNTc2NEMyMC4yNDcgMC40MTkyMTQgMTguMTUyNSAwIDE2LjAwMjEgMEMxMy44MjM4IDAgMTEuNzI5MyAwLjQxOTIxNCA5Ljc3NDQgMS4yNTc2NEM3Ljg3NTM3IDIuMDY4MTIgNi4xNzE4NCAzLjIxMzk3IDQuNjkxNzEgNC42OTUyQzMuMjExNTkgNi4xNzY0MiAyLjA2NjU5IDcuODgxMjIgMS4yNTY3MSA5Ljc4MTY2QzAuNDE4OTAzIDExLjczOCAwIDEzLjgzNDEgMCAxNi4wMTRDMCAxOC4xNjU5IDAuNDE4OTAzIDIwLjI2MiAxLjI1NjcxIDIyLjI0NjNDMi4wNjY1OSAyNC4xNDY3IDMuMjExNTkgMjUuODUxNSA0LjY5MTcxIDI3LjMzMjhDNi4xNzE4NCAyOC44MTQgNy44NzUzNyAyOS45NTk4IDkuNzc0NCAzMC43NDI0QzExLjc1NzIgMzEuNTgwOCAxMy44NTE3IDMyIDE2LjAwMjEgMzJDMTguMTUyNSAzMiAyMC4yNDcgMzEuNTgwOCAyMi4yMjk4IDMwLjc0MjRDMjQuMTI4OCAyOS45MzE5IDI1LjgzMjMgMjguNzg2IDI3LjMxMjUgMjcuMzA0OEMyOC43OTI2IDI1LjgyMzYgMjkuOTM3NiAyNC4xMTg4IDMwLjc0NzUgMjIuMjE4M0MzMS41ODUzIDIwLjIzNDEgMzIuMDA0MiAxOC4xMzggMzIuMDA0MiAxNS45ODZDMzIuMDA0MiAxMy44MzQxIDMxLjU1NzQgMTEuNzM4IDMwLjcxOTUgOS43ODE2NlpNMTAuNjk2IDE0LjUwNDhDMTEuMzM4MyAxMS45MzM2IDEzLjY4NDIgMTAuMDYxMSAxNi40NDg5IDEwLjA2MTFIMjcuNTYzOEMyOC4yODk5IDExLjQzMDYgMjguNzM2NyAxMi45Mzk3IDI4LjkwNDMgMTQuNTA0OEgxMC42OTZaTTI4LjkwNDMgMTcuNTIzMUMyOC43MzY3IDE5LjA4ODIgMjguMjYyIDIwLjU5NzQgMjcuNTYzOCAyMS45NjY4SDE2LjQ0ODlDMTMuNjg0MiAyMS45NjY4IDExLjM2NjIgMjAuMDY2NCAxMC42OTYgMTcuNTIzMUgyOC45MDQzWk02LjgxNDE1IDYuODE5MjFDOS4yNzE3MiA0LjM1OTgzIDEyLjUzOTIgMy4wMTgzNCAxNi4wMDIxIDMuMDE4MzRDMTkuNDY1IDMuMDE4MzQgMjIuNzMyNSA0LjM1OTgzIDI1LjE5IDYuODE5MjFDMjUuMjczOCA2LjkwMzA2IDI1LjMyOTcgNi45NTg5NSAyNS40MTM0IDcuMDQyOEgxNi40NDg5QzE0LjA0NzIgNy4wNDI4IDExLjgxMzEgNy45NjUwNyAxMC4xMDk1IDkuNjY5ODdDOC43NjkwMyAxMS4wMTE0IDcuOTAzMyAxMi42ODgyIDcuNjI0MDMgMTQuNTA0OEgzLjA5OTg4QzMuNDM1IDExLjU5ODMgNC43MTk2NCA4LjkxNTI4IDYuODE0MTUgNi44MTkyMVpNMTYuMDAyMSAyOS4wMDk2QzEyLjUzOTIgMjkuMDA5NiA5LjI3MTcyIDI3LjY2ODEgNi44MTQxNSAyNS4yMDg3QzQuNzE5NjQgMjMuMTEyNyAzLjQzNSAyMC40MDE3IDMuMDk5ODggMTcuNTIzMUg3LjYyNDAzQzcuOTMxMjMgMTkuMzM5NyA4Ljc5Njk2IDIxLjAxNjYgMTAuMTA5NSAyMi4zNTgxQzExLjgxMzEgMjQuMDYyOSAxNC4wNDcyIDI0Ljk4NTIgMTYuNDQ4OSAyNC45ODUySDI1LjQxMzRDMjUuMzI5NyAyNS4wNjkgMjUuMjczOCAyNS4xMjQ5IDI1LjE5IDI1LjIwODdDMjIuNzMyNSAyNy42NjgxIDE5LjQ2NSAyOS4wMDk2IDE2LjAwMjEgMjkuMDA5NloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo='
import ethereum from './ethereum'

export default {
  name: 'worldchain',
  id: '0x1e0',
  networkId: '480',
  namespace: 'eip155',
  platform: 'evm',
  label: 'World Chain',
  fullName: 'World Chain Mainnet',
  logo,
  logoBackgroundColor: '#FFFFFF',
  logoWhiteBackground: logo,
  currency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    logo: ethereum.currency.logo,
  },
  wrapped: {
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    logo: ethereum.wrapped.logo,
  },
  stables: { // max. 2 per fiat currency
    usd: []
  },
  explorer: 'https://worldchain-mainnet.explorer.alchemy.com',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://worldchain-mainnet.explorer.alchemy.com/tx/${transaction.id || transaction}` }
    if(token) { return `https://worldchain-mainnet.explorer.alchemy.com/token/${token}` }
    if(address) { return `https://worldchain-mainnet.explorer.alchemy.com/address/${address}` }
  },
  endpoints: [ // make sure provider supports batch size of 99 batch requests!

  ],
  tokens: [ // only major tokens
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.currency.logo, "type": "NATIVE"},
    {"address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3'
}


