'use strict';
var SignedContractVault = artifacts.require('./SignedContractVault.sol');

contract('SignedContractVault', function() {
  it('should handle gpgKeys', function() {
    var cont;

    return SignedContractVault.deployed().then(function(instance) {
      cont = instance;
      return cont.getGpgKey.call();
    }).then(function(key) {
      assert(key, 'gpgKey', 'gpgKey was not stored correctly');
      return cont.addGpgKey('gpgKey2');
    }).then(function() {
      return cont.getGpgKey.call();
    }).then(function(key) {
      assert(key, 'gpgKey2', 'new gpgKey was not stored correctly');
    });
  });

  it('should save dawex signature and not be able to modify', function() {
    var cont;

    return SignedContractVault.deployed().then(function(instance) {
      cont = instance;
      return instance.createContract('id', 'test');
    }).then(function() {
      return cont.getDawexSignature.call('id');
    }).then(function(signature) {
      assert.equal(signature, 'test', 'dawex signature was not saved');
    }).then(function() {
      return cont.createContract('id', 'test2');
    }).catch(function(error) {
      if(error.toString().indexOf('invalid opcode') === -1) {
        assert(false, error.toString());
      }
    });
  });

  it('should save buyer signature and not be able to modify', function() {
    var cont;

    return SignedContractVault.deployed().then(function(instance) {
      cont = instance;
      return instance.createContract('id2', 'test');
    }).then(function() {
      return cont.addBuyerSig('id2', 'buyerTest');
    }).then(function() {
      return cont.getBuyerSignature.call('id2');
    }).then(function(signature) {
      assert.equal(signature, 'buyerTest', 'buyer signature was not saved');
    }).then(function() {
      return cont.addBuyerSig('id2', 'buyerTest2');
    }).catch(function(error) {
      if(error.toString().indexOf('invalid opcode') === -1) {
        assert(false, error.toString());
      }
    });
  });

  it('should save seller signature and not be able to modify', function() {
    var cont;

    return SignedContractVault.deployed().then(function(instance) {
      cont = instance;
      return instance.createContract('id3', 'test');
    }).then(function() {
      return cont.addSellerSig('id3', 'sellerTest');
    }).then(function() {
      return cont.getSellerSignature.call('id3');
    }).then(function(signature) {
      assert.equal(signature, 'sellerTest', 'seller signature was not saved');
    }).then(function() {
      return cont.addSellerSig('id3', 'sellerTest2');
    }).catch(function(error) {
      if(error.toString().indexOf('invalid opcode') === -1) {
        assert(false, error.toString());
      }
    });
  });

  it('should change owner and should not be able to interact with contract anymore', function() {
    var cont;

    return SignedContractVault.deployed().then(function(instance) {
      cont = instance;
      return cont.changeOwner('123');
    }).then(function() {
      return cont.createContract('id4', 'test');
    }).catch(function(error) {
      if(error.toString().indexOf('invalid opcode') === -1) {
        assert(false, error.toString());
      }
    }).then(function() {
      return cont.addBuyerSig('id4', 'test');
    }).catch(function(error) {
      if(error.toString().indexOf('invalid opcode') === -1) {
        assert(false, error.toString());
      }
    }).then(function() {
      return cont.addSellerSig('id4', 'test');
    }).catch(function(error) {
      if(error.toString().indexOf('invalid opcode') === -1) {
        assert(false, error.toString());
      }
    }).then(function() {
      return cont.changeOwner('456');
    }).catch(function(error) {
      if(error.toString().indexOf('invalid opcode') === -1) {
        assert(false, error.toString());
      }
    });
  });
});
