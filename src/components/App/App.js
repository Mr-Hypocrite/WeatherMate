import styles from './App.module.css'
import { DataProvider } from '../../context/DataContext'
import Input from '../Input/Input'
import Main from '../Main/Main'
import Forecast from '../Forecast/Forecast'
import Carousel from '../SevenDayCarousel/SevenDayCarousel'
import { useEffect } from 'react'
import { useData } from '../../hooks/useData'

let screenHeight = window.innerHeight

export default function App() {

  useEffect(() => {
    if (screenHeight < 860) {
      document.getElementById(`container`).style.height = `870px`
    }
  }, [])

  return (

      <DataProvider>
        <div id='container' className={`${styles.app__container}`}>
          <Input />
          <Main />
          <Forecast />
          <Carousel />
        </div>
      </DataProvider>

  )
}