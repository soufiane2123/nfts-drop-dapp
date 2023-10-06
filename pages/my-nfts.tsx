import styles from '../styles/MyNfts.module.css'
import { NextPage } from 'next'
import Header from '../components/Header'
import { useContract, useNFTs, ThirdwebNftMedia, useAddress } from '@thirdweb-dev/react'
import { contractAddress } from '../consts/parameters'

const MyNfts: NextPage = () => {
    // Replace with your contract address in the code.
    const { contract } = useContract(contractAddress)

    const address = useAddress()
    const { data: nfts, isLoading, error } = useNFTs(contract)

    const walletNotConnectedMessage = (
        <p className={styles.para}> Connect your wallet to view your NFTs</p>
    )

    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.info}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : !address ? (
                    walletNotConnectedMessage
                ) : (
                    nfts
                        ?.filter((nft) => nft.owner == address)
                        ?.map((nft) => {
                            return (
                                <div key={nft.metadata.id}>
                                    <ThirdwebNftMedia
                                        metadata={nft.metadata}
                                        height="200"
                                        style={{ borderRadius: '10px' }}
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
