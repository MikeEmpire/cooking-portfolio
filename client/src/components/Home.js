import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div id="home" className="container-fluid">
        <div className="row">
          <Link to="/ads" className="col">
            <div>
              <h1>Vegetarian Tastes</h1>
            </div>
          </Link>
          <Link to="/cooking" className="col">
            <div>
             <h1>Ads & Promotion</h1>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
