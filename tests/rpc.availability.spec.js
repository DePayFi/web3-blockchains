import Blockchains from 'src';

describe('test RPC availability', () => {

  const blockchain = Blockchains[process.env.BLOCKCHAIN];

  describe(blockchain.label, ()=>{

    blockchain.endpoints.forEach((endpoint)=>{
      
      it(`${endpoint} works with up to 50 subrequests`, async()=>{

        let response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            Array.from({ length: 50 }, (_, index)=> index+1).map((index)=> {
              return(
                {
                  "jsonrpc": "2.0",
                  "id": index,
                  "method": "eth_call",
                  "params": [
                    {
                      "to":"0x1f98431c8ad98523631ae4a59f267346ea31f984",
                      "data":"0x1698ee82000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000000000000000000000000000000000000000000064"
                    } ,"latest"
                  ]
                }
              )
            })
          )
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        let json = await response.json()
        await Promise.all(json.map((item)=>{
          return new Promise((resolve, reject)=>{
            if(item.result && !item.error){
              resolve()
            } else {
              reject('ERROR FOUND')
            }
          })
        }))
      })
    })
  })
})
