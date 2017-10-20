import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="navigation">
          <div className="brand">
            <img src={require("./resources/triplebyte_logo_white.png")} alt="logo" />
          </div>
          <div className="menu">
            <ul className="menu-items">
              <li>FOR COMPANIES</li>
              <li>SIGN UP</li>
              <li>LOGIN</li>
            </ul>
          </div>
        </div>

        <div className="header">
          <h2>Take Our Coding Quiz</h2>
          <h1>Get offers from top tech companies</h1>
          <button className="quiz">Take the quiz!</button>
          <div className="process">
            <div className="step-icons-card">
              <img src={require(`./resources/icon_code.svg`)} alt="step-1" />
              <h3>Step 1</h3>
              <p>Take our quick online coding quiz. No resume needed.</p>
            </div>
            <div className="step-icons-card">
              <img src={require(`./resources/icon_search.svg`)} alt="step-2" />
              <h3>Step 2</h3>
              <p>Get matched with 200 top tech companies</p>
            </div>
            <div className="step-icons-card">
              <img src={require(`./resources/icon_celebration.svg`)} alt="step-3" />
              <h3>Step 3</h3>
              <p>Skip to final interviews with your favorites, and get offers!</p>
            </div>
          </div>
        </div>

        <div className="center">
          <h3>We work with great companies</h3>
          <h5>We work with hundreds of companies of different sizes, stages, and industries and personally identify the ones that will be most exciting to you. All allow our pre-screened, pre-matched engineers to skip resume and recruiters screens.</h5>
          <img src={require("./resources/company_logos_v12_color.png")} alt="companies" />
          <p>From household names to emerging startups, most companies hiring on our platform aren't listed here.<a href="/companies">We're also adding new companies every week.</a></p>``
        </div>

      </div>
    );
  }
}

export default App;
