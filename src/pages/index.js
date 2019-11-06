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
              Welcome! Let's get acquainted. I am <span>Arba'i Effendi</span>. Currently working as Project Manager, System Analyst and Software Engineer at Ciptadrasoft.
              Most of my works are done using .NET Stack within Monolithic Architecture Pattern.</p>
            <p>
              I focus on solving problems instead of just mastering tools, that's what i am sure an engineer should be. 
              But of course, brilliant idea is not enough without the ability to execute. 
              With that awareness, whenever a new technology got into my rss reader, I pin it on My Board of To-Do, put a headset, play <a href="https://coffitivity.com/" style={{color: 'teal'}}>coffitivity</a>, and start to bring myself to the next level.
            </p>
            <p>
              By the way, I am good at <span>Web Development</span> and <span>Desktop Development</span>. Below are some of my tech stack experience : <br/><br/>
              <span>
                <li>.NET Framework, C#/VB, ASP.NET, ASP.NET WebAPI, Winform, SQL Server, Javascript, AJAX, SSIS, SSRS, IIS</li>
                <li>PHP, CodeIgniter, MySQL/MariaDB, Apache (XAMPP)</li>
                <li>Node.js, React.js, Express.js</li>
              </span>
            </p>
            
            <p>My Tool-Belt : <br/>
              <span>Git, SVN, UML, BPMN, Visual Studio, VS Code</span>
            </p>

            <p>Stuff I usually involved in : <br/>
              <span>Software Project Planning, Requirement Gathering, Software Architecture Design, Database Design, Testing, Deployment</span>
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
