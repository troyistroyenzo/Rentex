import React, { createContext, useState } from 'react';
import { contractAbi, contractAddress } from '../config.json';
import { ethers } from 'ethers';

export const BlockchainContext = React.createContext();

export const BlockchainProvider = ({ children }) => {

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()

  
    const Address = contractAddress;
    const abi = contractAbi;
    const contract = new ethers.Contract(address, contractAbi, signer);

    return (
        <BlockchainContextBlockchainContext.Provider 
        value={{}}>

            { children}
        </BlockchainContextBlockchainContext.Provider>
    )

}