"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { wallet } from "../services/setup";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="cursor-pointer">
        <Image src="/icons/brandLogo.svg" alt="logo" height={64} width={192} />
      </Link>
      <div>
      {wallet.accountId? (
        <div onClick={()=>wallet.signOut()}>
          <Button title={wallet.accountId} />{" "}
        </div>
      ) : (
        <div onClick={()=>wallet.signIn()}>
          <Button title="Sign iN" />
        </div>)}
        
      </div>
    </div>
  );
};

export default Header;
