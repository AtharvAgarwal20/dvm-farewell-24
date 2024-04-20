import * as styles from './Loader.module.scss'

export default function Loader() {
    return (
        <main className={styles.loader}>
            {/* <h1>Loading...</h1> */}
            <div className={styles.loader}></div>
        </main>
    )
}