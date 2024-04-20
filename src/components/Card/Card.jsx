import * as styles from './Card.module.scss'

export default function Card({ seniorCard, prevBtn, nextBtn, onPrev, onNext }) {
    const htmlElement = document.querySelector('html')
    let zoom = Math.floor(((window.outerWidth - 10) / window.innerWidth) * 100)

    if (zoom <= 100) {
        htmlElement.style.fontSize = '16px'
    }
    if (zoom > 100 && zoom <= 111) {
        htmlElement.style.fontSize = '12px'
    }
    if (zoom > 111 && zoom <= 151) {
        htmlElement.style.fontSize = '10px'
    }
    if (zoom > 151 && zoom <= 201) {
        htmlElement.style.fontSize = '8px'
    }

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