import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat"

require('dotenv').config()

describe("Fallback", function () {

    it('Connect to Sepolia network rpc', async function () {
        const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/424a23ceaec54e76a1dca127e7329ee2')
        const signer = provider.getSigner()
        expect(provider && signer)
    }) 


})