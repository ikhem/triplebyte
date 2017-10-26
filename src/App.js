import React, { Component } from 'react';
// import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="brand">
            <img src={require("./resources/triplebyte_logo_white.png")} alt="logo" />
          </div>
          <nav>
            <ul className="menu-items">
              <li>For Companies</li>
              <li>Sign Up</li>
              <li>Login</li>
            </ul>
          </nav>
        </header>

        <section id="top">
          <div className="container">
            <div className="container-text">
              <h2>Take Our Coding Quiz</h2>
            </div>
            <h1>Get offers from top tech companies</h1>
            <button className="quiz">Take the quiz!</button>

            <div className="process-section">
              <div className="process-card">
                  <img src={require(`./resources/icon_code.svg`)} alt="step-1" />
                <h3>Step 1</h3>
                <p>Take our quick online coding quiz. No resume needed.</p>
              </div>

              <div className="process-card">
                <img src={require(`./resources/icon_search.svg`)} alt="step-2" />
                <h3>Step 2</h3>
                <p>Get matched with 200 top tech companies</p>
              </div>

              <div className="process-card">
                <img src={require(`./resources/icon_celebration.svg`)} alt="step-3" />
                <h3>Step 3</h3>
                <p>Skip to final interviews with your favorites, and get offers!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="center">
          <div className="container">
            <div className="container-text">
              <h3>We work with great companies</h3>
              <h5>We work with hundreds of companies of different sizes, stages, and industries and personally identify the ones that will be most exciting to you. All allow our pre-screened, pre-matched engineers to skip resume and recruiters screens.</h5>
            </div>
            <img src={require("./resources/company_logos_v12_color.png")} alt="companies" />
            <p>From household names to emerging startups, most companies hiring on our platform aren't listed here.<a href="/companies">We're also adding new companies every week.</a></p>
          </div>
        </section>

        <section className="bottom">
          <div className="container">
            <div className="container-text">
              <h3>Engineers Love Triplebyte</h3>
              <h5>We help engineers identify high-growth opportunities, get their foot in the door with our recommendation, and negotiate multiple offers.</h5>
            </div>
          </div>

          <div class="deck">
            <div class="card">
              <img class="card-img-top" src={require("./resources/dropbox-logo.png")} alt="Card image cap" />
              <img class="card-img-top" src={require("./resources/Elliott_Jin.jpg")} alt="Card image cap" />
              <div class="card-block">
                <h4 class="card-title">Elliot Jin, Software Engineer at Dropbox</h4>
                <p class="card-text">“Triplebyte’s personal touch blew me away. They spent hours talking to me so they could match me with companies that were a great fit. I interviewed at four companies, and all made offers. I accepted Dropbox because of their strong engineering culture.”</p>
              </div>
            </div>

            <div class="card">
              <img class="card-img-top" src={require("./resources/flexport-logo.png")} alt="Card image cap" />
              <img class="card-img-top" src={require("./resources/Aubrey_Cutts_Worthington.jpg")} alt="Card image cap" />
              <div class="card-block">
                <h4 class="card-title">Aubrey Worthington, Software Engineer at Flexport</h4>
                <p class="card-text">“Before using Triplebyte, nobody responded to me because I was a CS grad in Australia. Using Triplebyte, I interviewed at 5 companies and got 5 offers. I accepted a job at Flexport, because they’re exciting and growing really quickly.”</p>
              </div>
            </div>

            <div class="card">
              <img class="card-img-top" src={require("./resources/apple-logo.png")} alt="Card image cap" />
              <img class="card-img-top" src={require("./resources/Alejandro_Lucena.jpg")} alt="Card image cap" />
              <div class="card-block">
                <h4 class="card-title">Alejandro Lucena, Software Engineer at Apple</h4>
                <p class="card-text">“My experiences with Triplebyte were nothing short of fantastic. Triplebyte matched my passion with excellent candidate companies and provided me with immense exposure to a thriving industry in the heart of Silicon Valley.”</p>
              </div>
            </div>
          </div>

          <button className="quiz">Take the Quiz!</button>
        </section>

        <footer>
          <nav>
            <ul>
              <li>About</li>
              <li>Manifesto</li>
              <li>Diveristy</li>
              <li>Press</li>
              <li>Faq</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </nav>
          <div className="sublinks">
            <ul>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>
                <img />
                <img />
              </li>
            </ul>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
