/*
 * This is the main config for your NFT sale.
 *
 * Fill this out with all your project details.
 */

module.exports = {
  //// ACCOUNT INFO ////
  // The account seed phrase to use for deployment
  mnemonic:
    'enlist hip relief stomach skate base shallow young switch frequent cry park',
  // Your STARS address
  account: 'stars1...',

  //// API CONFIG ////
  // The RPC endpoint for Stargaze, Double Double Testnet
  rpcEndpoint: 'https://rpc.double-double-1.stargaze-apis.com/',
  // The RPC endpoint for Stargaze, mainnet
  // rpcEndpoint: 'https://rpc.stargaze-apis.com/',
  // NFT.storage endpoint
  nftStorageEndpoint: 'https://api.nft.storage',
  // NFT.storage API key
  nftStorageApiKey: '',
  // Pinata API Key (optional)
  pinataApiKey: '',
  // Pinata Secret Key (optional)
  pinataSecretKey: '',

  //// COLLECTION INFO ////
  // The name of your collection
  name: 'Oika',
  // The 3-7 letter ticker symbol for your collection
  symbol: 'OIKA',
  // Project description
  description: 'Oika is the relational intelligence of nature expressed through human thought and action. A culture of oika heals people & planet.',
  // Link to image to use as the main image for the collection.
  // Either IPFS or valid http links allowed. Gif compatible.
  // (at least 500 x 500 pixels)
  image:
    'ipfs://bafybeie3ltofpyppuehwr5e5n5qg4psldqqaqn7awyegmrkebwald3xtk4/images/1.png',
  // External_link is optional. Gif compatible
  //   external_link:
  // 'https://c.tenor.com/o656qFKDzeUAAAAC/rick-astley-never-gonna-give-you-up.gif',
  // The address for royalites to go to (may be the same as `account`)
  // Comment out both below if not using royalites
  royaltyPaymentAddress: 'stars1mjrype443c3mte26c5p609derz4hv2qv5wyw52',
  // Royalty share: 1 = 100%, 0.1 = 10%
  royaltyShare: '0.1',

  //// WHITELIST CONTRACT (OPTIONAL) ////
  // A list of whitelisted addresses that will be able to purchase the sale early
  // Comment out if not using a whilelist
  // whitelist: ['stars1..', 'stars1...'],
  // The date when the whitelist only purchasing period ends and everyone can buy (in ISO format)
  // whitelistStartTime: '2022-03-11T21:00:00.000Z',
  // whitelistEndTime: '2022-03-13T21:00:00.000Z',
  // The price (in STARS) for the whitelist (minimum 25 STARS)
  // whitelistPrice: 50,
  // The Per Address Limit during whitelist period this can be different than the main public limit
  // whitelistPerAddressLimit: 5,
  // The number of members in the whitelist (max 5000, each 1000 is 100 STARS)
  // whitelistMemberLimit: 100,
  // The contract address for your whitelist contract
  // Get this after running `yarn whitelist`
  // whitelistContract: 'stars1...',

  //// MINTER CONTRACT ////
  // The base URI to be used to programatically mint tokens
  baseTokenUri: 'ipfs://bafybeihodinxnvxl35rh7oql4zxvigs5dgmzge2rpzgemkbn65z7npz4xa/galaxyVQDfNz',
  // The number of tokens to mint
  numTokens: 100,
  // The price (in STARS) for your NFTs (minimum 50 STARS)
  unitPrice: 100,
  // The max amount of NFTs an address can mint
  perAddressLimit: 1,
  // The date when the sale goes live
  // If whitelist is enabled, only whitelisted addresses will be able to purchase
  // startTime in ISO format
    // https://www.timestamp-converter.com/
  startTime: '2022-04-23T17:27:53.915Z',
  // The minter contract address
  // Get this after running `yarn minter`
  minter: 'stars1xr3rq8yvd7qplsw5yx90ftsr2zdhg4e9z60h5duusgxpv72hud3srz4yul',
  // SG721 contract address
  // Get this after running `yarn minter`
  sg721: 'stars1yw4xvtc43me9scqfr2jr2gzvcxd3a9y4eq7gaukreugw2yd2f8tssqyvcm',

  //// CONTRACT CODE IDs: Double Double Testnet ////
  // The code ID for sg721
  sg721CodeId: 1,
  // The code ID for the minter contract
  minterCodeId: 2,
  // The code ID for the whitelist contract
  whitelistCodeId: 3,

  // //// CONTRACT CODE IDs: Mainnet ////
  // // The code ID for sg721
  // sg721CodeId: 1,
  // // The code ID for the minter contract
  // minterCodeId: 2,
  // // The code ID for the whitelist contract
  // whitelistCodeId: 3,
};
