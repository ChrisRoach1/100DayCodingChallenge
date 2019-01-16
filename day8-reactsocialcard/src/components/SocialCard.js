import React, { Component } from "react";
import "../index.css";
import twitterLogo from "../images/twitter.png";
//components of social card
/*
 *name
 *degree
 *job title
 *social media links
 */

class SocialCard extends Component {
  render() {
    return (
      <div className="social-card">
        <div className="social-card-About">
          <h2>Chris Roach</h2>
          <h3>Computer Science</h3>
          <h3>Application Developer</h3>
        </div>
        <div className="social-card-footer">
          <a href="https://twitter.com/chrisroach12">
            <img src={twitterLogo} alt="Twitter Logo" className="social-icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default SocialCard;
