const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8Zz4KICAgIDxnPgogICAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjQuNSwxMi40Yy0uNS0xLjEtMS4xLTIuMS0yLTIuOS0uOS0uOS0xLjgtMS41LTIuOS0yLTEuMS0uNS0yLjMtLjctMy42LS43cy0yLjUuMi0zLjYuN2MtMS4xLjUtMi4xLDEuMS0yLjksMi0uOS45LTEuNSwxLjgtMiwyLjktLjUsMS4xLS43LDIuNC0uNywzLjZzLjIsMi40LjcsMy42Yy41LDEuMSwxLjEsMi4xLDIsMi45LjkuOSwxLjgsMS41LDIuOSwyLDEuMS41LDIuNC43LDMuNi43czIuNC0uMiwzLjYtLjdjMS4xLS41LDIuMS0xLjEsMi45LTIsLjktLjksMS41LTEuOCwyLTIuOS41LTEuMS43LTIuNC43LTMuNnMtLjItMi40LS43LTMuNlpNMTMsMTUuMWMuMy0xLjUsMS43LTIuNSwzLjMtMi41aDYuNGMuNC44LjcsMS43LjcsMi41aC0xMC41Wk0yMy40LDE2LjljLS4xLjktLjMsMS44LS43LDIuNWgtNi40Yy0xLjYsMC0yLjktMS4xLTMuMy0yLjUsMCwwLDEwLjUsMCwxMC41LDBaTTEwLjcsMTAuN2MxLjQtMS40LDMuMy0yLjIsNS4zLTIuMnMzLjkuNyw1LjMsMi4yaC4xYzAsLjEtNS4yLjEtNS4yLjEtMS40LDAtMi42LjUtMy42LDEuNS0uNy43LTEuMywxLjctMS40LDIuOGgtMi42Yy4yLTEuNy45LTMuMiwyLjEtNC40aDBaTTE2LDIzLjVjLTIsMC0zLjktLjctNS4zLTIuMi0xLjItMS4yLTItMi44LTIuMS00LjRoMi42Yy4yLDEsLjcsMiwxLjQsMi44LDEsMSwyLjIsMS41LDMuNiwxLjVoNS4yLS4xYy0xLjQsMS42LTMuMywyLjMtNS4zLDIuM2gwWiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=='
const logoWhiteBackground = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8Zz4KICAgIDxnPgogICAgICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMjQuNSwxMi40Yy0uNS0xLjEtMS4xLTIuMS0yLTIuOS0uOS0uOS0xLjgtMS41LTIuOS0yLTEuMS0uNS0yLjMtLjctMy42LS43cy0yLjUuMi0zLjYuN2MtMS4xLjUtMi4xLDEuMS0yLjksMi0uOS45LTEuNSwxLjgtMiwyLjktLjUsMS4xLS43LDIuNC0uNywzLjZzLjIsMi40LjcsMy42Yy41LDEuMSwxLjEsMi4xLDIsMi45LjkuOSwxLjgsMS41LDIuOSwyLDEuMS41LDIuNC43LDMuNi43czIuNC0uMiwzLjYtLjdjMS4xLS41LDIuMS0xLjEsMi45LTIsLjktLjksMS41LTEuOCwyLTIuOS41LTEuMS43LTIuNC43LTMuNnMtLjItMi40LS43LTMuNlpNMTMsMTUuMWMuMy0xLjUsMS43LTIuNSwzLjMtMi41aDYuNGMuNC44LjcsMS43LjcsMi41aC0xMC41Wk0yMy40LDE2LjljLS4xLjktLjMsMS44LS43LDIuNWgtNi40Yy0xLjYsMC0yLjktMS4xLTMuMy0yLjUsMCwwLDEwLjUsMCwxMC41LDBaTTEwLjcsMTAuN2MxLjQtMS40LDMuMy0yLjIsNS4zLTIuMnMzLjkuNyw1LjMsMi4yaC4xYzAsLjEtNS4yLjEtNS4yLjEtMS40LDAtMi42LjUtMy42LDEuNS0uNy43LTEuMywxLjctMS40LDIuOGgtMi42Yy4yLTEuNy45LTMuMiwyLjEtNC40aDBaTTE2LDIzLjVjLTIsMC0zLjktLjctNS4zLTIuMi0xLjItMS4yLTItMi44LTIuMS00LjRoMi42Yy4yLDEsLjcsMiwxLjQsMi44LDEsMSwyLjIsMS41LDMuNiwxLjVoNS4yLS4xYy0xLjQsMS42LTMuMywyLjMtNS4zLDIuM2gwWiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=='
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
  logoBackgroundColor: '#000000',
  logoWhiteBackground: logoWhiteBackground,
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
    usd: ['0x79A02482A880bCE3F13e09Da970dC34db4CD24d1']
  },
  explorer: 'https://worldchain-mainnet.explorer.alchemy.com',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://worldchain-mainnet.explorer.alchemy.com/tx/${transaction.id || transaction}` }
    if(token) { return `https://worldchain-mainnet.explorer.alchemy.com/token/${token}` }
    if(address) { return `https://worldchain-mainnet.explorer.alchemy.com/address/${address}` }
  },
  endpoints: [ // make sure provider supports batch size of 50 batch requests!
    'https://worldchain-mainnet.blastapi.io/1b1a6314-79bf-4afe-b48b-c943fca35292',
    'https://worldchain-mainnet.g.alchemy.com/public'
  ],
  tokens: [ // only major tokens
    {"address": "0x2cFc85d8E48F8EAB294be644d9E25C3030863003", "symbol": "WDL", "name": "Worldcoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1/logo.png", "type": "20"},
    {"address": "0x79A02482A880bCE3F13e09Da970dC34db4CD24d1", "symbol": "USDC.e", "name": "Bridged USDC", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x7F5c764cBc14f9669B88837ca1490cCa17c31607/logo.png", "type": "20"},
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.currency.logo, "type": "NATIVE"},
    {"address": "0x4200000000000000000000000000000000000006", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3'
}


