## Quickstart

```
yarn add @depay/web3-blockchains
```

or 

```
npm install --save @depay/web3-blockchains
```

```javascript
import Blockchains from '@depay/web3-blockchains'

Blockchains.all
// [
//   { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' },
//   { name: 'bsc', id: '0x38', label: 'Binance Smart Chain', logo: '...' },
//   ...
// ]

Blockchains.findByName('ethereum')
// { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' }

Blockchains.findById('0x1')
// { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' }

Blockchains.findByNetworkId(1)
// { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' }
```

or 

```javascript
import { all, findByName, findById, findByNetworkId } from '@depay/web3-blockchains'

all
// [
//   { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' },
//   { name: 'bsc', id: '0x38', label: 'Binance Smart Chain', logo: '...' },
//   ...
// ]

findByName('ethereum')
// { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' }

findById('0x1')
// { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' }

findByNetworkId(1)
// { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' }
```

or 

```javascript
import Blockchains from '@depay/web3-blockchains'

Blockchains['ethereums']
// { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' }
```

## Support

This library supports the following blockchains:

- [Ethereum](https://ethereum.org)
- [BNB Smart Chain](https://www.binance.org/smartChain)
- [Polygon](https://polygon.technology)
- [Solana](https://solana.com)
- [Fantom](https://fantom.foundation)
- [Arbitrum](https://arbitrum.io)
- [Avalanche](https://www.avax.network)
- [Gnosis](https://gnosis.io)
- [Optimism](https://www.optimism.io)
- [Base](https://base.org)
- [Worldchain](https://worldcoin.org/world-chain)

## Data Structure

Blockchain data is provided in the following structure:

```javascript
{
  name: String, // e.g. ethereum, bsc ...
  id: String, // e.g. 0x1, 0x38, ...
  networkId: String, // 1, 56, ...
  namespace: String, // eip155, solana, ...
  label: String, // Ethereum, Binance Smart Chain ...
  fullName: String, // Ethereum Mainnet, Binance Smart Chain Mainnet ...
  logo: String, // base64 data or URL (logo for colored or dark background)
  logoBackgroundColor: String // hex color
  logoWhiteBackground: String // base64 data or url (logos for white background)
  currency: { Object
    name: String, // Ether, Binance Coin, ...
    symbol: String, // ETH, BNB, ...
    decimals: String, // 18
    address: String, // address or placeholder address
    logo: String, // base64 data or URL,
  },
  wrapped: { Object
    address: String, // address of the wrapped native scurrency
    decimals: Integer, // 18 
    logo: String, // base64 data or URL
  },
  stables: { Object
    usd: [ Array
      { Object
        address: String, // 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48
        decimals: Integer, // 18
      }, ...
    ]
  },
  explorer: String (URL), // https://etherscan.io, https://bncscan.com, ...
  explorerUrlFor: Function ({ transaction || token }) returns String, // https://etherscan.io/tx/..., https://etherscan.io/token/...
  endpoints: [ Array
    String (URL), // https://rpc.ankr.com/eth
  ],
  sockets: [ // Array || undefined
    String (URL), // wss://mainnet-beta.solflare.network
  ],
  tokens: [ Array
    { Object
      address: String, // 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48
      symbol: String, // USDC
      name: String, // USD Coin
      decimals: Integer, // 6
      logo: String(URL|Data URL), // https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x853d955aCEf822Db058eb8505911ED77F175b99e/logo.png 
      type: String, // 20
    }, 
  ],
  zero: String, // 0x0000000000000000000000000000000000000000
  maxInt: String, // 115792089237316195423570985008687907853269984665640564039457584007913129639935
  permit2: String, // 0x000000000022D473030F116dDEE9F6B43aC78BA3 (Permit2 contract address)
  blockTime: Integer, // in ms e.g. ethereum 12000 (12s)
}
```

### explorerUrlFor

#### Transaction

```javascript
blockchain.explorerUrlFor({ transaction: '0x51ae8875028b7ed004253f679076851abbd3a49e26faf8d7dac6bb283ca10536' })
// https://etherscan.io/tx/0x51ae8875028b7ed004253f679076851abbd3a49e26faf8d7dac6bb283ca10536
```

#### Token

```javascript
blockchain.explorerUrlFor({ token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb' })
// https://etherscan.io/token/0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb
```

#### Address

```javascript
blockchain.explorerUrlFor({ address: '0x08B277154218CCF3380CAE48d630DA13462E3950' })
// https://etherscan.io/address/0x08B277154218CCF3380CAE48d630DA13462E3950
```

## Functionalities

### all: Retreive all information for all blockchains

```javascript
import Blockchains from '@depay/web3-blockchains'

Blockchains.all
// [
//   { name: 'ethereum', id: '0x1', networkId: '1', label: 'Ethereum', logo: '...' },
//   { name: 'bsc', id: '0x38', networkId: '56', label: 'Binance Smart Chain', logo: '...' },
//   ...
// ]

```

### findById: Get blockchain by blockchain id

```javascript
import Blockchains from '@depay/web3-blockchains'

Blockchains.findById('0x1')
// { name: 'ethereum', id: '0x1', networkId: '1', label: 'Ethereum', logo: '...' }

Blockchains.findById('0x38')
// { name: 'bsc', id: '0x38', networkId: '56', label: 'Binance Smart Chain', logo: '...' }
```

### findByName: Get blockchain by blockchain name

```javascript
import Blockchains from '@depay/web3-blockchains'

Blockchains.findByName('ethereum')
// { name: 'ethereum', id: '0x1', networkId: '1', label: 'Ethereum', logo: '...' }

Blockchains.findByName('bsc')
// { name: 'bsc', id: '0x38', networkId: '56', label: 'Binance Smart Chain', logo: '...' }
```

### findByNetworkId: Get blockchain by network id

```javascript
import Blockchains from '@depay/web3-blockchains'

Blockchains.findByNetworkId(1)
// { name: 'ethereum', id: '0x1', networkId: '1', label: 'Ethereum', logo: '...' }

Blockchains.findByNetworkId('56')
// { name: 'bsc', id: '0x38', networkId: '56', label: 'Binance Smart Chain', logo: '...' }
```

## Development

### Get started

```
yarn install
yarn dev
```
