import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft, faLink} from "@fortawesome/free-solid-svg-icons"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <section id="work" style={{marginBottom: `1.45rem`}}>
      <h1 class="display-4">Works</h1>
      <p>These are some of my work during my professional career</p>
      <div class="container-fluid">
        <div class="row justify-content-md-left">
          <div class="col-md-4 order-md2 mb-4">
            <div class="card" style={{width: "auto;"}}>
              <div class="card-body">
                <h5 class="card-title teal-color">JAG / DMTM</h5>
                <p class="card-text">Health & Life Insurance Core System from PT. Ciptadra Softindo. I have completed around 20 enhancement projects in 3 well-known clients as several role from Software Engineer, System Analyst and Project Manager.
                 <span>2013 - 2020</span>
                </p>
                <p class="card-text text-muted font-sm">C#, ASP.NET, .NET Framework, MS SQL Server, IIS, SSIS, SSRS</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 order-md2 mb-4">
            <div class="card" style={{width: "auto;"}}>
              <div class="card-body">
                <h5 class="card-title teal-color">TBSS / AXITS</h5>
                <p class="card-text">Telesales Business Support System from PT. Ciptadra Softindo. I have completed > 5 enhancement projects in 2 well-known clients as several role from Software Engineer, System Analyst and Project Manager.
                  <span>2013 - 2020</span>
                </p>
                <p class="card-text text-muted font-sm">VB.NET, VB6, Windows Form, MS SQL Server, ASP.NET Web API, PureCloud API .NET SDK (Telephony), Midtrans API (Payment Gateway)</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 order-md2 mb-4">
            <div class="card" style={{width: "auto;"}}>
              <div class="card-body">
                <h5 class="card-title teal-color">E-Access RTW</h5>
                <p class="card-text">Rail Train Wagon Delivery Management System for PT Pertamina (Persero). I work with my partner Septian Dwi this time.
                  <span>2019</span>
                </p>
                <p class="card-text text-muted font-sm">C#, ASP.NET MVC, .NET Framework v4.7.2, SQL Server 2016 (on AWS RDS), IIS 8 (on AWS EC2), Migradoc Reporting Library. </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 order-md2 mb-4">
            <div class="card" style={{width: "auto;"}}>
              <div class="card-body">
                <h5 class="card-title teal-color">E-Housing</h5>
                <p class="card-text">E-Housing Management System. I work with my partner Agung, Reni, and Prihandini.
                  <span>2015</span>
                </p>
                <p class="card-text text-muted font-sm">PHP, CodeIgniter, Apache HTTP Server, MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="hobbies" style={{marginBottom: `1.45rem`}}>
      <h1 class="display-4" alignment="center">Hobbies</h1>
      <p>These are some of my hobbies either closed-source or open-source</p>
      <div class="container-fluid">
        <div class="row justify-content-md-left">
          <div class="col-md-4 order-md2 mb-4">
            <div class="card" style={{width: "auto;"}}>
              <div class="card-body">
                <h5 class="card-title teal-color">To-Do Rust <a style={{color: 'teal', fontSize: `1em`}} href="https://arbaieffendi.github.io/to-do-rust"><FontAwesomeIcon icon={faLink} /> </a></h5>
                <p class="card-text">A to-do app with an enhanced timer.
                  <span>&copy;2019</span>
                </p>
                <p class="card-text text-muted font-sm">HTML, CSS, JS, Github Pages</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 order-md2 mb-4">
            <div class="card" style={{width: "auto;"}}>
              <div class="card-body">
                <h5 class="card-title teal-color">arba.dev</h5>
                <p class="card-text">This site you are currently view .
                  <span>&copy;2019</span>
                </p>
                <p class="card-text text-muted font-sm">HTML, JS, CSS, ReactJS, Gatsby, Netlify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Link to="/" style={{color: `teal`, fontSize: `2em`}}><FontAwesomeIcon icon={faArrowCircleLeft}></FontAwesomeIcon></Link>
  </Layout>
)

export default PortfolioPage
