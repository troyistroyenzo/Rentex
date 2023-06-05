import React, { useState } from 'react';
import { abi, contractAddress } from '../config.json';
import { ethers } from 'ethers';

export const BlockchainContext = React.createContext();

export const BlockchainProvider = ({ children }) => {

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()

  
    const Address = contractAddress;
    const contractAbi = abi;
    const contract = new ethers.Contract(address, contractAbi, signer);

    const connectWallet = async () => {
        try {
            if (!window.ethereum) return alert ("Please install MetaMask first.")
        } catch (err) {

        }
    }
    return (
        <BlockchainContextBlockchainContext.Provider 
        value={{}}>
            { children }
        </BlockchainContextBlockchainContext.Provider>
    )

}