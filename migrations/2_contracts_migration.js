const erc20Token = artifacts.require("./erc20Token.sol");
const SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
    deployer.deploy(erc20Token, 1500, "Quantum Token", 18, "QT");
    deployer.deploy(SupplyChain);
};