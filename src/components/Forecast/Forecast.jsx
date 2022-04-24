import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useData } from '../../hooks/useData'
import styles from './Forecast.module.css'

let screenWidth = window.innerWidth

export default function Forecast() {

    const { data } = useData()

    if (data !== null)
    {
        if (screenWidth > 650)
        {
            return (
                <div className={styles.forecast__container}>
                    <h3>Feels Like { (data.main.feels_like - 273.15).toPrecision(3) }°C</h3>
                    <h3>Wind { data.wind.speed }m/s</h3>
                    <h3>Visibility { data.visibility }m</h3>
                    <h3>Humidity { data.main.humidity }%</h3>
                    <h3>Pressure { data.main.pressure }hPa</h3>
                </div>
            )
        } else {

            return (

                <div className={styles.carousel__container}>
                    <Carousel>
                        <Carousel.Item>
                            <div className={styles.carousel_slide}>
                                <h3>Feels Like { (data.main.feels_like - 273.15).toPrecision(3) }°C</h3>
                                <h3>Wind { data.wind.speed }m/s</h3>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={styles.carousel_slide}>
                                <h3>Visibility { data.visibility }m</h3>
                                <h3>Humidity { data.main.humidity }%</h3>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={styles.carousel_slide}>
                                <h3>Pressure { data.main.pressure }hPa</h3>                                
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                
            )
        }
        
    }
}
