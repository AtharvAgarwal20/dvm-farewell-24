import { forwardRef } from 'react'
import * as styles from './Card.module.scss'

const Card = forwardRef(function ({ seniorCard, prevBtn, nextBtn, onPrev, onNext }, ref) {

    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img
                    src={prevBtn}
                    alt="prev button"
                    className={styles.prev}
                    draggable={false}
                    onClick={onPrev}
                    style={{ zIndex: '500' }}
                />
                <img
                    src={seniorCard}
                    alt="senior"
                    draggable={false}
                    className={styles.seniorCard}
                    ref={ref}
                />
                <img
                    src={nextBtn}
                    alt="next button"
                    className={styles.next}
                    draggable={false}
                    onClick={onNext}
                    style={{ zIndex: '500' }}
                />
            </div>
        </div>
    )
})

export default Card;