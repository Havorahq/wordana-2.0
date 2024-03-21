import { WordanaInt } from './near-interface';
import { Wallet } from './near-wallet';

export const CONTRACT_NAME = "wordana11.testnet";
export const wallet = new Wallet({ createAccessKeyFor: CONTRACT_NAME as unknown as undefined});
wallet.startUp()
export const wordanaInt = new WordanaInt({ contractId: CONTRACT_NAME, walletToUse: wallet });