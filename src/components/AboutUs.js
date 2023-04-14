import React from "react"
import styles from "./AboutUs.module.css"
const AboutUs = () => {
  return (
    <section className={styles.aboutus}>
      <h1 className="header">ABOUT US</h1>
      <div>
        <div className={styles["about-us-img"]}>
          <img />
        </div>
        <div className={styles["about-us-desc"]}>
          <h1>Explore The Difference</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>
          <button>READ MORE</button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
