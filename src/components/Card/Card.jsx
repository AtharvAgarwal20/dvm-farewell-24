import { forwardRef } from "react";
import * as styles from "./Card.module.scss";

import ReactParallaxTilt from "react-parallax-tilt";

const Card = forwardRef(function (
  { seniorCard, prevBtn, nextBtn, onPrev, onNext },
  ref
) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card} ref={ref}>
        <ReactParallaxTilt
          tiltReverse={true}
          trackOnWindow={window.innerWidth > 1040}
          gyroscope={true}
          tiltEnable={window.innerWidth > 1040}
          perspective={3000}
        >
          <div className={styles.btnAnimationWrapper}>
            <img
              src={prevBtn}
              alt="prev button"
              className={styles.prev}
              draggable={false}
              onClick={onPrev}
            // style={{ zIndex: '500' }}
            />
            <img
              src={nextBtn}
              alt="next button"
              className={styles.next}
              draggable={false}
              onClick={onNext}
            // style={{ zIndex: '500' }}
            />
          </div>
          <div className={styles.animationWrapper}>
            <svg width={0} height={0} className={styles.svg}>
              <clipPath id="card-body-mask" clipPathUnits="objectBoundingBox">
                <path d="M0.844,0.002 H0.042 C0.02,0.002,0.002,0.017,0.002,0.035 V0.394 C0.002,0.402,0.006,0.411,0.014,0.417 L0.049,0.445 C0.056,0.452,0.06,0.46,0.06,0.469 V0.515 C0.06,0.524,0.056,0.533,0.049,0.539 L0.014,0.567 C0.006,0.573,0.002,0.582,0.002,0.59 V0.969 C0.002,0.987,0.02,1,0.042,1 H0.962 C0.984,1,1,0.987,1,0.969 V0.132 C1,0.123,0.998,0.115,0.991,0.109 L0.872,0.011 C0.864,0.005,0.854,0.002,0.844,0.002"></path>
              </clipPath>
            </svg>
            <div className={styles.cardBody}></div>
            <svg
              className={styles.cardBorder}
              viewBox="0 0 450 548"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.39"
                d="M18 1H378.649C383.159 1 387.484 2.79198 390.672 5.98154L444.023 59.3535C447.21 62.5414 449 66.8644 449 71.372V529.5C449 538.889 441.389 546.5 432 546.5H18C8.61117 546.5 1 538.889 1 529.5V322.234C1 317.726 2.79015 313.403 5.97683 310.215L21.5445 294.641C25.1061 291.078 27.1069 286.247 27.1069 281.209V255.566C27.1069 250.528 25.1061 245.697 21.5445 242.134L5.97682 226.56C2.79015 223.372 1 219.049 1 214.542V18C1 8.61115 8.61116 1 18 1Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <img
              src={seniorCard}
              alt="senior"
              draggable={false}
              className={styles.cardContent}
            />
          </div>
        </ReactParallaxTilt>
      </div>
    </div>
  );
});

export default Card;
