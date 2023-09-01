import Navbar from "./components/Navbar"
import CIRCLEGRADIENT from './assets/pngs/circle-gradient.png';
import Landing from "./components/Landing";
import Candidates from "./components/Candidates";
import Mail from "./components/Mail";
import Footer from "./components/Footer";
import React from "react";
import { useWeb3Modal } from "@web3modal/react";
import { ethereumClient } from "./context/WalletContext";
import { useDisconnect } from "wagmi";
import { HexString } from "./interface";

const App: React.FC<{}> = () => {

  const { open } = useWeb3Modal();
  const { address, isConnected } = ethereumClient.getAccount();
  const { disconnect } = useDisconnect();

  const CONTRACT_ADDRESS: HexString = "0x212327B2de8541f8d180650E6748A43faCCA38B2"

  return (
    <div className="">
      <Navbar contractAddress={CONTRACT_ADDRESS} connect={open} address={address} isConnected={isConnected} disconnect={disconnect} />
      <img src={CIRCLEGRADIENT} alt="circle-gradient" className="absolute -top-24 opacity-80 -left-16 sm:w-[300px] sm:h-[300px] -z-10" />
      <img src={CIRCLEGRADIENT} alt="circle-gradient" className="absolute sm:-bottom-96  -bottom-[1000px] opacity-80 -left-16 -z-10" />
      <Landing
        contractAddress={CONTRACT_ADDRESS}
        address={address}
        connect={open}
        disconnect={disconnect}
        isConnected={isConnected}
      />
      <Candidates
        address={address}
        connect={open}
        disconnect={disconnect}
        isConnected={isConnected}
        contractAddress={CONTRACT_ADDRESS}
      />
      <Mail />
      <Footer />
    </div>
  )
}

export default App
