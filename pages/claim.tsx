import styles from "../styles/Home.module.css"
import { NextPage } from "next"
import Header from "../components/Header"
import { Web3Button } from "@thirdweb-dev/react"

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.info}>
                {/* <img className={styles.eyeLogo} src="./logo.png" alt="logo" /> */}
                <h1>Title of the Collection</h1>
                <p>Description.....</p>
                <br />
                <Web3Button
                    contractAddress="0x282CC1699CEb1f00794b5B44c0f00Fde6CdC0706"
                    action={(contract) => contract.erc721.claim(1)}
                >
                    Claim NFT
                </Web3Button>
            </section>
        </div>
    )
}

export default Home
