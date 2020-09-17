import React from "react"
import TourList from "./TourList"
import { graphql, useStaticQuery } from "gatsby"

const Tours = () => {
  const { tours } = useStaticQuery(getTours)

  return <TourList tours={tours} />
}

const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          contentful_id
          days
          slug
          country
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Tours
