import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const MyWorkPage = () => (
  <Layout>
    <Seo title="My work" />
    <h1>Hi, these are my works</h1>
    <p>Welcome to work page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MyWorkPage
