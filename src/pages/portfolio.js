import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <p>These are some of my portfolio</p>
    <Link to="/">Go back to homepage</Link>
  </Layout>
)

export default PortfolioPage
