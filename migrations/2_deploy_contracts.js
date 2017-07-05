var SignedContractVault = artifacts.require('SignedContractVault.sol');

module.exports = function(deployer) {
  deployer.deploy(SignedContractVault, 'gpgKey');
};
