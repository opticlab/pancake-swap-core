const PancakeFactory = artifacts.require("PancakeFactory");

module.exports = async function(deployer) {
    deployer.deploy(PancakeFactory, "0x2c32392e109a82c55030121f11e4bef04d26c117");
};