import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

export default () => {
  return (
    <Layout>
      <h1>Hello world!</h1>
      <Link to="/tours/">Go to tours</Link>
    </Layout>
  )
}
