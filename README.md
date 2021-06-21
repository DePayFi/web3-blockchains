## Quickstart

```
yarn add depay-blockchains
```

or 

```
npm install --save depay-blockchains
```

```javascript
import { Blockchain } from 'depay-blockchains'

Blockchain.all
// [
//   { name: 'ethereum', id: '0x01', label: 'Ethereum', logo: '...' },
//   { name: 'bsc', id: '0x38', label: 'Binance Smart Chain', logo: '...' },
//   ...
// ]

Blockchain.findById('0x01')
// { name: 'ethereum', id: '0x01', label: 'Ethereum', logo: '...' }

Blockchain.findByName('ethereum')
// { name: 'ethereum', id: '0x01', label: 'Ethereum', logo: '...' }
```

## Support

This libraries supports the following blockchains:

- [Ethereum](https://ethereum.org)
- [Binance Smart Chain](https://www.binance.org/en/smartChain)
- [Polygon](https://polygon.technology)

## Data Structure

Blockchain data is provided in the following structure:

```
{
  name: String,
  id: String,
  label: String,
  logo: String (base64 encoded PNG)
}
```

## Functionalities

### all: Retreive all information for all blockchains

```javascript
import { Blockchain } from 'depay-blockchains'

Blockchain.all
// [
//   { name: 'ethereum', id: '0x01', label: 'Ethereum', logo: '...' },
//   { name: 'bsc', id: '0x38', label: 'Binance Smart Chain', logo: '...' },
//   ...
// ]

```

### findById: Get blockchain by blockchain id

```javascript
import { Blockchain } from 'depay-blockchains'

Blockchain.findById('0x01')
// { name: 'ethereum', id: '0x01', label: 'Ethereum', logo: '...' }

Blockchain.findById('0x38')
// { name: 'bsc', id: '0x38', label: 'Binance Smart Chain', logo: '...' }
```

### findByName: Get blockchain by blockchain name

```javascript
import { Blockchain } from 'depay-blockchains'

Blockchain.findByName('ethereum')
// { name: 'ethereum', id: '0x01', label: 'Ethereum', logo: '...' }

Blockchain.findByName('bsc')
// { name: 'bsc', id: '0x38', label: 'Binance Smart Chain', logo: '...' }
```

## Development

### Get started

```
yarn install
yarn start
```

### Release

```
npm publish
```
