import React, { Component } from 'react';
import './App.css';
import Typist from 'react-typist';
import Grid from '@material-ui/core/Grid';
import 'react-typist/dist/Typist.css';
import 'bulma/css/bulma.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ProjectsComponent from './Projects.js';
import AboutComponent from './About.js';
import ExperienceComponent from './Experience.js';
import SkillsComponent from './Skills.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: null,
      width: window.innerWidth
    };
  }

  setHovering = name => {
    this.setState({
      hovering: name
    });
  };

  // handle mobile
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  getOpacity = name => {
    if (this.state.hovering === name) {
      return 1;
    } else {
      return 0.5;
    }
  };

  getMain = () => {
    return (
      <div className="About">
        <div className="fade-in">
          <div style={{ fontSize: '3em', width: '100%' }}>
            <Typist
              avgTypingDelay={100}
              stdTypingDelay={25}
              cursor={{ show: true }}
              blink={true}
            >
              <span className="Name">Kevin Fang</span>
            </Typist>
          </div>
          <img
            alt="headshot"
            style={{ maxHeight: '30vh', marginTop: 10 }}
            src={'./headshot.jpg'}
          />
        </div>
        <Grid container spacing={0} direction="column" justify="center">
          <div className="fade-in">
            <a
              onMouseOver={() => {
                this.setHovering('github');
              }}
              onMouseOut={() => {
                this.setHovering(null);
              }}
              href="https://github.com/kevin-fang/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="GitHub"
                src={'./github.png'}
                style={{
                  width: '2em',
                  margin: 5,
                  opacity: this.getOpacity('github'),
                  transition: 'opacity .2s'
                }}
              />
            </a>
            <a
              onMouseOver={() => {
                this.setHovering('linkedin');
              }}
              onMouseOut={() => {
                this.setHovering(null);
              }}
              href="https://linkedin.com/in/kevin-fang/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="LinkedIn"
                src={'./linkedin.png'}
                style={{
                  width: '2em',
                  margin: 5,
                  opacity: this.getOpacity('linkedin'),
                  transition: 'opacity .2s'
                }}
              />
            </a>
            <a
              href="mailto:kevinzfang@gmail.com"
              onMouseOver={() => {
                this.setHovering('email');
              }}
              onMouseOut={() => {
                this.setHovering(null);
              }}
            >
              <img
                alt="Email"
                src={'./mail.png'}
                style={{
                  width: '2em',
                  margin: 5,
                  marginTop: 10,
                  opacity: this.getOpacity('email'),
                  transition: 'opacity .2s'
                }}
              />
            </a>
          </div>
        </Grid>
        <div
          className="fade-in"
          style={{ maxWidth: '100%', textAlign: 'center', margin: 20 }}
        >
          <span
            style={{
              maxWidth: '65vw',
              fontSize: '1.2em',
              textAlign: 'left',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '24pt'
            }}
          >
            Hi, I'm Kevin!
            <br />
            <br /> I'm a developer and an undergrad studying Computer Science,
            interested in machine learning and its applications to
            bioinformatics, finance, and other fields.
            <br />
            <br />I love technology and learning new things. Currently, I'm
            exploring software engineering and data science. For the past few
            years, I've been working with{' '}
            <a href="https://curoverse.com">Curoverse Research</a> to help us
            understand the human genome better.
          </span>
        </div>
      </div>
    );
  };

  getNavbar = () => {
    // returns navigation bar
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div
          style={{ position: 'absolute', right: 0, margin: 10 }}
          id="navbarBasicExample"
          className="navbar-menu fade-in"
        >
          <AnchorLink className="navbar-item" href="#about">
            About Me
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#experience">
            Experience
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#projects">
            Projects
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#skills">
            Skills
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#contact">
            Contact
          </AnchorLink>
          <a
            className="navbar-item"
            target="_blank"
            rel="noopener noreferrer"
            href="./resume.pdf"
          >
            Resume
          </a>
        </div>
      </nav>
    );
  };

  getContact = () => {
    // returns contact information
    return (
      <div style={{ marginBottom: '4vh', margin: 20 }}>
        <span
          style={{
            maxWidth: '75vw',
            fontSize: '1.2em',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '24pt'
          }}
        >
          Feel free to write to me at{' '}
          <a href="mailto:kevinzfang@gmail.com">kevinzfang@gmail.com</a>!
        </span>
      </div>
    );
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    return (
      <div className="App" id="main">
        <div style={{ minHeight: '93vh' }}>
          {this.getNavbar()}
          {this.getMain()}
        </div>
        <AnchorLink href="#about" style={{ position: 'relative', bottom: 0 }}>
          <i className="icon fa fa-chevron-down" aria-hidden="true" />
        </AnchorLink>

        <hr className="divider" />

        <AboutComponent />
        <AnchorLink
          href="#experience"
          style={{ position: 'relative', bottom: 0 }}
        >
          <i className="icon fa fa-chevron-down" aria-hidden="true" />
        </AnchorLink>

        <div className="divider" />

        <ExperienceComponent />
        <AnchorLink
          href="#projects"
          style={{ position: 'relative', bottom: 0 }}
        >
          <i className="icon fa fa-chevron-down" aria-hidden="true" />
        </AnchorLink>

        <div className="divider" />

        <ProjectsComponent mobile={isMobile} />
        <AnchorLink href="#skills" style={{ bottom: '-100vh' }}>
          <i className="icon fa fa-chevron-down" aria-hidden="true" />
        </AnchorLink>

        <div className="divider" />

        <SkillsComponent />
        <AnchorLink href="#contact" style={{ bottom: '-100vh' }}>
          <i className="icon fa fa-chevron-down" aria-hidden="true" />
        </AnchorLink>

        <div className="divider" />

        <div id="contact" style={{ width: '100%' }}>
          <div style={{ fontSize: '4em', marginTop: 0 }}>
            Want to get in touch?
          </div>
          {this.getContact()}
        </div>
        <div className="SideBySide" style={{ width: '100%' }}>
          <div style={{ textAlign: 'left', marginRight: 'auto', padding: 20 }}>
            © Kevin Fang, 2018
          </div>
          <AnchorLink href="#main" style={{ padding: 20 }}>
            Back to Top
          </AnchorLink>
        </div>
      </div>
    );
  }
}

export default App;