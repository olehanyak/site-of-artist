import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactsPage = () => (
  <Layout>
    <Seo title="Contacts" />
    <h1>Hi, these are my contacts</h1>
    <p>Welcome to contacts page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactsPage
