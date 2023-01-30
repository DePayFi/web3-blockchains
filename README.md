## Quickstart

```
yarn add @depay/web3-blockchains
```

or 

```
npm install --save @depay/web3-blockchains
```

```javascript
import { Blockchain } from '@depay/web3-blockchains'

Blockchain.all
// [
//   { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' },
//   { name: 'bsc', id: '0x38', label: 'Binance Smart Chain', logo: '...' },
//   ...
// ]

Blockchain.findByName('ethereum')
// { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' }

Blockchain.findById('0x1')
// { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' }

Blockchain.findByNetworkId(1)
// { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' }
```

## Support

This library supports the following blockchains:

- [Ethereum](https://ethereum.org)
- [BNB Smart Chain](https://www.binance.org/smartChain)
- [Polygon](https://polygon.technology)
- [Solana](https://solana.com)
- [Velas](https://velas.com)

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
  logo: String (SVG),
  currency: { Object
    name: String, // Ether, Binance Coin, ...
    symbol: String, // ETH, BNB, ...
    decimals: String, // 18
  },
  explorer: String (URL), // https://etherscan.io, https://bncscan.com, ...
  explorerUrlFor: Function ({ transaction || token }) returns String, // https://etherscan.io/tx/..., https://etherscan.io/token/...
  rpc: String (URL) // ...
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
import { Blockchain } from '@depay/web3-blockchains'

Blockchain.all
// [
//   { name: 'ethereum', id: '0x1', networkId: '1', label: 'Ethereum', logo: '...' },
//   { name: 'bsc', id: '0x38', networkId: '56', label: 'Binance Smart Chain', logo: '...' },
//   ...
// ]

```

### findById: Get blockchain by blockchain id

```javascript
import { Blockchain } from '@depay/web3-blockchains'

Blockchain.findById('0x1')
// { name: 'ethereum', id: '0x1', networkId: '1', label: 'Ethereum', logo: '...' }

Blockchain.findById('0x38')
// { name: 'bsc', id: '0x38', networkId: '56', label: 'Binance Smart Chain', logo: '...' }
```

### findByName: Get blockchain by blockchain name

```javascript
import { Blockchain } from '@depay/web3-blockchains'

Blockchain.findByName('ethereum')
// { name: 'ethereum', id: '0x1', networkId: '1', label: 'Ethereum', logo: '...' }

Blockchain.findByName('bsc')
// { name: 'bsc', id: '0x38', networkId: '56', label: 'Binance Smart Chain', logo: '...' }
```

### findByNetworkId: Get blockchain by network id

```javascript
import { Blockchain } from '@depay/web3-blockchains'

Blockchain.findByNetworkId(1)
// { name: 'ethereum', id: '0x1', networkId: '1', label: 'Ethereum', logo: '...' }

Blockchain.findByNetworkId('56')
// { name: 'bsc', id: '0x38', networkId: '56', label: 'Binance Smart Chain', logo: '...' }
```

## Development

### Get started

```
yarn install
yarn dev
```
