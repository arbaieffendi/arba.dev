import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Portfolio = () => (
  <div style={{ background: `teal`, alignItems: `center`}}>
    {
    <div style={{ margin: `0 auto`, maxHeight: 960, height:'3rem 3rem'}}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ color: `white`, textDecoration: `none`, }} >
          {siteTitle}
        </Link>
      </h1>
    </div>}
  </div>
)

export default Portfolio
