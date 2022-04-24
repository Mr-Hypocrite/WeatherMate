import React from 'react'
import { useData } from '../../hooks/useData'
import styles from "./Main.module.css"
var _ = require('lodash')
let date, time

export default function Main() {

  const { data } = useData()

  React.useEffect(() => {
    if (data !== null) {
      date = new Date(data.dt * 1000)
      time = date.toLocaleTimeString()
      date = date.toDateString()
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
