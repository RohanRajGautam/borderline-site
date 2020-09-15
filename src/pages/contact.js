import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Contacts from "../components/Contact/Contact"

const Contact = ({ data }) => {
  const imageData = data.connectBcg.childImageSharp.fluid
  return (
    <Layout>
      <StyledHero img={imageData} />
      <Contacts />
    </Layout>
  )
}

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Contact
