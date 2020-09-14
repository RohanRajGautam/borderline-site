import React from "react"
import { Link } from "gatsby"
import Banner from "../components/Banner"
import StyledHero from "../components/StyledHero"
import Layout from "../components/Layout"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import { graphql } from "gatsby"

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
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
