import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <p>These are some of my portfolio</p>
    <p>To Be Added..</p>
    <Link to="/" style={{color: `teal`, fontSize: `2em`}}><FontAwesomeIcon icon={faArrowCircleLeft}></FontAwesomeIcon></Link>
  </Layout>
)

export default PortfolioPage
