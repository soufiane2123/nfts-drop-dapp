import { ConnectWallet } from "@thirdweb-dev/react"
import Link from "next/link"
import styles from "../styles/Header.module.css"
import { useRouter } from "next/router"

const Header: React.FC = () => {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <div>
                <Link legacyBehavior href={"/"}>
                    <a className={router.pathname == "/" ? styles.active : styles.link}>Mint</a>
                </Link>
                <Link legacyBehavior href={"/nfts"}>
                    <a className={router.pathname == "/nfts" ? styles.active : styles.link}>NFTs</a>
                </Link>
                <Link legacyBehavior href={"/my-nfts"}>
                    <a className={router.pathname == "/my-nfts" ? styles.active : styles.link}>
                        My NFTs
                    </a>
                </Link>
                <Link legacyBehavior href={"/buyMeACoffee"}>
                    <a className={router.pathname == "/buyMeACoffee" ? styles.active : styles.link}>
                        Buy Me a Coffee
                    </a>
                </Link>
                {/* <Link legacyBehavior href={"/write-note"}>
                    <a className={router.pathname == "/write-note" ? styles.active : styles.link}>
                        Write Note
                    </a>
                </Link> */}
                {/* <Link legacyBehavior href={"/mint"}>
                    <a className={router.pathname == "/mint" ? styles.active : styles.link}>Mint</a>
                </Link> */}
            </div>
            <div className={styles.connectWallet}>
                {router.pathname === "/" ||
                router.pathname === "/buyMeACoffee" ||
                router.pathname === "/nfts" ? null : (
                    <ConnectWallet />
                )}
            </div>
        </div>
    )
}

export default Header
