import bsc from './blockchains/bsc'
import ethereum from './blockchains/ethereum'
import fantom from './blockchains/fantom'
import polygon from './blockchains/polygon'
import solana from './blockchains/solana'
import unknown from './blockchains/unknown'
import velas from './blockchains/velas'

let all = [
  ethereum,
  bsc,
  polygon,
  solana,
  fantom,
  velas,
  unknown
]

let Blockchain = {
  all,

  findById: function (id) {
    let fixedId = id
    if (fixedId.match('0x0')) {
      // remove leading 0
      fixedId = fixedId.replace(/0x0+/, '0x')
    }
    let found = all.find((blockchain) => {
      return blockchain.id && blockchain.id.toLowerCase() == fixedId.toLowerCase()
    })
    if(found == undefined) {
      found = all.find((blockchain) => {
        return blockchain.id == 'unknown'
      })
    }
    return found
  },

  findByNetworkId: function (networkId) {
    networkId = networkId.toString()
    let found = all.find((blockchain) => {
      return blockchain.networkId == networkId
    })
    return found
  },

  findByName: function (name) {
    return all.find((blockchain) => {
      return blockchain.name == name
    })
  },
}

export { Blockchain }
