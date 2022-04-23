import React from 'react'
import styles from "./Main.module.css"

export default function Main() {
  return (
    <div className={`${styles.mainContainer}`}>
        <h2>Mumbai, IN</h2>
        <h3>Saturday, April 23, 2022</h3>
        <img className={`${styles.weather_icon}`} src="/Icons/01d.svg" alt="weather_icon"></img>
        <h1>33°C</h1>
        <h2>Clear</h2>
        <h3>Updated As of 10:00</h3>
    </div>
  )
}
