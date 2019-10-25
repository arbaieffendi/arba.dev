/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
// import Header from "./header"
import "./layout.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLink} from "@fortawesome/free-solid-svg-icons"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {speed: 500})
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingBottom: `2rem`,
          paddingTop: `5rem`,
        }}
      >
        <main>{children}</main>
        <footer>
            <div style={{textAlign: 'center', position: "absolute center", bottom: 0}}>
              Copyright © {new Date().getFullYear()}, {` `}
              {/* <a href="https://arbaieffendi.github.io">Arba'i Effendi</a> */}
              <Link style={{color: 'teal', fontSize: `1em`}} to="https://arbaieffendi.github.io">Arba'i Effendi</Link>
              <br/>
              <Link style={{color: 'teal', fontSize: `1em`}} to="/#about-me">About<FontAwesomeIcon icon={faLink} /> </Link>
              <Link style={{color: 'teal', fontSize: `1em`}} to="/#contact-me">Contact<FontAwesomeIcon icon={faLink} /> </Link>
              {/* <Link style={{color: 'teal', fontSize: `1em`}} to="/portfolio">Portfolio<FontAwesomeIcon icon={faLink}> </FontAwesomeIcon> </Link> */}
            </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
