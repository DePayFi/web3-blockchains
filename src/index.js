import ethereum from './blockchains/ethereum'
import bsc from './blockchains/bsc'
import polygon from './blockchains/polygon'

let all = [ethereum, bsc, polygon];

let Blockchain = {

  all: all,

  findById: function(id){
    return all.find((blockchain)=>{ return blockchain.id == id })
  },

  findByName: function(name){
    return all.find((blockchain)=>{ return blockchain.name == name })
  }
}

export { Blockchain }
