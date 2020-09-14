import React from "react"
import { graphql } from "gatsby"

import StyledHero from "../components/StyledHero"
import Layout from "../components/Layout"

const Blog = ({ data }) => {
  const imageData = data.blogsBcg.childImageSharp.fluid
  return (
    <Layout>
      <StyledHero img={imageData} />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogsBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Blog
