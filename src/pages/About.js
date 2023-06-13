import React, { Component } from 'react';
import './About.css';
import meImage from 'C:\\Users\\lm121\\github-classroom\\2023-IBM-Accelerate-SW-Track\\to-do-list_week1-smanwani22\\src\\assets\\me.jpg';

export default class About extends Component {
  render() {
    return (
      <div className="split left">
        <div className="centered">
          <img
            className="profile_image"
            src={meImage}
            alt="Profile Pic"
          />
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Serena Manwani</div>
            <div className="brief_description">
              <p>
                I am an avid martial artist with a black belt in taekwondo and experience in krav maga.
                I love listening to, dancing to, and playing music as well. I am originally from San Jose, CA, but now live in Austin, TX.
                I love to code front end because it is really cool to see the results of your code immediately show up on a user's screen!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
