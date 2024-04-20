import { useEffect, useState } from 'react'
import * as styles from './App.module.scss'

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
import Card1 from './assets/Card1.png'

import Loader from './components/Loader/Loader'
import Card from './components/Card/Card'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [seniorIndex, setSeniorIndex] = useState(0)

  const seniorsImageArray = [Card1, Card1, Card1]
  const seniorsDescriptionArray = ["desc 1", "desc 2", "desc 3"]

  useEffect(() => {
    const assets = [moon, dvmLogo, bitsPilani, stars, gridLeft, gridRight, Card1, btnNext, btnPrev]

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

  function carouselPrev() {
    if (seniorIndex > 0 && seniorIndex < seniorsImageArray.length) {
      setSeniorIndex(prevState => prevState - 1)
    }
  }

  function carouselNext() {
    if (seniorIndex < seniorsImageArray.length - 1 && seniorIndex >= 0) {
      setSeniorIndex(prevState => prevState + 1)
    }
  }

  return (
    <>
      {isLoading && <Loader />}
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
          <p>{seniorsDescriptionArray[seniorIndex]}</p>
          <Card seniorCard={seniorsImageArray[seniorIndex]} nextBtn={btnNext} prevBtn={btnPrev} onPrev={carouselPrev} onNext={carouselNext} />
        </section>
        <footer>Made with ❤️ by DVM</footer>
      </main>
    </>
  )
}

export default App
