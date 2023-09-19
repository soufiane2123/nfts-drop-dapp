import styles from "../styles/WriteNote.module.css"
import { NextPage } from "next"
import Header from "../components/Header"
import { useState } from "react"
import { useContract, useContractWrite } from "@thirdweb-dev/react"

const WriteNote: NextPage = () => {
    const { contract } = useContract("0x282CC1699CEb1f00794b5B44c0f00Fde6CdC0706")
    const { mutate: write, isLoading, error } = useContractWrite(contract, "writeNote")

    const [id, setId] = useState("")
    const [note, setNote] = useState("")

    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.info}>
                <p className="label">ID:</p>
                <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} />
                <p className="label">Note:</p>
                <textarea
                    name="note"
                    rows={10}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
                <br />
                {/* <button disabled={isLoading} onClick={() => write([id, note])}> */}

                <button disabled={isLoading} onClick={() => write([id, note] as any)}>
                    Write Note
                </button>
                {error ? <p>{error.toString()}</p> : null}
            </section>
        </div>
    )
}

export default WriteNote
