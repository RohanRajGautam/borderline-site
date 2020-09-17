import React from "react"
import Image from "gatsby-image"
import { FaMap } from "react-icons/fa"
import styles from "../../css/tour.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Tour = ({ tour }) => {
  const { name, country, slug, days, price, images } = tour
  let mainImage = images[0].fluid

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single photo" />
        <AniLink fade to={`/tours/${slug}`} className={styles.link}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <div className={styles.country}>
            <FaMap className={styles.icon} />
            <h4>{country}</h4>
          </div>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour
