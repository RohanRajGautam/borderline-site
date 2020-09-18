import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import ToursComponent from "../components/Tours/Tours"

const Tours = ({ data }) => {
  const imageData = data.defaultBcg.childImageSharp.fluid
  return (
    <Layout>
      <StyledHero img={imageData} />
      <ToursComponent />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "aboutBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Tours
