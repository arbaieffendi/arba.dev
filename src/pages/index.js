import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { faMugHot, faChevronCircleDown, faChevronCircleUp, faAt} from '@fortawesome/free-solid-svg-icons'

// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const IndexPage = () => (
  <Layout id="layout">
      <SEO title="Home" />
      <section id="intro" style={{marginBottom: `1.45rem`}}>
        <h1>
          <span style={{fontSize: '2em'}}>Hello </span> <FontAwesomeIcon icon={faMugHot} style={{color: '#BF7B56', textShadow: `1px 1px 1px #ccc`, fontSize: `2em`}} /> <br/>
          <span style={{fontSize: '1em', color:`black`}}>I'm </span>
          <span style={{fontSize: '2em'}}>Arba'i Effendi</span> <br/>
          <span style={{fontSize: '1em', color:`black`}}>A Software Engineer</span>
        </h1>
          <span style={{fontSize: '0.75em', color:`darkgray`}}>Do you know?</span> <br/>
          <span><q>How you spend the first 30 minutes of your day, determine the quality of the next 23 and a half of hours</q> - Gamal Albinsaid <br/><br/></span>
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
      <section id="about-me" style={{marginBottom: `1.45rem`}}>
        <div style={{ maxWidth: `960px`, marginBottom: `1.45rem`, marginTop:`1.45rem`}}>
            <h1>
              <span style={{fontSize: 1 + 'em'}}>About Me</span> <br/>
            </h1>
            <p>
              Currently working as Project Manager & Software Engineer at Ciptadrasoft, leading about 8 to 10 team member.
              I play several roles from Project Manager, System Analyst, Solution Architect, and Software Engineer, depending on the project.
              Being able to work in a technical area helps me better in offering the best solution to my client.
            </p>
            <p>
              I focus on solving problems instead of just mastering tools, that's what I am sure an engineer should be.
              But of course, a brilliant idea is not enough without the ability to execute.
              With that awareness, I push myself to always learn and try any relevant technology in order to leverage myself and giving better value to my customer.
            </p>
            <p>
              By the way, I am good at <span>Web Development</span> and <span>Desktop Development</span>.
              Most of my works are done in .NET Stack within Monolithic Architecture Pattern.
              Oh yeah, below are some of my tech stack experience : <br/><br/>
              <span>
                <li>.NET Framework, C#/VB, ASP.NET, ASP.NET WebAPI, Winform, SQL Server, Javascript, AJAX, SSIS, SSRS, IIS</li>
                <li>PHP, CodeIgniter, MySQL/MariaDB, Apache (XAMPP)</li>
                <li>Node.js, React.js, Express.js</li>
              </span>
            </p>
            
            <p>My Tool-Belt : <br/>
              <span>Git, SVN, UML, BPMN</span>
            </p>

          </div>
          <div style={{textAlign: 'center', position: `absolute center`, bottom: 0}}>
            <Link style={{color: 'teal', fontSize: `2em`}} to="#contact-me"><FontAwesomeIcon icon={faChevronCircleDown} /></Link>
          </div>
      </section>
      <section id="contact-me">
        <div style={{ maxWidth: `960px`, marginBottom: `1.45rem`, marginTop:`1.45rem`}}>
            <h1>
              <span style={{fontSize: 1 + 'em'}}>Get in touch</span> <br/>
            </h1>
            <div>
              <p>Thanks to reach this far :)</p>
              <p>If your need to digitize your idea and looking for a collaboration ? Let's talk </p>
              <span style={{fontSize: 3 + 'em'}}><a href="mailto:arbaieffendi@gmail.com"><FontAwesomeIcon icon={faAt} /></a> </span>
              <span style={{fontSize: 3 + 'em'}}><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@arba"><FontAwesomeIcon icon={faMedium} /></a> </span>
              <span style={{fontSize: 3 + 'em'}}><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/arbaieffendi"><FontAwesomeIcon icon={faLinkedin} /></a> </span>
              <span style={{fontSize: 3 + 'em'}}><a target="_blank" rel="noopener noreferrer" href="https://github.com/arbaieffendi"><FontAwesomeIcon icon={faGithub} /></a> </span>
              <span style={{fontSize: 3 + 'em'}}><a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/arbaieffendi"><FontAwesomeIcon icon={faGitlab} /></a> </span>
            </div>
        </div>
        <div style={{textAlign: 'center', position: `absolute`, right: 0, bottom: 0}}>
          <Link style={{color: `teal`, fontSize: `2em`}} to="#layout"><FontAwesomeIcon icon={faChevronCircleUp} /></Link>
        </div>
      </section>
  </Layout>
)

export default IndexPage
