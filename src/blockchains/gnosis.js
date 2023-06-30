const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojM0U2OTU3O30KPC9zdHlsZT4KPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgoJPGcgaWQ9Il8yMjM0NDYzMDM5NzQ0Ij4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzM1LDE0MjNjNzIsMCwxNDItMjQsMTk5LTY4TDQ3OCw4OTljLTExMCwxNDItODQsMzQ2LDU4LDQ1NmM1Nyw0MywxMjcsNjcsMTk5LDY3bDAsMFYxNDIzeiI+PC9wYXRoPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMDkwLDEwOThjMC03Mi0yNC0xNDItNjgtMTk5bC00NTYsNDU2YzE0MiwxMTAsMzQ2LDg0LDQ1Ni01OEMyMDY2LDEyNDAsMjA5MCwxMTcwLDIwOTAsMTA5OHoiPjwvcGF0aD4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjMyMCw2MDJsLTIwMiwyMDJjMTYyLDE5NSwxMzcsNDg0LTU4LDY0N2MtMTcxLDE0My00MTgsMTQzLTU4OSwwbC0yMjEsMjIxbC0yMjEtMjIxICAgIGMtMTk1LDE2Mi00ODQsMTM3LTY0Ny01OGMtMTQzLTE3MS0xNDMtNDE4LDAtNTg5TDI3OSw3MDFsLTk4LTk5QzYyLDc5NywwLDEwMjEsMCwxMjUwYzAsNjkwLDU2MCwxMjUwLDEyNTAsMTI1MCAgICBzMTI1MC01NjAsMTI1MC0xMjUwQzI1MDEsMTAyMiwyNDM3LDc5NywyMzIwLDYwMnoiPjwvcGF0aD4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjE1NCwzODdDMTY3OC0xMTIsODg3LTEzMSwzODgsMzQ1Yy0xNSwxNC0yOSwyOC00Miw0MmMtMzEsMzMtNjAsNjctODgsMTAybDk5Miw5OTJsOTkyLTk5MiAgICBDMjIxNSw0NTMsMjE4NSw0MTksMjE1NCwzODd6IE0xMjUwLDE2M2MyOTIsMCw1NjQsMTEzLDc2OSwzMThsLTc2OSw3NjlMNDgxLDQ4MUM2ODUsMjc1LDk1OCwxNjMsMTI1MCwxNjN6Ij48L3BhdGg+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=='
const wrappedLogo = 'https://cdn.sushi.com/image/upload/f_auto,c_limit,w_32,q_auto/native-currency/xdai.svg'

export default {
  name: 'gnosis',
  id: '0x64',
  networkId: '100',
  namespace: 'eip155',
  label: 'Gnosis',
  fullName: 'Gnosis Chain',
  logo,
  currency: {
    name: 'xDAI',
    symbol: 'xDAI',
    decimals: 18,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    logo: 'https://cdn.sushi.com/image/upload/f_auto,c_limit,w_32,q_auto/native-currency/xdai.svg'
  },
  wrapped: {
    address: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    logo: wrappedLogo
  },
  stables: { // max. 3 per fiat currency
    usd: ['0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', '0x4ECaBa5870353805a9F068101A40E0f32ed605C6', '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83']
  },
  explorer: 'https://gnosisscan.io',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://gnosisscan.io/tx/${transaction.id || transaction}` }
    if(token) { return `https://gnosisscan.io/token/${token}` }
    if(address) { return `https://gnosisscan.io/address/${address}` }
  },
  endpoints: [ // make sure provider supports batch size of 99 batch requests!
    'https://rpc.gnosis.gateway.fm',
    'https://rpc.gnosischain.com',
    'https://gnosis.blockpi.network/v1/rpc/public'
  ],
  tokens: [ // only major tokens
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "xDAI", "name": "xDAI", "decimals": 18, "logo": 'https://cdn.sushi.com/image/upload/f_auto,c_limit,w_32,q_auto/native-currency/xdai.svg', "type": "NATIVE"},
    {"address": "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d", "symbol": "WXDAI", "name": "Wrapped XDAI", "decimals": 18, "logo": wrappedLogo, "type": "20"},
    {"address": "0x4ECaBa5870353805a9F068101A40E0f32ed605C6", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png', "type": "20"},
    {"address": "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png', "type": "20"},
    {"address": "0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb", "symbol": "GNO", "name": "Gnosis", "decimals": 18, "logo": 'https://cdn.sushi.com/image/upload/f_auto,c_limit,w_16,q_auto/tokens/100/0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb.jpg', "type": "20"},
    {"address": "0xD057604A14982FE8D88c5fC25Aac3267eA142a08", "symbol": "HOPR", "name": "HOPR", "decimals": 18, "logo": 'https://hoprnet.org/assets/icons/hopr_icon.svg', "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
}
