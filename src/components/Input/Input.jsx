import React from 'react'
import styles from './Input.module.css' 

export default function Input() {
  return (
    <div className={`${styles.inputContainer}`}>
        <img className={`${styles.wmLogo}`} src="./Images/Weather_Mate_logo.png" alt="logo"></img>
        <div className={`${styles.enterCity}`}>
            <input type="text" name="city" placeholder="Enter City"></input>
            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div> 
    )
}