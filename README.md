# Oika Stargaze

NFT link:

https://testnet.publicawesome.dev/media/stars1u8z2n5u7whwf4656yxfyh8ssjxy2tuhavds8ddrmdfvvwu84cvuqvvqhtp/1



## Setup project

```sh
git clone https://github.com/omniscopic/oika-stargaze
cd oika-stargaze
yarn install
```

## Configure project

```sh
cp config.example.js config.js
```

## Create an account on testnet

```sh
yarn account
```

This outputs an address you can use to instantiate your minter contract. Copy the generated `mnemonic` and account `address` to `config.js`.

## Get funds from faucet

Ask for funds from the `#faucet` channel in [Discord Stargaze](https://discord.gg/stargaze). You'll need the Developer role to see the channel.

```discord
$request [address]
```

## Upload images and metadata to nft.storage

```sh
yarn run nft-storage-upload
```

update baseTokenUri with resulting value

## Initialize an NFT minting contract

update `startTime` in `config.js` to time in the future

```sh
yarn minter
```

update `minter` and `sg721` in `config.js` with the new contract addresses

## Mint

### Mint a specific NFT to an address

```sh
yarn mint --for 1 stars1mjrype443c3mte26c5p609derz4hv2qv5wyw52
```

`[address]` can be any Cosmos address. It'll be converted automatically into a Stargaze address.

### Mint to an address

```sh
yarn mint --to [address]
```

This mints the next available token ID to the given address.

### Batch mint

Mint `num` NFTs to an address.

```sh
yarn mint --to [address] --batch [num]
```

Same as `mint --to` but mints the next [num] tokens sequentially to the given address.

## Whitelist (optional)

Instantiate a whitelist contract:

```sh
yarn whitelist
```

The output of the above command should give you a whitelist contract address. Edit `config.js` and update the `whitelist` field with this value. Next, set this address in your minter contract with:

```sh
yarn minter --whitelist [whitelist_address]
```

To add addresses to the whitelist, use:

```sh
yarn whitelist --add [stars1..., stars2..., etc.]
```

## Query sg721

You can run queries against an instantiated sg721 contract with:

```sh
yarn query
```

For all possible queries, see the [query types](https://github.com/public-awesome/cw-nfts/blob/main/contracts/cw721-base/src/msg.rs#L76).

## Testnet

Test your contract. Make sure it's visible in launchpad. Try minting and viewing the NFT in your profile.
[https://testnet.publicawesome.dev/](https://testnet.publicawesome.dev/)

## Video Walkthrough (Big thank you to meta-induction)

[https://www.youtube.com/watch?v=1gvDlBWKEUc](https://www.youtube.com/watch?v=1gvDlBWKEUc)

[https://asciinema.org/a/485818](https://asciinema.org/a/485818)

# More documentation

A more comprehensive guide is available at [Stargaze Docs](https://docs.stargaze.zone/guides/readme).

# Disclaimer

STARGAZE TOOLS IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. No developer or entity involved in creating Stargaze Tools or smart contracts will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of Stargaze, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value. Although Public Awesome, LLC and it's affiliates developed the initial code for Stargaze, it does not own or control the Stargaze network, which is run by a decentralized validator set.

# Terms and Conditions

By using this code you agree to the following [terms and conditions](TERMS).
