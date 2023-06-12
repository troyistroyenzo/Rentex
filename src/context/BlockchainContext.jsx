import React, { useEffect, useState } from 'react';
import { abi, contractAddress } from '../config.json';
import { ethers } from 'ethers';
import { set } from 'react-hook-form';

export const BlockchainContext = React.createContext("");

export const BlockchainProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState('');
    const [balance, setBalance] = useState();
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

  
    const address = contractAddress;
    const contractAbi = abi;
    const contract = new ethers.Contract(address, contractAbi, signer);

    const connectWallet = async () => {
        try {
            if (!window.ethereum) return alert ("Please install MetaMask first.")
            
            const accounts = await provider.send( "eth_requestAccounts" );
            console.log(accounts[0])
            setCurrentAccount(accounts[0])
        } catch (err) {
            console.log(error)
            throw new Error("No ETh object")
        }
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if (!window.ethereum) return alert ("Please install MetaMask first.")

            const accounts = await provider.send("eth_accounts");

            if(accounts.length) {
                setCurrentAccount(accounts[0])
            } else {
                console.log("No authorized account found")
            }
        } catch (err) {
            console.log(error)
        }
    }

    const getBalance = async () => {
        try {
           const contractBalance = await contract.balanceOf()
           console.log(contractBalance)
           setBalance(ethers.utils.formatEther(contractBalance))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected()
        getBalance()
    }, [])





    return (
        <BlockchainContext.Provider 
        value={{
            connectWallet,
            currentAccount,
        }}>
            { children }
        </BlockchainContext.Provider>
    )

}