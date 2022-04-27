import React from 'react'
import { useData } from '../../hooks/useData'
import styles from "./Main.module.css"
var _ = require('lodash')
let date, time, time2

export default function Main() {

  const { data } = useData()

  React.useEffect(() => {
    if (data !== null) {
      date = new Date(data.dt * 1000)
      time = date.toLocaleTimeString()
      date = date.toDateString()
      time2 = Math.floor((new Date().getUTCHours() + new Date().getUTCMinutes() / 60) + new Date(data.timezone) / 3600)

      if (time2 >= 16 && time2 <= 19) {
        document.getElementById(`container`).style.backgroundImage = `url(${process.env.PUBLIC_URL}/Images/Morning_Partly_cloudy.png)`
      } else if (time2 > 19 || time2 < 4)
      {
        document.getElementById(`container`).style.backgroundImage = `url(${process.env.PUBLIC_URL}/Images/Night_Misty.png)`
      } else if (time2 >= 4 && time2 <= 8) {
        document.getElementById(`container`).style.backgroundImage = `url(${process.env.PUBLIC_URL}/Images/Morning_Partly_cloudy.png)`
      } else {
        document.getElementById(`container`).style.backgroundImage = `url(${process.env.PUBLIC_URL}/Images/bg-425.png)`
      }
  
      if (data.weather[0].description.includes('rain') || data.weather[0].description.includes('thunder') || data.weather[0].description.includes('drizzle')) {
        document.getElementById(`container`).style.backgroundImage = `url(${process.env.PUBLIC_URL}/Images/Rains.png)`
      }
    }

  }, [data])

  if (data !== null) {

    return (  
      <div className={`${styles.mainContainer}`}>
          <h2>{ data.name }, { data.sys.country }</h2>
          <h3>{ date }</h3>
          <img className={`${styles.weather_icon}`} src={`/Icons/${ data.weather[0].icon }.svg`} alt="weather_icon"></img>
          <h1>{ (data.main.temp - 273.15).toPrecision(3) }°C</h1>
          <h2>{ _.startCase(data.weather[0].description) }</h2>
          <h3>Updated As of { time }</h3>
      </div>
    )
  }

}
