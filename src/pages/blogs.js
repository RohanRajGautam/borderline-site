import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"

const Blog = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Layout>
      <h4>title: {siteMetadata.title} </h4>
      <p>description: {siteMetadata.description} </p>
    </Layout>
  )
}

export default Blog
