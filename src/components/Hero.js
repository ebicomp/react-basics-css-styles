import React from "react"
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.header}>CONTINUE EXPLORING</h1>
      <p className={styles.intro}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem dicta.</p>
      <button className={styles["btn-exolore-tours"]}>EXPLORE TOURS</button>
    </section>
  )
}

export default Hero
