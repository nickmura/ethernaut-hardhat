import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


//dotenv
require('dotenv').config()

const PK = process.env.S_PK
const API = process.env.API_K

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      //@ts-ignore
      url: `https://sepolia.infura.io/v3/${API}`,
      //@ts-ignore
      accounts: [PK]
    }
  }
};

export default config;
