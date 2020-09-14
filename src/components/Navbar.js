import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import Logo from "../images/logo.svg"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggleNav = () => {
    setOpen(open => !open)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Logo />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            open ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`
          }
        >
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a key={index} href={item.url} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
