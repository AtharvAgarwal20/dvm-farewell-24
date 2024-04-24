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
                <div className={styles.animationWrapper} ref={ref}>
                    <svg width={0} height={0} className={styles.svg}>
                        <clipPath id="card-body-mask" clipPathUnits="objectBoundingBox"><path d="M0.844,0.002 H0.042 C0.02,0.002,0.002,0.017,0.002,0.035 V0.394 C0.002,0.402,0.006,0.411,0.014,0.417 L0.049,0.445 C0.056,0.452,0.06,0.46,0.06,0.469 V0.515 C0.06,0.524,0.056,0.533,0.049,0.539 L0.014,0.567 C0.006,0.573,0.002,0.582,0.002,0.59 V0.969 C0.002,0.987,0.02,1,0.042,1 H0.962 C0.984,1,1,0.987,1,0.969 V0.132 C1,0.123,0.998,0.115,0.991,0.109 L0.872,0.011 C0.864,0.005,0.854,0.002,0.844,0.002"></path></clipPath>
                    </svg>
                    <div className={styles.cardBody}></div>
                    <svg className={styles.cardBorder} viewBox="0 0 452 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.39" d="M379.649 1H19C9.05888 1 1 9.05886 1 19V215.542C1 220.314 2.89545 224.892 6.26958 228.267L21.8373 243.841C25.2114 247.216 27.1069 251.794 27.1069 256.566V282.209C27.1069 286.982 25.2114 291.559 21.8373 294.934L6.26959 310.508C2.89545 313.884 1 318.461 1 323.234V530.5C1 540.441 9.05888 548.5 19 548.5H433C442.941 548.5 451 540.441 451 530.5V72.372C451 67.5993 449.105 63.022 445.73 59.6465L392.379 6.27457C389.003 2.89739 384.424 1 379.649 1Z" stroke="white" strokeWidth="2" />
                    </svg>
                    <img
                        src={seniorCard}
                        alt="senior"
                        draggable={false}
                        className={styles.cardContent}
                    />
                </div>
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