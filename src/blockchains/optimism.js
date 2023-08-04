import ethereum from './ethereum'

const logo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUgNTBDMzguODA3MSA1MCA1MCAzOC44MDcxIDUwIDI1QzUwIDExLjE5MjkgMzguODA3MSAwIDI1IDBDMTEuMTkyOSAwIDAgMTEuMTkyOSAwIDI1QzAgMzguODA3MSAxMS4xOTI5IDUwIDI1IDUwWk0xNS41OTEgMzEuODY3QzE2LjI3NSAzMi4wODIzIDE3LjAxNiAzMi4xOSAxNy44MTQgMzIuMTlDMTkuNjUwNyAzMi4xOSAyMS4xMTM3IDMxLjc2NTcgMjIuMjAzIDMwLjkxN0MyMy4yOTIzIDMwLjA1NTcgMjQuMDUyMyAyOC43NTczIDI0LjQ4MyAyNy4wMjJDMjQuNjA5NyAyNi40NzczIDI0LjczIDI1LjkzMjcgMjQuODQ0IDI1LjM4OEMyNC45NzA3IDI0Ljg0MzMgMjUuMDc4MyAyNC4yOTIzIDI1LjE2NyAyMy43MzVDMjUuMzE5IDIyLjg3MzcgMjUuMjkzNyAyMi4xMiAyNS4wOTEgMjEuNDc0QzI0LjkwMSAyMC44MjggMjQuNTY1MyAyMC4yODMzIDI0LjA4NCAxOS44NEMyMy42MTUzIDE5LjM5NjcgMjMuMDM5IDE5LjA2NzMgMjIuMzU1IDE4Ljg1MkMyMS42ODM3IDE4LjYyNCAyMC45NDkgMTguNTEgMjAuMTUxIDE4LjUxQzE4LjMwMTcgMTguNTEgMTYuODMyMyAxOC45NTMzIDE1Ljc0MyAxOS44NEMxNC42NTM3IDIwLjcyNjcgMTMuOSAyMi4wMjUgMTMuNDgyIDIzLjczNUMxMy4zNTUzIDI0LjI5MjMgMTMuMjI4NyAyNC44NDMzIDEzLjEwMiAyNS4zODhDMTIuOTg4IDI1LjkzMjcgMTIuODgwMyAyNi40NzczIDEyLjc3OSAyNy4wMjJDMTIuNjM5NyAyNy44ODMzIDEyLjY2NSAyOC42MzcgMTIuODU1IDI5LjI4M0MxMy4wNTc3IDI5LjkyOSAxMy4zOTMzIDMwLjQ2NzMgMTMuODYyIDMwLjg5OEMxNC4zMzA3IDMxLjMyODcgMTQuOTA3IDMxLjY1MTcgMTUuNTkxIDMxLjg2N1pNMTkuODY2IDI4Ljg0NkMxOS4zNDY3IDI5LjI1MTMgMTguNzQ1IDI5LjQ1NCAxOC4wNjEgMjkuNDU0QzE3LjM2NDMgMjkuNDU0IDE2Ljg2NCAyOS4yNTEzIDE2LjU2IDI4Ljg0NkMxNi4yNTYgMjguNDQwNyAxNi4xOCAyNy43OTQ3IDE2LjMzMiAyNi45MDhDMTYuNDMzMyAyNi4zNTA3IDE2LjUzNDcgMjUuODI1IDE2LjYzNiAyNS4zMzFDMTYuNzUgMjQuODM3IDE2Ljg3NjcgMjQuMzI0IDE3LjAxNiAyMy43OTJDMTcuMjMxMyAyMi45MDUzIDE3LjU5MjMgMjIuMjU5MyAxOC4wOTkgMjEuODU0QzE4LjYxODMgMjEuNDQ4NyAxOS4yMiAyMS4yNDYgMTkuOTA0IDIxLjI0NkMyMC41ODggMjEuMjQ2IDIxLjA4ODMgMjEuNDQ4NyAyMS40MDUgMjEuODU0QzIxLjcyMTcgMjIuMjU5MyAyMS43OTc3IDIyLjkwNTMgMjEuNjMzIDIzLjc5MkMyMS41NDQzIDI0LjMyNCAyMS40NDMgMjQuODM3IDIxLjMyOSAyNS4zMzFDMjEuMjI3NyAyNS44MjUgMjEuMTA3MyAyNi4zNTA3IDIwLjk2OCAyNi45MDhDMjAuNzUyNyAyNy43OTQ3IDIwLjM4NTMgMjguNDQwNyAxOS44NjYgMjguODQ2Wk0yNS42NDA0IDMxLjg2N0MyNS43MTY0IDMxLjk1NTcgMjUuODE3NyAzMiAyNS45NDQ0IDMySDI4LjUyODRDMjguNjY3NyAzMiAyOC43ODggMzEuOTU1NyAyOC44ODk0IDMxLjg2N0MyOS4wMDM0IDMxLjc3ODMgMjkuMDczIDMxLjY2NDMgMjkuMDk4NCAzMS41MjVMMjkuOTcyNCAyNy4zNjRIMzIuNTM3NEMzNC4xNzE0IDI3LjM2NCAzNS40Njk3IDI3LjAxNTcgMzYuNDMyNCAyNi4zMTlDMzcuNDA3NyAyNS42MjIzIDM4LjA1MzcgMjQuNTQ1NyAzOC4zNzA0IDIzLjA4OUMzOC41MjI0IDIyLjM1NDMgMzguNTE2IDIxLjcxNDcgMzguMzUxNCAyMS4xN0MzOC4xODY3IDIwLjYxMjcgMzcuODk1NCAyMC4xNTAzIDM3LjQ3NzQgMTkuNzgzQzM3LjA1OTQgMTkuNDE1NyAzNi41MzM3IDE5LjE0MzMgMzUuOTAwNCAxOC45NjZDMzUuMjc5NyAxOC43ODg3IDM0LjU4MyAxOC43IDMzLjgxMDQgMTguN0gyOC43NTY0QzI4LjYyOTcgMTguNyAyOC41MDk0IDE4Ljc0NDMgMjguMzk1NCAxOC44MzNDMjguMjgxNCAxOC45MjE3IDI4LjIxMTcgMTkuMDM1NyAyOC4xODY0IDE5LjE3NUwyNS41NjQ0IDMxLjUyNUMyNS41MzkgMzEuNjY0MyAyNS41NjQ0IDMxLjc3ODMgMjUuNjQwNCAzMS44NjdaTTMyLjY1MTQgMjQuNzQySDMwLjQ2NjRMMzEuMjA3NCAyMS4zNDFIMzMuNDg3NEMzMy45NDM0IDIxLjM0MSAzNC4yNzkgMjEuNDE3IDM0LjQ5NDQgMjEuNTY5QzM0LjcyMjQgMjEuNzIxIDM0Ljg1NTQgMjEuOTIzNyAzNC44OTM0IDIyLjE3N0MzNC45MzE0IDIyLjQzMDMgMzQuOTE4NyAyMi43MjE3IDM0Ljg1NTQgMjMuMDUxQzM0LjcyODcgMjMuNjIxIDM0LjQ1NjQgMjQuMDQ1MyAzNC4wMzg0IDI0LjMyNEMzMy42MzMgMjQuNjAyNyAzMy4xNzA3IDI0Ljc0MiAzMi42NTE0IDI0Ljc0MloiIGZpbGw9IiNGRjA0MjAiLz4KPC9zdmc+Cg=='

export default {
  name: 'optimism',
  id: '0xa',
  networkId: '10',
  namespace: 'eip155',
  label: 'Optimism',
  fullName: 'Optimism',
  logo,
  currency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    logo: ethereum.logo
  },
  wrapped: {
    address: '0x4200000000000000000000000000000000000006',
    logo: ethereum.wrapped.logo
  },
  stables: { // max. 3 per fiat currency
    usd: ['0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1']
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
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.logo, "type": "NATIVE"},
    {"address": "0x4200000000000000000000000000000000000006", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
    {"address": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x94b008aA00579c1307B0EF2c499aD98a8ce58e58/logo.png', "type": "20"},
    {"address": "0x7F5c764cBc14f9669B88837ca1490cCa17c31607", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x7F5c764cBc14f9669B88837ca1490cCa17c31607/logo.png', "type": "20"},
    {"address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png', "type": "20"},
    {"address": "0x4200000000000000000000000000000000000042", "symbol": "OP", "name": "Optimism", "decimals": 18, "logo": 'https://user-images.githubusercontent.com/1300064/219575413-d7990d69-1d21-44ef-a2b1-e9c682c79802.svg', "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
}
