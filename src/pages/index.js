import React from "react"
import {Helmet} from "react-helmet"
import { withPrefix, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormContact from "../components/form-contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FormContact />
  </Layout>
)

export default IndexPage
