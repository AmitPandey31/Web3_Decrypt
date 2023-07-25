require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/pYdE7pVhnQztUJ6CqIg1-iivdkLbGm9e",
      accounts: [ "8955e819123416e67a21e870aca93db3e6bdfde18ea7210d485604655df55e8d" ]
    }
  }
}
//0xb10E74BeEDAccFD5e9073A45711D3369138382F2