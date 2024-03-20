// near.ts

import { Near, WalletConnection } from 'near-api-js';

const near = new Near({
  networkId: 'testnet',
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  deps: {},
});

const wallet = new WalletConnection(near, 'YOUR_APP_NAME');

export { near, wallet };
