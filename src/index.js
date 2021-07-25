import ethereum from './blockchains/ethereum'
import bsc from './blockchains/bsc'
import polygon from './blockchains/polygon'

let all = [ethereum, bsc, polygon]

let Blockchain = {
  all: all,

  findById: function (id) {
    let fixedId = id
    if (fixedId.match('0x0')) {
      // remove leading 0
      fixedId = fixedId.replace(/0x0+/, '0x')
    }
    return all.find((blockchain) => {
      return blockchain.id == fixedId
    })
  },

  findByName: function (name) {
    return all.find((blockchain) => {
      return blockchain.name == name
    })
  },
}

export { Blockchain }
