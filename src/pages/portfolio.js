import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft, faLink} from "@fortawesome/free-solid-svg-icons"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1 class="display-4">Works</h1>
    <p>These are some of my work and hobby</p>
    <div class="container-fluid">
    <div class="row justify-content-md-left">
      <div class="col-md-4 order-md2 mb-4">
        <div class="card" style={{width: "auto;"}}>
          <div class="card-body">
            <h5 class="card-title teal-color">E-Access RTW</h5>
            <p class="card-text">Rail Train Wagon Delivery Management System. I work with my partner Septian Dwi this time. <span>&copy;2019</span></p>
            <p class="card-text text-muted font-sm">ASP.NET MVC, .NET Framework v4.7.2, SQL Server 2016 (on AWS RDS), IIS 8 (on AWS EC2), Migradoc Reporting Library</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 order-md2 mb-4">
        <div class="card" style={{width: "auto;"}}>
          <div class="card-body">
            <h5 class="card-title teal-color">To-Do Rust <a style={{color: 'teal', fontSize: `1em`}} href="https://arbaieffendi.github.io/to-do-rust"><FontAwesomeIcon icon={faLink} /> </a></h5>
            <p class="card-text">A to-do app with an enhanced timer. <span>&copy;2019</span></p>
            <p class="card-text text-muted font-sm">HTML, CSS, JS, Github Pages</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 order-md2 mb-4">
        <div class="card" style={{width: "auto;"}}>
          <div class="card-body">
            <h5 class="card-title teal-color">arba.dev</h5>
            <p class="card-text">This site you are currently view <span>&copy;2019</span> </p>
            <p class="card-text text-muted font-sm">HTML, JS, CSS, ReactJS, Gatsby, Netlify</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 order-md2 mb-4">
        <div class="card" style={{width: "auto;"}}>
          <div class="card-body">
            <h5 class="card-title teal-color">E-Housing</h5>
            <p class="card-text">E-Housing Management System. I work with my partner Agung, Reni, and Prihandini. <span>&copy;2015</span> </p>
            <p class="card-text text-muted font-sm">PHP, CodeIgniter, Apache HTTP Server, MySQL</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    <Link to="/" style={{color: `teal`, fontSize: `2em`}}><FontAwesomeIcon icon={faArrowCircleLeft}></FontAwesomeIcon></Link>
  </Layout>
)

export default PortfolioPage
