"use client"

import { useState } from "react"
import { NFTCard } from "../components/nftCard"
import styles from "../styles/buyMeACoffee.module.css"
import Header from "../components/Header"
import { AlchemyapiKey } from "../consts/parameters"

const Home = () => {
    const [wallet, setWalletAddress] = useState("")
    const [collection, setCollectionAddress] = useState("")
    const [NFTs, setNFTs] = useState([])
    const [fetchForCollection, setFetchForCollection] = useState(false)

    const fetchNFTs = async () => {
        let nfts
        console.log("fetching nfts")
        // const api_key = "zQkHCN5EFwPC7AVYATrnGwheQOWhTA7C" // put youre alchemy api key
        const baseURL = `https://eth-goerli.alchemyapi.io/v2/${AlchemyapiKey}/getNFTs/`

        if (!collection.length) {
            var requestOptions = {
                method: "GET",
            }

            const fetchURL = `${baseURL}?owner=${wallet}`

            nfts = await fetch(fetchURL, requestOptions).then((data) => data.json())
        } else {
            console.log("fetching nfts for collection owned by address")
            const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`
            nfts = await fetch(fetchURL, requestOptions).then((data) => data.json())
        }

        if (nfts) {
            console.log("nfts:", nfts)
            setNFTs(nfts.ownedNfts)
        }
    }

    const fetchNFTsForCollection = async () => {
        if (collection.length) {
            var requestOptions = {
                method: "GET",
            }
            // const api_key = "zQkHCN5EFwPC7AVYATrnGwheQOWhTA7C" // put youre alchemy api key
            const baseURL = `https://eth-goerli.alchemyapi.io/v2/${AlchemyapiKey}/getNFTsForCollection/`
            const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`
            const nfts = await fetch(fetchURL, requestOptions).then((data) => data.json())
            if (nfts) {
                console.log("NFTs in collection:", nfts)
                setNFTs(nfts.nfts)
            }
        }
    }

    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center py-8 gap-y-3">
                <div className="flex flex-col w-full justify-center items-center gap-y-2">
                    <input
                        disabled={fetchForCollection}
                        className="w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50"
                        onChange={(e) => {
                            setWalletAddress(e.target.value)
                        }}
                        value={wallet}
                        type={"text"}
                        placeholder="Add your wallet address"
                    ></input>
                    <input
                        className="w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50"
                        onChange={(e) => {
                            setCollectionAddress(e.target.value)
                        }}
                        value={collection}
                        type={"text"}
                        placeholder="Add the collection address"
                    ></input>
                    <label className="text-white-600 ">
                        <input
                            onChange={(e) => {
                                setFetchForCollection(e.target.checked)
                            }}
                            type={"checkbox"}
                            className="mr-2"
                        ></input>
                        Fetch for collection
                    </label>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            if (fetchForCollection) {
                                fetchNFTsForCollection()
                            } else fetchNFTs()
                        }}
                    >
                        Fetch!{" "}
                    </button>
                </div>
                {/* <div className="flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center">
                    {NFTs.length &&
                        NFTs.map((nft) => {
                            return <NFTCard nft={nft}></NFTCard>
                        })}
                </div> */}
                <div className="flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center">
                    {NFTs.length > 0
                        ? NFTs.map((nft) => <NFTCard nft={nft} key={nft.id} />)
                        : // Optionally, you can display a loading indicator or message here.
                          // For example:
                          // <p>Loading...</p>
                          null}
                </div>
            </div>
        </div>
    )
}

export default Home
