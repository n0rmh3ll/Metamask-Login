import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './Home.css';

const Home = () => {
    const [account, setAccount] = useState(null);
    const [web3, setWeb3] = useState(null);

    useEffect(() => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
        } else {
            alert('Please install MetaMask!');
        }
    }, []);

    const connectWallet = async () => {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
        } catch (error) {
            console.error('Error connecting to MetaMask:', error);
        }
    };

    return (
        <div className="home-container">
            {account ? (
                <h1 className="welcome-message">Welcome, {account}</h1>
            ) : (
                <button onClick={connectWallet} className="connect-button">
                    Connect MetaMask Wallet
                </button>
            )}
        </div>
    );
};

export default Home;
