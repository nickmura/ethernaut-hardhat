import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import { API, PK } from './state/state'




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
