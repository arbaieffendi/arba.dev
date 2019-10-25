// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavDropdown, Link } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header style={{ background: `teal`, alignItems: `center`}}>
    {/* <div style={{ margin: `0 auto`, maxHeight: 960, height:'3rem 3rem'}}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ color: `white`, textDecoration: `none`, }} >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
    <Navbar bg="teal" expand="lg" style={{position: `sticky`, top: `0`}}>
      <Navbar.Brand href="#home">Arba's Page</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about-me">About Me</Nav.Link>
          <Nav.Link href="#contact-me">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
