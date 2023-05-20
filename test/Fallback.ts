import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { EtherscanProvider, InfuraProvider } from "@ethersproject/providers";
require('dotenv').config()


import { expect } from "chai"; // testing framework thing
import { ethers, network } from "hardhat"



import FallbackABI  from '../bin/contracts/Fallback.json'  
import { player, PK, API, API_KA } from '../state/state'
import { Signer, Wallet, providers } from "ethers";

const contractAddress = '0x880d3f2a44ff7701331C223A01de19a96C11A402' // contract instance of Fallback.sol on Sepolia

const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"contribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contributions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

describe("Fallback", function () {

    it('Connect to Sepolia network rpc, and getBalance of my address (being greater than 1)', async function () {
        const provider = new InfuraProvider("sepolia")


        let _balance = await provider.getBalance(player)
        let balance = ethers.utils.formatEther(ethers.BigNumber.from(_balance._hex))
        
        
        expect(provider && Number(balance) > 0.01)
    }) 


    // it('Get contract instance of Fallback.sol', async function () {
    //     const provider = new ethers.providers.InfuraProvider(API)
    //     const signer = provider.getSigner()
    //     //@ts-ignore
    //     const contract = new ethers.Contract(contractAddress, abi, signer)

    //     expect(contract)
    // })


    it('Instantiate private key', async function () {
        let chainid = ethers.utils.hexlify(111555111)
        console.log(chainid)
         const setting = {apiKey: API_KA, network: chainid}         
        const provider = new ethers.providers.AlchemyProvider(API_KA)

        //@ts-ignore
        const signer = new Wallet(PK)



        expect(provider && signer)
        
        // let sign = await signer.sendTransaction(tx)
        // expect(contract && sign)
    })
    it('Fallback contract instance, and calling receive function', async function () {
        const provider = new ethers.providers.AlchemyProvider(API_KA)

        //@ts-ignore
        const signer = new ethers.Wallet(PK, provider)

        expect(provider && signer)
        // const contract = new ethers.Contract(contractAddress, abi, signer)
        // const tx = await signer.sendTransaction({to: contractAddress, value: 10000000})
        // console.log(tx)
    })



})