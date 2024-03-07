'use client'

import React, { ReactNode, useState, useEffect } from 'react';
import getWeb3 from '../services/web3';
import Button from './Button';


const ConnectWalletButton: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [connect, setConnect] = useState<boolean | null>(false);

  const connectWallet = async () => {
    try {
      setConnect(true);
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0] || null);
    } catch (error: any) {
      console.error('Error connecting wallet:', error.message);
    }
  };

  useEffect(() => {
    const checkWallet = async () => {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0] || null);
      } catch (error: any) {
        console.error('Error checking wallet:', error.message);
      }
    };

    connect && checkWallet();
  }, [connect]);

  return (
    <div onClick={connectWallet}>
        <Button title={account ? 'Wallet Connected' : 'Connect Wallet'} disabled={!!account} />
    </div>
  );
};

export default ConnectWalletButton;
