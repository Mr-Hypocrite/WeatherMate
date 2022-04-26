import { useState } from 'react'
import styles from './Input.module.css'
import { useData } from '../../hooks/useData'
import env from "react-dotenv"
var _ = require('lodash')

export default function Input() {

    const { setURL } = useData()

    const [location, setLocation] = useState('')

    return (
        <div className={`${styles.inputContainer}`}>
            <a href='/'><img className={`${styles.wmLogo}`} src="./Images/Weather_Mate_logo.png" alt="logo"></img></a>
            <div className={`${styles.enterCity}`}>
                <input 
                    type="text" 
                    name="city" 
                    placeholder="Enter City"
                    value = { _.capitalize(location) }
                    onChange={ (e) => setLocation(e.target.value) }
                    onKeyPress={ (e) => {
                        if (e.key === 'Enter') {
                            setURL(`https://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=${ env.API_KEY }`)
                            setLocation('')
                        }
                    } }
                >
                </input>
                <button
                    type="submit"
                    onClick={ () => { 
                        setURL(`https://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=${ env.API_KEY }`)
                        setLocation('')
                    } }
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    )


}