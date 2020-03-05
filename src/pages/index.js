import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleDown, faChevronCircleUp} from '@fortawesome/free-solid-svg-icons'

// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const IndexPage = () => (
  <Layout id="layout">
      <SEO title="Home" />
      <section id="intro" style={{marginBottom: `1.45rem`}}>
        <h1>
          <span style={{fontSize: '2em'}} class="display-4">Hello,</span><br/>
          <span style={{fontSize: '1em', color:`black`}} class="display-4">I'm </span>
          <span style={{fontSize: '2em'}} class="display-4">Arba'i Effendi</span> <br/>
          <span style={{fontSize: '1em', color:`black`}} class="display-4">A Software Engineer</span> &#x2615;
        </h1>
          <br/>
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
            <p style={{textAlign: `justify`}}>
              Currently working as Project Manager & Software Engineer at Ciptadrasoft, leading about 8 to 10 team member.
              I play several roles from Project Manager, System Analyst, Solution Architect, and Software Engineer, depending on the project.
              Being able to work in a technical area helps me better in offering the best solution.
            </p>
            <p style={{textAlign: `justify`}}>
              I focus on solving problems instead of just mastering tools, that's what I am sure an engineer should be.
              But of course, a brilliant idea is not enough without the ability to execute.
              With that awareness, I push myself to always learn and try any relevant technology in order to leverage myself and giving better value to my client.
            </p>
            <p style={{textAlign: `justify`}}>
              By the way, I am good at <span>Web Development</span> and <span>Desktop Development</span>. Lately I also work on a solution that require Cross Platform Mobile Development.
              Most of my works are done in .NET Stack within Monolithic Architecture Pattern. But as I explain earlier, it just a matter of tools. I am open to any kind of tech.
              Below are some of my tech stack experience : <br/><br/>
              <ul>
                <span>
                  <li><div class="chip">C</div> <div class="chip">C++</div> <span style={{fontSize: '0.75em', color:`darkgray`}}>(first programming language i learn at college years ago 😄)</span></li>
                  <li><div class="chip">C#</div> <div class="chip">.NET Framework</div> <div class="chip">ASP.NET Web Form</div> <div class="chip">ASP.NET MVC</div> <div class="chip">ASP.NET WebAPI</div> <div class="chip">SQL Server</div> <div class="chip">Javascript</div> <div class="chip">AJAX</div> <div class="chip">SSIS</div> <div class="chip">SSRS</div> <div class="chip">IIS</div></li>
                  <li><div class="chip">VB6/VB.NET</div> <div class="chip">.NET Framework</div> <div class="chip">Windows Form</div> <div class="chip">SQL Server</div></li>
                  <li><div class="chip">PHP</div> <div class="chip">CodeIgniter</div> <div class="chip">MySQL/MariaDB</div> <div class="chip">Apache (XAMPP)</div></li>
                  <li><div class="chip">Node.js</div> <div class="chip">React.js</div> <div class="chip">Express.js</div></li>
                  <li><div class="chip">Go</div> <div class="chip">Flutter(Dart)</div></li>
                </span>
              </ul>
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
              <span style={{fontSize: 1 + 'em'}}>Let's talk</span> <br/>
            </h1>
            <div>
              <p style={{textAlign: `justify`}}>
                Thanks to reach this far :) If you need to digitize your idea and looking for a collaboration ?
                You could email me at <span><a href="mailto:arbaieffendi@gmail.com">arbaieffendi@gmail.com</a></span>
              </p>
              or find me at <br/>
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
