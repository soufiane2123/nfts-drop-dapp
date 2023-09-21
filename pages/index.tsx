import styles from "../styles/Home.module.css"
import { NextPage } from "next"
import Header from "../components/Header"

const Nfts: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <iframe
                className={styles.iframe}
                src="https://embed.ipfscdn.io/ipfs/bafybeihazpt6pkm4azgtupdz7hc2j3o4zpjsvtcgfq4t2keozxkss3ud6q/?contract=0xe29f8038d1a3445ab22ad1373c65ec0a6e1161a4&chain=%7B%22name%22%3A%22Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Feth-goerli.g.alchemy.com%2Fv2%2FzQkHCN5EFwPC7AVYATrnGwheQOWhTA7C%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Goerli+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22gor%22%2C%22chainId%22%3A5%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22goerli%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=b74cb5e0df5f7b1b64d861a7830e5b4f&theme=dark&primaryColor=orange"
            ></iframe>
        </div>
    )
}

export default Nfts
