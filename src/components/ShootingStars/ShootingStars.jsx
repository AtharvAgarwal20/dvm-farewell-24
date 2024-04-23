import { useEffect, useRef } from 'react'
import * as styles from './ShootingStars.module.scss'

import gsap from 'gsap'

export default function ShootingStars({ starCount }) {
    const starArray = []

    const starContainerRef = useRef()

    for (let i = 0; i < starCount; i++) {
        starArray.push(
            <span
                key={i}
                className={styles.shootingStar}
            ></span>
        )
        // console.dir(starContainerRef.current)
    }

    useEffect(() => {
        for (let star of starContainerRef.current.children) {
            const rightPos = Math.floor(Math.random() * 90)
            const randDuration = (Math.floor(Math.random() * 25) + 1) / 10 + 3
            const randDelay = Math.floor(Math.random() * 25) / 10 + 0.5
            const randRepeatDelay = Math.floor(Math.random() * 25) / 10 + 1
            gsap.fromTo(star, {
                opacity: 1,
                top: -10,
                right: `${rightPos}vw`,
                left: 'initial',
                rotate: 315,
                translateX: 0,
                translateY: 0
            }, {
                rotate: 315,
                top: -10,
                right: `${rightPos}vw`,
                left: 'initial',
                translateX: -1000,
                translateY: 1000,
                opacity: 0,
                duration: randDuration,
                delay: randDelay,
                repeatDelay: randRepeatDelay,
                repeat: -1
            })
        }
    }, [])

    return (
        <section className={styles.shootingStarsContainer} ref={starContainerRef}>
            {starArray}
        </section>
    )
}