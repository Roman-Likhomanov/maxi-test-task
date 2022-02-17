import React from "react";
import arrowDown from './down.png';
import arrowUp from './up.png';
import styles from './arrows.module.scss'

export const ArrowDown = () => {
    return (
    <img className={styles.size} src={arrowDown}/>    
    )
}

export const ArrowUp = () => {
    return (
    <img className={styles.size} src={arrowUp}/>    
    )
}