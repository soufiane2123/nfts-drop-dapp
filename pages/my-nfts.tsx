import styles from "../styles/MyNfts.module.css"
import { NextPage } from "next"
import Header from "../components/Header"
import { useContract, useNFTs, ThirdwebNftMedia, useAddress } from "@thirdweb-dev/react"

const MyNfts: NextPage = () => {
    const { contract } = useContract("0x282CC1699CEb1f00794b5B44c0f00Fde6CdC0706")

    const address = useAddress()
    const { data: nfts, isLoading, error } = useNFTs(contract)

    console.log(nfts)

    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.info}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    nfts
                        ?.filter((nft) => nft.owner == address)
                        ?.map((nft) => {
                            return (
                                <div key={nft.metadata.id}>
                                    <ThirdwebNftMedia
                                        metadata={nft.metadata}
                                        height="200"
                                        style={{ borderRadius: "10px" }}
                                    />
                                    <p>
                                        ID: {nft.metadata.id} | {nft.metadata.name}
                                    </p>
                                </div>
                            )
                        })
                )}
            </section>
        </div>
    )
}

export default MyNfts
