"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaPlus } from "react-icons/fa6";
import { Wallet } from "./../services/near-wallet";

const CONTRACT_NAME = "guestbook.near-examples.testnet";

// When creating the wallet you can choose to create an access key, so the user
// can skip signing non-payable methods when talking wth the  contract
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_NAME });

const Header = () => {
  const signIn = () => {
    wallet.signIn();
  };

  const signOut = () => {
    wallet.signOut();
  };

  console.log(wallet);

  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="cursor-pointer">
        <Image src="/icons/brandLogo.svg" alt="logo" height={64} width={192} />
      </Link>

      {wallet.accountId ? (
        <div onClick={signOut}>
          <Button title={wallet.accountId} />{" "}
        </div>
      ) : (
        <div onClick={signIn}>
          <Button title="Sign iN" />
        </div>
      )}
    </div>
  );
};

export default Header;
