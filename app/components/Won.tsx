"use client";

import Image from "next/image";
import React from "react";
import { useContractWrite } from "wagmi";
import { CONTRACT_ADDRESS } from "../smart-contract/constants";
import CONTRACT_ABI2 from "../smart-contract/wordanamain-abi.json";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { wordanaInt } from "../services/setup";

const Won = () => {
  const router = useRouter();
  const {
    data: guessWordData,
    write: singlePlayerCollectReward,
    isLoading: isStakeLoading,
    isSuccess: isStakeStarted,
    error: stakeError,
  } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI2,
    functionName: "singlePlayerCollectReward",
  });

  const collectReward = async () => {
    await wordanaInt.singlePlayerClaimReward().then(()=>{
      router.push("/reward");
    })
  };
  return (
    <div className="flex flex-col items-center gap-3 m-28 mb-16">
      <Image src="/images/flag.gif" alt="vector" width={154} height={154} />
      <div className="flex items-center gap-2 mt-8">
        <Image src="/icons/gamer.png" alt="Avatar" height={30} width={30} />
        <p className="retro text-xs">YOU WON!</p>
      </div>
      <div onClick={collectReward}>
        <Button title="Claim Your Reward" />
      </div>
    </div>
  );
};

export default Won;
