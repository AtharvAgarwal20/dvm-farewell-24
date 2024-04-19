import { useEffect, useState } from 'react'
import * as styles from './App.module.scss'

import moon from './assets/moon.png'
import dvmLogo from './assets/dvmLogoName.svg'

import Loader from './components/Loader/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const assets = [moon, dvmLogo]

    async function loadAssets() {
      try {
        new Promise.all(assets.map(asset => new Promise((resolve => {
          const img = new Image()
          img.src = asset
          img.onload = resolve
          img.onerror = resolve
        }))))
        setIsLoading(false)
      }
      catch (err) {
        console.log(err)
        setIsLoading(false)
      }
    }

    loadAssets()
  }, [])

  return (
    <>
      {isLoading && <Loader />}
      <h1>Loaded</h1>
    </>
  )
}

export default App
