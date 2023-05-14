import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat"

require('dotenv').config()

import FallbackABI  from '../bin/contracts/Fallback.json'  
import { InfuraProvider } from "@ethersproject/providers";

const contract = '0x880d3f2a44ff7701331C223A01de19a96C11A402' // contract instance of Fallback.sol on Sepolia



describe("Fallback", function () {

    it('Connect to Sepolia network rpc, and getBalance of my address', async function () {
        const provider = new InfuraProvider("sepolia")
        // const signer = provider.getSigner()
        

        let _balance = await provider.getBalance('0x2810FFaE7480a3D4Fea16380Aa2473340C25bF31')
        let balance = ethers.utils.formatEther(ethers.BigNumber.from(_balance._hex))
        

        expect(provider && Number(balance) > 0.01)
    }) 


    it('Get contract instance of Fallback.sol', async function () {
        const provider = new ethers.providers.JsonRpcProvider(process.env.API_LK)
        const signer = provider.getSigner()

    })

})