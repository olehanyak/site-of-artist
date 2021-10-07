import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Artist from "../components/Artist"
import AboutMe from "../components/AboutMe"

const ArtistPage = () => (
  <Layout>
    <Seo title="Page about me" />
    <AboutMe />
  </Layout>
)

export default ArtistPage