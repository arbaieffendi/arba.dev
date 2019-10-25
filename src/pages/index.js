import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faMugHot, faEnvelope, faChevronCircleDown, faChevronCircleUp} from '@fortawesome/free-solid-svg-icons'

import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const IndexPage = () => (
  <Layout id="layout">
      <SEO title="Home" />
      <section id="intro" style={{marginBottom: `1.45rem`}}>
        <h1>
          <span style={{fontSize: 2 + 'em'}}>Hello </span> <FontAwesomeIcon icon={faMugHot} style={{color: '#BF7B56', textShadow: `1px 1px 1px #ccc`, fontSize: `2em`}} /> <br/>
          <span style={{fontSize: 1 + 'em', color:`black`}}>I'm </span>
          <span style={{fontSize: 2 + 'em'}}>Arba'i Effendi</span> <br/>
          <span style={{fontSize: 1 + 'em', color:`black`}}>a Software Engineer</span>
        </h1>
          <span><q>I am a kind of people that believe the first 30 minutes our day has the contribution to determine our 23 an half hours</q><br/><br/></span>
        <div>
        {/* <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              Dark mode
            </label>
          )}
        </ThemeToggler> */}
        </div>
        <div style={{textAlign: 'center'}}>
          <Link style={{color: 'teal', fontSize: `2em`}} to="#about-me"><FontAwesomeIcon icon={faChevronCircleDown} /></Link>
        </div>
      </section>
      <section id="about-me">
        <div style={{ maxWidth: `960px`, marginBottom: `1.45rem`, marginTop:`1.45rem`}}>
            <h1>
              <span style={{fontSize: 1 + 'em'}}>About Me</span> <br/>
            </h1>
            <p>
            Currently work as Project Manager, System Analyst and Software Engineer at Ciptadrasoft.
            Most of my work are done using .NET Stack, but I focus on solving problems instead of just mastering tools, that's what i am sure an engineer should be.
            But of course brilliant idea is not enough without the ability to execute.
            With that awareness, whenever a new technology got into my radar, i pin that on my board of to-taste.
            </p>
            <p>I am good at <span>Web Development, Desktop Development</span></p>
            <p>
            And below are some of my tech stack experience :<br/>
            <span>C#/VB, ASP.NET, Winform, MS SQL Server, SSIS, SSRS<br/>
            PHP, MySQL, XAMPP<br/>
            NodeJS, React, ES6 <br/>
            Currently i put interest in Go Lang</span>
            </p>
            
            <p>My Tool-Belt : <br/>
            <span>Git, SVN, UML, Visual Studio, VS Code</span></p>
          </div>
          <div style={{textAlign: 'center', position: `absolute center`, bottom: 0}}>
            <Link style={{color: 'teal', fontSize: `2em`}} to="#contact-me"><FontAwesomeIcon icon={faChevronCircleDown} /></Link>
          </div>
      </section>
      <section id="contact-me">
        <div style={{ maxWidth: `600px`, marginBottom: `1.45rem`, marginTop:`1.45rem`}}>
            <h1>
              <span style={{fontSize: 1 + 'em'}}>Get in touch</span> <br/>
            </h1>
            <div>
              <p>Feel free to contact me</p>
            <span style={{fontSize: 3 + 'em'}}><a href="https://medium.com/@arba"><FontAwesomeIcon icon={faMedium} /></a> </span>
              <span style={{fontSize: 3 + 'em'}}><a href="https://github.com/arbaieffendi"><FontAwesomeIcon icon={faGithub} /></a> </span>
              <span style={{fontSize: 3 + 'em'}}><a href="https://linkedin.com/in/arbaieffendi"><FontAwesomeIcon icon={faLinkedin} /></a> </span>
              <span style={{fontSize: 3 + 'em'}}><a href="mail:arbaieffendi@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a> </span>
            </div>
        </div>
        <div style={{textAlign: 'center', position: "absolute center", bottom: 0}}>
          <Link style={{color: 'teal', fontSize: `2em`}} to="#layout"><FontAwesomeIcon icon={faChevronCircleUp}></FontAwesomeIcon></Link>
        </div>
      </section>
  </Layout>
)

export default IndexPage
