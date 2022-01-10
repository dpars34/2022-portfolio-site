import React from "react"
import styles from './TitleScreen.module.css'
import profileImage from '../../Assets/profile_image.jpeg'
import { IoIosArrowDown } from 'react-icons/io'

const TitleScreen = () => {
    return (
        <div className={styles.container}>
           <div className={styles.flexContainer}>
                <h1 className={styles.titleName}><span className={styles.firstName}>Daniel </span><span>Parsons</span></h1>
                <h3 className={styles.subtitle}><span className={styles.firstName}>Bilingual </span><span>Developer</span></h3>
                <img className={styles.profilePicture} src={profileImage}></img>
                <div className={styles.bottomArea}>
                    <div className={styles.englishButton}>
                        <p className={styles.languageLabel}>English</p>
                        <p className={styles.arrow}><IoIosArrowDown /></p>
                    </div>
                    <button className={styles.contactButton}>Contact Me</button>
                    <div className={styles.japaneseButton}>
                        <p className={styles.languageLabel}>日本語</p>
                        <p className={styles.arrow}><IoIosArrowDown /></p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default TitleScreen