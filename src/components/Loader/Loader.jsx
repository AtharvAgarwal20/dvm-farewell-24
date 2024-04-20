import * as styles from './Loader.module.scss'

export default function Loader() {
    return (
        <main className={styles.loader}>
            {/* <h1>Loading...</h1> */}
            <div className={styles.wrapper}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
            </div>
        </main>
    )
}