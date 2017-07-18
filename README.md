# signed-contract-vault

[![Dawex](https://www.dawex.com/assets/img/Dawex-logo-272x69-bb.png)](https://www.dawex.com)

**Dawex** is a global data marketplace where organizations can easily and securely meet, sell and buy data. Any kind of data, in any industry, anywhere in the world. [Here is our website.](https://www.dawex.com)

As with any deal, when a data transaction is completed, a contract is exchanged between the buyer and the seller. Acting as the trusted-third party, Dawex has to make sure that this **contract is forgery-proof**.

**signed-contract-vault** is a smart contract using the Ethereum blockchain in order to store GPG signatures. Thanks to the blockchain ledger, nobody can modify those signatures. This way, customers have an insurance that the terms of the contract they agreed on are immutable. 

## Live
The smart contract has been deployed! You can see it [here](https://etherscan.io/address/0xd5b09a77309e0990371fb424d2acd1ee3454b973#readContract) with the following address (Thanks [etherscan](https://etherscan.io/)):
```
0xd5b09a77309e0990371fb424d2acd1ee3454b973
```


## Under the hood
We use **Truffle framework**. If you don't know this great framework, go check it out [here](http://truffleframework.com/).

In order to easily run unit tests, we use [testrpc](https://github.com/ethereumjs/testrpc). And to quickly run those unit tests, we use [docker](https://www.docker.com/).

## Quick unit test launch
We created a DockerFile in order to launch unit tests quickly:
```
$ docker build -t signed-contract-vault .
$ docker run signed-contract-vault
```      

## Compilation using Truffle
```
$ truffle compile
```      

### Documentation

Please contact us for more information 

### License

MIT
