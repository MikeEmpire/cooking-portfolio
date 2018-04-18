import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function PageLink(props) {
  return (
    <div className="col-md-6">
      <Link to={props.link}>
        <h1>{props.text}</h1>
      </Link>
    </div>
  );
}

PageLink.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string
};
