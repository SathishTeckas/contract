require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
        url: "https://sepolia.infura.io/v3/579e486518ac4729b9b3a03bd413afbb",
        accounts: ["29c596d9e57c0aa02e1385e10ed2e2ce21160d66e8041304e37ae5ff78f563be"],
    },
}
};
