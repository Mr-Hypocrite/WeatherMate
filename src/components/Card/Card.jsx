import React from 'react'
import styles from './Card.module.css'

export default function Card( { props } ) {

  let date = new Date(props.dt * 1000)
  let day, weekDay

  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  day = date.getDate()

  weekDay = days[date.getDay()]

  return (
    <div className={styles.card__container}>
        <h2>{ weekDay }, { day }</h2>
        <img src={`/Icons/${ props.weather[0].icon }.svg`}alt={props.weather[0].icon} />
        <div className={styles.temp_minMax}>
            <h3>{ (props.temp.max - 273.15).toPrecision(3) }°C</h3> <h4>{ (props.temp.min - 273.15).toPrecision(3) }°C</h4>
        </div>
        <h2>Clouds</h2>
    </div>
  )
}
