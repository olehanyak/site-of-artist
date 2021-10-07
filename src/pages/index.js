import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import Seo from "../components/seo"
import Artist from "../components/Artist"
import MyWorks from "../components/myWorks"

const IndexPage = () => (
  <Layout>
    <Seo title="Sacral" />
    <Artist />
    <MyWorks heading={'Мої роботи'} />
  </Layout>
)

export default IndexPage
