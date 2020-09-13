import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"

const Error = () => {
  return (
    <Layout>
      <div className={styles.error}>
        <Banner title="oops it's a dead end">
          <Link to="/" className="btn-white">
            back to home page
          </Link>
        </Banner>
      </div>
    </Layout>
  )
}

export default Error
