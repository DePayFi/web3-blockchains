## Quickstart

```
yarn add depay-web3-blockchains
```

or 

```
npm install --save depay-web3-blockchains
```

```javascript
import { Blockchain } from 'depay-web3-blockchains'

Blockchain.all
// [
//   { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' },
//   { name: 'bsc', id: '0x38', label: 'Binance Smart Chain', logo: '...' },
//   ...
// ]

Blockchain.findById('0x1')
// { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' }

Blockchain.findByName('ethereum')
// { name: 'ethereum', id: '0x1', label: 'Ethereum', logo: '...' }
```

## Support

This library supports the following blockchains:

- [Ethereum](https://ethereum.org)
- [Binance Smart Chain](https://www.binance.org/smartChain)
- [Polygon](https://polygon.technology)

## Data Structure

Blockchain data is provided in the following structure:

```
{
  name: String,
  id: String,
  networkId: String,
  label: String,
  logo: String (base64 encoded PNG)
}
```

## Functionalities

### all: Retreive all information for all blockchains

```javascript
import { Blockchain } from 'depay-web3-blockchains'

Blockchain.all
// [
//   { name: 'ethereum', id: '0x1', networkId: '1', label: 'Ethereum', logo: '...' },
//   { name: 'bsc', id: '0x38', networkId: '56', label: 'Binance Smart Chain', logo: '...' },
//   ...
// ]

```

### findById: Get blockchain by blockchain id

```javascript
import { Blockchain } from 'depay-web3-blockchains'

Blockchain.findById('0x1')
// { name: 'ethereum', id: '0x1', networkId: '1', label: 'Ethereum', logo: '...' }

Blockchain.findById('0x38')
// { name: 'bsc', id: '0x38', networkId: '56', label: 'Binance Smart Chain', logo: '...' }
```

### findByName: Get blockchain by blockchain name

```javascript
import { Blockchain } from 'depay-web3-blockchains'

Blockchain.findByName('ethereum')
// { name: 'ethereum', id: '0x1', networkId: '1', label: 'Ethereum', logo: '...' }

Blockchain.findByName('bsc')
// { name: 'bsc', id: '0x38', networkId: '56', label: 'Binance Smart Chain', logo: '...' }
```

## Development

### Get started

```
yarn install
yarn dev
```

### Release

```
npm publish
```
