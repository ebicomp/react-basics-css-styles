import React from "react"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-center"]}>
        <div className={styles["nav-header"]}>
          <a href="/">
            <img src="images/logo.svg" />
          </a>
        </div>
        <ul className={styles["navbar-links"]}>
          <li>Home</li>
          <li>Aboout</li>
          <li>Services</li>
          <li>Tours</li>
        </ul>
        <ul className={styles["nav-icons"]}>
          <li>
            <a href="https://www.twitter.com" className="nav-icon">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" className="nav-icon">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" className="nav-icon">
              <i className="fab fa-squarespace"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
