"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { wallet } from "../services/setup";

const Header = () => {
  const { address } = useAccount();
  const { data: allowanceData }: { data: any } = useContractRead({
    address: TOKEN_CONTRACT_ADDRESS,
    abi: TOKEN_ABI,
    functionName: "allowance",
    args: [address, CONTRACT_ADDRESS],
  });

  const { data: userXp, error } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "XP", // Replace with the actual public variable name
  });

  const bigintValue = new BigNumber(allowanceData);
  const realTokenValue = bigintValue.div(BigNumber(10).exponentiatedBy(18));
  const displayValue = realTokenValue.toNumber();
  const [showReloadButton, setShowReloadButton] = useState(false)
  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="cursor-pointer">
        <Image src="/icons/brandLogo.svg" alt="logo" height={64} width={192} />
      </Link>

      {wallet.accountId? (
        <div onClick={signOut}>
          <Button title={wallet.accountId} />{" "}
        </div>
      ) : (
        <div onClick={signIn}>
          <Button title="Sign iN" />
        </div>
        
      </div>

      {showReloadButton && <p className="text-sm text-black font-bold hover:text-white cursor-pointer bg-white p-3 rounded-lg" onClick={()=>location.reload()}>reload</p>}
      <ConnectButton />
    </div>
  );
};

export default Header;
