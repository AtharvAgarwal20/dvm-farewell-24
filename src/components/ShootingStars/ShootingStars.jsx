import * as styles from './ShootingStars.module.scss'

export default function ShootingStars({ starCount }) {
    const starArray = []

    for (let i = 0; i < starCount; i++) {
        starArray.push(<span
            key={i}
            className={styles.shootingStar}
        ></span>)
    }
    return (
        <section className={styles.shootingStarsContainer}>
            {starArray}
        </section>
    )
}