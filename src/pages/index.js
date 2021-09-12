import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <div>
    <section>
      <Seo title="Sacral" />
      <h1>Пан Коцький</h1>
      <Link to='/artist'>
        <button>about me</button>
      </Link> 
      <Link to='/my-work'>
        <button>my work</button>
      </Link>
    </section>
  </div>
)

export default IndexPage
