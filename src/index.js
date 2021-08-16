import ethereum from './blockchains/ethereum'
import bsc from './blockchains/bsc'
import polygon from './blockchains/polygon'
import unknown from './blockchains/unknown'

let all = [ethereum, bsc, polygon, unknown]

let Blockchain = {
  all,

  findById: function (id) {
    let fixedId = id
    if (fixedId.match('0x0')) {
      // remove leading 0
      fixedId = fixedId.replace(/0x0+/, '0x')
    }
    let found = all.find((blockchain) => {
      return blockchain.id == fixedId
    })
    if(found == undefined) {
      found = all.find((blockchain) => {
        return blockchain.id == undefined
      })
    }
    return found
  },

  findByName: function (name) {
    return all.find((blockchain) => {
      return blockchain.name == name
    })
  },
}

export { Blockchain }
