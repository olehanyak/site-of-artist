
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Footer from "../components/Footer"
import Header from "../components/Header"

const Artist = () => {
  return (
  <div>
    <Header />
    <p>Welcome to site</p>
    <Link to="/">Go back to the homepage</Link>
    <Footer />
  </div>
  )
}

// Footer.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Artist
