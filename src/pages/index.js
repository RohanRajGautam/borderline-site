import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Banner from "../components/Banner"
import Layout from "../components/Layout"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import FeaturedTour from "../components/Home/FeaturedTour"

export default ({ data }) => {
  const imageData = data.defaultBcg.childImageSharp.fluid
  return (
    <Layout>
      <StyledHero home="true" img={imageData}>
        <Banner
          title="Continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non modi cumque alias incidunt repellat, consequuntur iusto quas numquam ad!"
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
      <FeaturedTour />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
