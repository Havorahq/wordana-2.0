"use client";

import Image from "next/image";
import Header from "./components/Header";
import Button from "./components/Button";
import Link from "next/link";
import { useAccount } from "wagmi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Wallet } from "./services/near-wallet";
import { useEffect } from "react";

const CONTRACT_NAME = "guestbook.near-examples.testnet";

// When creating the wallet you can choose to create an access key, so the user
// can skip signing non-payable methods when talking wth the  contract
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_NAME });

export default function Home() {
  useEffect(() => {
    wallet.startUp();
  }, [wallet]);

  // window.onload = async () => {
  //   const isSignedIn = await wallet.startUp();
  // };

  const signIn = () => {
    wallet.signIn();
  };

  const signOut = () => {
    wallet.signOut();
  };

  return (
    <div>
      <ToastContainer />
      <Header />
      <div className="mt-8 py-12 flex items-center justify-between">
        <div>
          <p
            className="text-primary text-xs uppercase font-normal retro"
            style={{ fontSize: 8.2 }}
          >
            Decentralised Gaming
          </p>
          <p className="text-7xl my-7">
            Welcome to <br />
            Wordana!
          </p>
          <p
            className="text-xs font-normal mb-7 retro"
            style={{ fontSize: 8.2 }}
          >
            join the puzzle revolution and earn value in the <br />
            world of decentralised gaming
          </p>
          {wallet.accountId ? (
            <Link href={"/gamemode"}>
              <Button title="Start Playing" />
            </Link>
          ) : (
            <div onClick={signIn}>
              <Button title="Sign In" />
            </div>
          )}
        </div>
        <div>
          <Image
            src="/images/rubik.svg"
            alt="rubik"
            className="transition-transform transform-gpu hover:-translate-y-2 hover:scale-110"
            height={494}
            width={429}
          />
        </div>
      </div>
    </div>
  );
}
