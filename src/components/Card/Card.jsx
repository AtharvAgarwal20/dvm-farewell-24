import * as styles from './Card.module.scss'

export default function Card({ senior }) {
    return (
        <div className={styles.card}>
            <img src={senior} alt="senior" className={styles.seniorCard} />
        </div>
    )
}