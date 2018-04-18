import React, { Component } from 'react';
import PageLink from './common/PageLink';

export default class Home extends Component {
  render() {
    return (
      <div id="home" className="col-md-10">
        <div className="row">
          <PageLink
            link={'/ads'}
            text={'Vegetarian Tastes'}
          />
          <PageLink
            link={'/cooking'}
            text={'Ads & Promotion'}
          />
        </div>
      </div>
    );
  }
}
