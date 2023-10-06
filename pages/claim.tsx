import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Header from "../components/Header";
import { Web3Button } from "@thirdweb-dev/react";
import { contractAddress } from "../consts/parameters";

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
          // Replace with your contract address in the code.
          contractAddress={contractAddress}
          action={(contract) => contract.erc721.claim(1)}
        >
          Claim NFT
        </Web3Button>
      </section>
    </div>
  );
};

export default Home;
