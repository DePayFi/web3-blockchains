const logo = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 397.7 311.7" style="enable-background:new 0 0 397.7 311.7" xml:space="preserve"><linearGradient id="web3_blockchains_solana_gradient_1" gradientUnits="userSpaceOnUse" x1="291.854" y1="14.359" x2="165.768" y2="255.866" gradientTransform="translate(0 30.535)"><stop offset="0" style="stop-color:#00ffa3"/><stop offset="1" style="stop-color:#dc1fff"/></linearGradient><path d="M121.8 202.9c1.4-1.4 3.3-2.2 5.3-2.2h182.2c3.3 0 5 4 2.6 6.4l-36 36c-1.4 1.4-3.3 2.2-5.3 2.2H88.4c-3.3 0-5-4-2.6-6.4l36-36z" style="fill:url(#web3_blockchains_solana_gradient_1)"/><linearGradient id="web3_blockchains_solana_gradient_2" gradientUnits="userSpaceOnUse" x1="236.727" y1="-14.422" x2="110.641" y2="227.085" gradientTransform="translate(0 30.535)"><stop offset="0" style="stop-color:#00ffa3"/><stop offset="1" style="stop-color:#dc1fff"/></linearGradient><path style="fill:url(#web3_blockchains_solana_gradient_2)" d="M121.8 68.6c1.4-1.4 3.3-2.2 5.3-2.2h182.2c3.3 0 5 4 2.6 6.4l-36 36c-1.4 1.4-3.3 2.2-5.3 2.2H88.4c-3.3 0-5-4-2.6-6.4l36-36z"/><linearGradient id="web3_blockchains_solana_gradient_3" gradientUnits="userSpaceOnUse" x1="264.114" y1="-.123" x2="138.028" y2="241.383" gradientTransform="translate(0 30.535)"><stop offset="0" style="stop-color:#00ffa3"/><stop offset="1" style="stop-color:#dc1fff"/></linearGradient><path style="fill:url(#web3_blockchains_solana_gradient_3)" d="M275.9 135.3c-1.4-1.4-3.3-2.2-5.3-2.2H88.4c-3.3 0-5 4-2.6 6.4l36 36c1.4 1.4 3.3 2.2 5.3 2.2h182.2c3.3 0 5-4 2.6-6.4l-36-36z"/></svg>'

export default {
  name: 'solana',
  networkId: 'mainnet-beta',
  label: 'Solana',
  fullName: 'Solana',
  logo,
  currency: {
    name: 'Solana',
    symbol: 'SOL',
    decimals: 9
  },
  explorer: 'https://solscan.io',
  explorerUrlFor: ({ transaction, token })=>{
    if(transaction) { return `https://solscan.io/tx/${transaction.id}` }
    if(token) { return `https://solscan.io/token/${token}` }
  },
  rpc: 'https://api.mainnet-beta.solana.com',
  tokens: [ // only major tokens
    {"address": "11111111111111111111111111111111", "symbol": "SOL", "name": "Solana", "decimals": 9, "logo": logo, "type": "NATIVE"},
    {"address": "So11111111111111111111111111111111111111112", "symbol": "WSOL", "name": "Wrapped SOL", "decimals": 9, "logo": "https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png", "type": "SPL"},
    {"address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://img.raydium.io/icon/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png", "type": "SPL"},
    {"address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "symbol": "USDT", "name": "USDT", "decimals": 6, "logo": "https://img.raydium.io/icon/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.png", "type": "SPL"}
  ]
}
