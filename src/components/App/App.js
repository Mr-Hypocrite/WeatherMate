import styles from './App.module.css'
import { DataProvider } from '../../context/DataContext'
import Input from '../Input/Input'
import Main from '../Main/Main'
import Forecast from '../Forecast/Forecast'
import Carousel from '../SevenDayCarousel/SevenDayCarousel'
import { useEffect } from 'react'

let screenHeight = window.innerHeight

export default function App() {

  useEffect(() => {
    if (screenHeight < 860) {
      document.getElementById(`container`).style.height = `870px`
      document.getElementById(`background`).style.height = `870px`
    }
  }, [])

  return (

      <DataProvider>
        <div id = 'background' className={`${styles.app__container}`}>
          <div id='container'>
            <Input />
            <Main />
            <Forecast />
            <Carousel />
          </div>
        </div>
      </DataProvider>

  )
}