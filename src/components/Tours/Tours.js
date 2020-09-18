import React from "react"
import TourList from "./TourList"
import { graphql, useStaticQuery } from "gatsby"

const Tours = () => {
  const { tours } = useStaticQuery(graphql`
    {
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
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return <TourList tours={tours} />
}

export default Tours
