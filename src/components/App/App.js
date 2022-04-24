import styles from './App.module.css'
import { DataProvider } from '../../context/DataContext'
import Input from '../Input/Input'
import Main from '../Main/Main'
import Forecast from '../Forecast/Forecast'
import Carousel from '../SevenDayCarousel/SevenDayCarousel'

export default function App() {
  return (

      <DataProvider>
        <div className={`${styles.app__container}`}>
          <Input />
          <Main />
          <Forecast />
          <Carousel />
        </div>
      </DataProvider>

  )
}