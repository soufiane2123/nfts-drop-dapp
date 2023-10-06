# NFT Drop Collection DApp

Welcome to the NFT Drop Collection DApp! This decentralized application allows you to easily manage and showcase your NFT collection and mint new NFTs. Here are some of the key features of this project:

## Features

- **Ready Mint Pages**: Mint new NFTs with ease. We provide you with ready-to-use minting pages to create your unique NFTs.

- **View All NFTs**: Explore and display all NFTs within a specific collection on the blockchain. Get a comprehensive overview of your NFT collection.

- **My Minted NFTs**: Keep track of the NFTs you've minted. This page displays all the NFTs associated with your address.

- **Fetch Collection Data**: Retrieve information about any NFT collection on the blockchain. Simply enter the contract address, and you'll get detailed information.

- **Fetch NFT Data by Address**: Find out which NFTs are owned by a specific address. Enter the address, and you'll get a list of the NFTs they own.

- **Fetch Tokens Data by Address**: Find out which Tokens are owned by a specific address. Enter the address, and you'll get a list of the Tokens they own.

- **Buy Me a Coffee Page**: If you find this project helpful, consider supporting us with a cup of coffee. Your contributions help us maintain and improve this DApp.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository**: Use the following command to clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/nft-drop-collection-dapp.git
   cd nft-drop-collection-dapp
   yarn install

2. **Environment Variables**: To run this project, you will need to add environment variables. Check the *.env.example* file for all the environment variables required and add it to *.env.local* file or set them up on your hosting provider.

3. **Import Your NFT Collection**:
Go to the `consts/parameters.ts` and update the following values:

`contractAddress`: The smart contract address of your NFT collection.
`chain`: The name of the chain that your smart contract is deployed to.
`blockExplorer`: (Optional) - The block explorer to open when user's click on historical events of each NFT.

4. **Run the DApp**: Start the DApp on Localhost by running the following command:

   ```bash
   yarn run dev

5. **Access the DApp**: Open your web browser and go to http://localhost:3000 to access the NFT Drop Collection DApp.

## Contributing

We welcome contributions from the community. If you'd like to contribute to the project, please fork the repository, make your changes, and submit a pull request. We'll review and merge your contributions.

## Support

If you encounter any issues or have questions, feel free to open an issue on GitHub. 

Thank you for using the NFT Drop Collection DApp! We hope you enjoy managing your NFTs with ease. 