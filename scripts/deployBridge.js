const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying Bridge contract with the account:", deployer.address);

    const Bridge = await hre.ethers.getContractFactory("Bridge");

    // Replace with your deployed ERC-20 token address
    const tokenAddress = "0x9511FF4d178620C572576CaF48E4e06Ff7a14428";

    const bridge = await Bridge.deploy(tokenAddress);
    await bridge.waitForDeployment();  

    console.log("Bridge Contract deployed at:", await bridge.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);    
    });
