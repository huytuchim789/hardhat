const { ethers } = require("hardhat")

const networkConfig = {
    4: {
        name: "GOERLI",
        vrfCoordinatorV2: "0x2bce784e69d2Ff36c71edcB9F88358dB0DfB55b4",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x0476f9a745b61ea5c0ab224d3a6e4c99f0b02fce4da01143a4f70aa80ae76e8a",
        callbackGasLimit: "500000",
        subscriptionId: "0",
        interval: "30",
    },
    31337: {
        name: "hardhat",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x0476f9a745b61ea5c0ab224d3a6e4c99f0b02fce4da01143a4f70aa80ae76e8a",
        callbackGasLimit: "500000",
        interval: "30",
    },
}

const developmentChains = ["hardhat", "localhost"]
module.exports = { networkConfig, developmentChains }
