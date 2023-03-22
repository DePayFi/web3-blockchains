import bsc from './blockchains/bsc'
import ethereum from './blockchains/ethereum'
import fantom from './blockchains/fantom'
import polygon from './blockchains/polygon'
import solana from './blockchains/solana'
import velas from './blockchains/velas'

const all = [
  ethereum,
  bsc,
  polygon,
  solana,
  fantom,
  velas
]

const findById = function (id) {
  let fixedId = id
  if (fixedId.match('0x0')) {
    // remove leading 0
    fixedId = fixedId.replace(/0x0+/, '0x')
  }
  let found = all.find((blockchain) => {
    return blockchain.id && blockchain.id.toLowerCase() == fixedId.toLowerCase()
  })
  return found
}

const findByNetworkId = function (networkId) {
  networkId = networkId.toString()
  let found = all.find((blockchain) => {
    return blockchain.networkId == networkId
  })
  return found
}

const findByName = function (name) {
  return all.find((blockchain) => {
    return blockchain.name == name
  })
}

export default {
  all,
  findById,
  findByNetworkId,
  findByName,
}
