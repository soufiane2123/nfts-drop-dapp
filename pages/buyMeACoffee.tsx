import abi from "../utils/BuyMeACoffee.json"
import { ethers } from "ethers"
import Head from "next/head"
import React, { useEffect, useState } from "react"
import styles from "../styles/buyMeACoffee.module.css"
import Header from "../components/Header"

export default function Home() {
    // My wallet if you want to buy me a coffee
    const contractAddress = "0x929f12B944826fE12A59fB5b33965296e9d1b89C"
    const contractABI = abi.abi

    // Component state
    const [currentAccount, setCurrentAccount] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [amount, setAmount] = useState("0.001") // Default amount

    const onAmountChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setAmount(event.target.value)
    }

    // Wallet connection logic
    const isWalletConnected = async () => {
        try {
            const { ethereum } = window

            const accounts = await ethereum.request({ method: "eth_accounts" })
            console.log("accounts: ", accounts)

            if (accounts.length > 0) {
                const account = accounts[0]
                console.log("wallet is connected! " + account)
            } else {
                console.log("make sure MetaMask is connected")
            }
        } catch (error) {
            console.log("error: ", error)
        }
    }

    const connectWallet = async () => {
        try {
            const { ethereum } = window

            if (!ethereum) {
                console.log("please install MetaMask")
            }

            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            })

            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error)
        }
    }

    const buyCoffee = async () => {
        try {
            const { ethereum } = window

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum, "any")
                const signer = provider.getSigner()
                const buyMeACoffee = new ethers.Contract(contractAddress, contractABI, signer)

                console.log("buying coffee..")
                const coffeeTxn = await buyMeACoffee.buyCoffee(
                    name ? name : "anon",
                    message ? message : "Enjoy your coffee!",
                    { value: ethers.utils.parseEther(amount) } // Use the user-specified amount
                )

                await coffeeTxn.wait()

                console.log("mined ", coffeeTxn.hash)

                console.log("coffee purchased!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.container}>
            <Header />
            <Head>
                <title>Buy Me a Coffee!</title>

                <meta name="description" content="Tipping site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Buy Me a Coffee!</h1>
                <br />
                <br />
                {currentAccount ? (
                    <div>
                        <form>
                            <div>
                                <label htmlFor="amountInput">Enter the amount (ETH): </label>
                                <input
                                    className="w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50"
                                    type="number"
                                    step="0.001"
                                    id="amountInput"
                                    value={amount}
                                    onChange={onAmountChange}
                                />
                            </div>
                            <br />
                            <div>
                                <button type="button" className={styles.btn} onClick={buyCoffee}>
                                    Send Coffee
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <button className={styles.btn} onClick={connectWallet}>
                        Connect your wallet
                    </button>
                )}
            </main>
        </div>
    )
}
