import * as styles from './Card.module.scss'

export default function Card({ seniorCard, prevBtn, nextBtn, onPrev, onNext }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img
                    src={prevBtn}
                    alt="prev button"
                    className={styles.prev}
                    draggable={false}
                    onClick={onPrev}
                />
                <img
                    src={seniorCard}
                    alt="senior"
                    draggable={false}
                    className={styles.seniorCard}
                />
                <img
                    src={nextBtn}
                    alt="next button"
                    className={styles.next}
                    draggable={false}
                    onClick={onNext}
                />
            </div>
        </div>
    )
}