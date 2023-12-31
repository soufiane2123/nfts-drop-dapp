import styles from '../styles/Nfts.module.css'
import { NextPage } from 'next'
import Header from '../components/Header'
import { useNFTs, useContract, ThirdwebNftMedia } from '@thirdweb-dev/react'
import { contractAddress } from '../consts/parameters'
import { PaginationHelper } from '../components/PaginationHelper'

const Nfts: NextPage = () => {
    // Replace with your contract address in the code.
    const { contract } = useContract(contractAddress)
    const { data: nfts, isLoading, error } = useNFTs(contract)

    // console.log(nfts)

    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.info}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    nfts?.map((nft) => {
                        return (
                            <div key={nft.metadata.id}>
                                <ThirdwebNftMedia
                                    metadata={nft.metadata}
                                    height="200"
                                    style={{ borderRadius: '10px' }}
                                />
                                <p>{nft.metadata.name}</p>
                            </div>
                        )
                    })
                )}
            </section>
        </div>
    )
}

export default Nfts
