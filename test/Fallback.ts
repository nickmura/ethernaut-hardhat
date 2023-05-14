import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { InfuraProvider } from "@ethersproject/providers";

import { expect } from "chai"; // testing framework thing
import { ethers } from "hardhat"



import FallbackABI  from '../bin/contracts/Fallback.json'  
import { player, API, API_LK } from '../state/state'

const contract = '0x880d3f2a44ff7701331C223A01de19a96C11A402' // contract instance of Fallback.sol on Sepolia



describe("Fallback", function () {

    it('Connect to Sepolia network rpc, and getBalance of my address (being greater than 1)', async function () {
        const provider = new InfuraProvider("sepolia")


        let _balance = await provider.getBalance(player)
        let balance = ethers.utils.formatEther(ethers.BigNumber.from(_balance._hex))
        
        
        expect(provider && Number(balance) > 0.01)
    }) 


    // it('Get contract instance of Fallback.sol', async function () {
    //     const provider = new ethers.providers.JsonRpcProvider(API_LK)
    //     const signer = provider.getSigner()

    // })

})