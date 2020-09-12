import React from "react"
import { Link } from "gatsby"
import Banner from "../components/Banner"

import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"

export default () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="Continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non modi cumque alias incidunt repellat, consequuntur iusto quas numquam ad!"
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </SimpleHero>
    </Layout>
  )
}
