import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { siteMetadata } from "../../gatsby-config"

const Blog = ({ data }) => {
  return (
    <Layout>
      <h4>title: {data.site.siteMetadata.title}</h4>
      <p>description: {data.site.siteMetadata.description} </p>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default Blog
