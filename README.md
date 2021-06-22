# Crypto Base App #

Custom Boiler Plate for setting up a React JS and Truffle Web Dapp

1. Utilizes Functional React Javascript Framework
2. Truffle Smart Contract Development Framework
3. Styled Components for styling

## Architechture ##
This setup separates the contract development and the web client development into two different directories.



### Smart Contract ###
The smart contracts artifacts are stored in the ReactJS src/contract-artifacts/ directory.

### Steps for fresh project ###
1. Installation
    1. cd into smart contracts and web-client and run individual npm install
    2. cd into smart contracts
        1. remove contracts/MyStringStore.sol
        2. remove test/MyStringStore.js
        3. remove 2_deploy_contracts.js
    3. cd into web client
        1. remove src/contract-artifacts
            * this dir will be recreated upon migration
2. To add to a different remote url repository:
    1. git remote set-url origin <Link>

