import Blockchains from 'src';

describe('gnosis', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchains.findByName('gnosis');
    expect(blockchain.name).toEqual('gnosis');
    expect(blockchain.id).toEqual('0x64');
    expect(blockchain.networkId).toEqual('100');
    expect(blockchain.namespace).toEqual('eip155');
    expect(blockchain.label).toEqual('Gnosis');
    expect(blockchain.fullName).toEqual('Gnosis Chain');
    expect(blockchain.logo).toEqual('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojM0U2OTU3O30KPC9zdHlsZT4KPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgoJPGcgaWQ9Il8yMjM0NDYzMDM5NzQ0Ij4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzM1LDE0MjNjNzIsMCwxNDItMjQsMTk5LTY4TDQ3OCw4OTljLTExMCwxNDItODQsMzQ2LDU4LDQ1NmM1Nyw0MywxMjcsNjcsMTk5LDY3bDAsMFYxNDIzeiI+PC9wYXRoPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMDkwLDEwOThjMC03Mi0yNC0xNDItNjgtMTk5bC00NTYsNDU2YzE0MiwxMTAsMzQ2LDg0LDQ1Ni01OEMyMDY2LDEyNDAsMjA5MCwxMTcwLDIwOTAsMTA5OHoiPjwvcGF0aD4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjMyMCw2MDJsLTIwMiwyMDJjMTYyLDE5NSwxMzcsNDg0LTU4LDY0N2MtMTcxLDE0My00MTgsMTQzLTU4OSwwbC0yMjEsMjIxbC0yMjEtMjIxICAgIGMtMTk1LDE2Mi00ODQsMTM3LTY0Ny01OGMtMTQzLTE3MS0xNDMtNDE4LDAtNTg5TDI3OSw3MDFsLTk4LTk5QzYyLDc5NywwLDEwMjEsMCwxMjUwYzAsNjkwLDU2MCwxMjUwLDEyNTAsMTI1MCAgICBzMTI1MC01NjAsMTI1MC0xMjUwQzI1MDEsMTAyMiwyNDM3LDc5NywyMzIwLDYwMnoiPjwvcGF0aD4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjE1NCwzODdDMTY3OC0xMTIsODg3LTEzMSwzODgsMzQ1Yy0xNSwxNC0yOSwyOC00Miw0MmMtMzEsMzMtNjAsNjctODgsMTAybDk5Miw5OTJsOTkyLTk5MiAgICBDMjIxNSw0NTMsMjE4NSw0MTksMjE1NCwzODd6IE0xMjUwLDE2M2MyOTIsMCw1NjQsMTEzLDc2OSwzMThsLTc2OSw3NjlMNDgxLDQ4MUM2ODUsMjc1LDk1OCwxNjMsMTI1MCwxNjN6Ij48L3BhdGg+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==');
    expect(blockchain.currency.logo).toEqual('https://cdn.sushi.com/image/upload/f_auto,c_limit,w_32,q_auto/native-currency/xdai.svg');
    expect(blockchain.currency.name).toEqual('xDAI');
    expect(blockchain.currency.symbol).toEqual('xDAI');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.currency.address).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE');
    expect(blockchain.wrapped.address).toEqual('0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d');
    expect(blockchain.stables.usd).toEqual(['0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', '0x4ECaBa5870353805a9F068101A40E0f32ed605C6', '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83']);
    expect(blockchain.explorer).toEqual('https://gnosisscan.io');
    expect(blockchain.endpoints).toEqual([
      'https://rpc.gnosis.gateway.fm',
      'https://rpc.gnosischain.com',
      'https://gnosis.blockpi.network/v1/rpc/public'
    ]);
    expect(blockchain.explorerUrlFor({
      transaction: { id: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f' }
    })).toEqual('https://gnosisscan.io/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      transaction: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f'
    })).toEqual('https://gnosisscan.io/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb'
    })).toEqual('https://gnosisscan.io/token/0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb')
    expect(blockchain.explorerUrlFor({
      address: '0x08B277154218CCF3380CAE48d630DA13462E3950'
    })).toEqual('https://gnosisscan.io/address/0x08B277154218CCF3380CAE48d630DA13462E3950')
    expect(blockchain.zero).toEqual('0x0000000000000000000000000000000000000000');
    expect(blockchain.maxInt).toEqual('115792089237316195423570985008687907853269984665640564039457584007913129639935');
  });
});
