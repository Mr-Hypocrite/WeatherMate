import React from 'react'
import styles from './SevenDayCarousel.module.css'
import Card from '../Card/Card'
import { useData } from '../../hooks/useData'
import { Carousel } from 'react-bootstrap'

let screenWidth = window.innerWidth

export default function SevenDayCarousel() {

    const { foreCastData } = useData()

    if (foreCastData !== null) {

        if (screenWidth > 1200) {
            return (
                <div className={styles.carousel__container}>
        
                    <h1>Forecast</h1>

                    <div className={styles.carousel_innerContainer}>
                        { foreCastData.daily.slice(0,7).map((day, index) => (
                            <Card props={ day } key={index} />
                        )) }
                    </div>
        
                </div>
            )
        } else if (screenWidth > 550) {
            return (
                <div className={styles.carousel__container}>

                    <h1>Forecast</h1>
        
                    <Carousel>
                        <Carousel.Item>
                            <div className={styles.carousel_innerContainer}>
                                { foreCastData.daily.slice(0,3).map((day, index) => (
                                    <Card props={ day } key={index} />
                                )) }
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={styles.carousel_innerContainer}>
                                { foreCastData.daily.slice(3,6).map((day, index) => (
                                    <Card props={ day } key={index} />
                                )) }
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={styles.carousel_innerContainer}>
                                { foreCastData.daily.slice(6,7).map((day, index) => (
                                    <Card props={ day } key={index} />
                                )) }
                            </div>
                        </Carousel.Item>
                    </Carousel>
        
                </div>
            )
        } else if (screenWidth > 450) {
            return (
                <div className={styles.carousel__container}>

                    <h1>Forecast</h1>
        
                    <Carousel>
                        <Carousel.Item>
                            <div className={styles.carousel_innerContainer}>
                                { foreCastData.daily.slice(0, 2).map((day, index) => (
                                    <Card props={ day } key={index} />
                                )) }
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={styles.carousel_innerContainer}>
                                { foreCastData.daily.slice(2, 4).map((day, index) => (
                                    <Card props={ day } key={index} />
                                )) }
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={styles.carousel_innerContainer}>
                                { foreCastData.daily.slice(4, 6).map((day, index) => (
                                    <Card props={ day } key={index} />
                                )) }
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={styles.carousel_innerContainer}>
                                { foreCastData.daily.slice(6,7).map((day, index) => (
                                    <Card props={ day } key={index} />
                                )) }
                            </div>
                        </Carousel.Item>
                    </Carousel>
        
                </div>
            )
        } else {
            return (
                <div className={styles.carousel__container}>

                    <h1>Forecast</h1>
        
                    <Carousel>
                        <Carousel.Item>
                            <div className={styles.carousel_innerContainer}>
                                <Card props={ foreCastData.daily[0] } />
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={styles.carousel_innerContainer}>
                                <Card props={ foreCastData.daily[1] } />
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={styles.carousel_innerContainer}>
                                <Card props={ foreCastData.daily[2] } />
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={styles.carousel_innerContainer}>
                                <Card props={ foreCastData.daily[3] } />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={styles.carousel_innerContainer}>
                                <Card props={ foreCastData.daily[4] } />
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={styles.carousel_innerContainer}>
                                <Card props={ foreCastData.daily[5] } />
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={styles.carousel_innerContainer}>
                                <Card props={ foreCastData.daily[6] } />
                            </div>
                        </Carousel.Item>
                    </Carousel>
        
                </div>
            )
        }
    }
}
