import { useEffect, useState, useRef } from 'react'
import * as styles from './App.module.scss'
import gsap from "gsap"
import { SpeedInsights } from "@vercel/speed-insights/react"

import moon from './assets/moon.png'
import dvmLogo from './assets/dvmLogoName.svg'
import bitsPilani from './assets/bitspilaninight.png'
import stars from './assets/Stars.png'
import gridLeft from './assets/Grid left.png'
import gridRight from './assets/Grid right.png'
import shadowRectangle from './assets/Shadow rect.png'
import shadowCentre from './assets/shadowCentre.png'
import btnNext from './assets/btnNext.png'
import btnPrev from './assets/btnPrev.png'
import person1 from './assets/person1.png'
import person2 from './assets/person2.png'
import person3 from './assets/person3.png'

import Loader from './components/Loader/Loader'
import Card from './components/Card/Card'
import ShootingStars from './components/ShootingStars/ShootingStars'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [seniorIndex, setSeniorIndex] = useState(0)

  const seniorsImageArray = [person1, person2, person3]

  const cardRef = useRef();

  useEffect(() => {
    const assets = [moon, dvmLogo, bitsPilani, stars, gridLeft, gridRight, person1, person2, person3, btnNext, btnPrev]

    const loadAssets = async () => {
      try {
        await Promise.all(
          assets.map(
            (asset) =>
              new Promise((resolve) => {
                const img = new Image();
                img.src = asset;
                img.onload = resolve;
                img.onerror = resolve;
              })
          )
        );
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading assets:", error);
        setIsLoading(false);
      }
    };

    loadAssets();
  }, []);

  function transitionFunction(element) {
    gsap.to(element, {
      translateY: '2rem',
      opacity: '0'
    })
    setTimeout(() => {
      gsap.to(element, {
        translateY: '0rem',
        opacity: '1'
      })
    }, 700)
  }

  function carouselPrev() {
    if (seniorIndex >= 0 && seniorIndex < seniorsImageArray.length) {
      for (let transitionTarget of cardRef.current.children[0].children) {
        transitionFunction(transitionTarget)
      }
      setTimeout(() => {
        setSeniorIndex(prevState => {
          if (prevState === 0) {
            return seniorsImageArray.length - 1
          }
          else {
            return prevState - 1
          }
        })
      }, 350)
    }
  }

  function carouselNext() {
    if (seniorIndex < seniorsImageArray.length && seniorIndex >= 0) {
      for (let transitionTarget of cardRef.current.children[0].children) {
        transitionFunction(transitionTarget)
      }
      setTimeout(() => {
        setSeniorIndex(prevState => {
          if (prevState === seniorsImageArray.length - 1) {
            return 0
          }
          else {
            return prevState + 1
          }
        })
      }, 350)
    }
  }

  return (
    <>
      {isLoading && <Loader />}
      <SpeedInsights />
      <img
        src={shadowRectangle}
        alt="shadow"
        draggable={false}
        className={styles.shadowRect}
      />
      <img
        src={shadowCentre}
        alt="shadow"
        draggable={false}
        className={styles.shadowCentre}
      />
      <img
        src={gridLeft}
        alt="left grid"
        draggable={false}
        className={styles.gridLeft}
      />
      <img
        src={gridRight}
        alt="right grid"
        draggable={false}
        className={styles.gridRight}
      />
      <img
        src={stars}
        alt="stars"
        draggable={false}
        className={styles.stars}
      />
      <ShootingStars starCount={10} />
      <img
        src={bitsPilani}
        alt="clocktower"
        draggable={false}
        className={styles.bitsPilani}
      />
      <img
        src={moon}
        alt="moon"
        draggable={false}
        className={styles.moon}
      />
      <main className={styles.page}>
        <img
          src={dvmLogo}
          alt="dvm"
          draggable={false}
          className={styles.dvmLogo}
        />
        <section className={styles.content}>
          <h1>Farewell<br />2024</h1>
          <p>Your vibes made our time here awesome. Take all the good stuff with you - memories, laughs, and a ton of wisdom. The world's lucky to get you. Cheers to your next adventure!</p>
          <Card
            seniorCard={seniorsImageArray[seniorIndex]}
            nextBtn={btnNext}
            prevBtn={btnPrev}
            onPrev={carouselPrev}
            onNext={carouselNext}
            ref={cardRef}
          />
        </section>
        <footer>Made with ❤️ by DVM</footer>
      </main>
    </>
  )
}

export default App
