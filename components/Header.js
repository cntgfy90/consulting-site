import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';

const Header = ({
  bgImage,
}) => {
  return (
    <Fragment>
      <header>
        <Navigation />
      </header>
      <style jsx>{`

        header {
          background: url(${bgImage}) no-repeat center / cover;
          height: 400px;
          width: 100%;
        }

        `}</style>
    </Fragment>
  );
};

Header.defaultProps = {
  bgImage: '../static/img/img7.jpeg',
};

Header.propTypes = {
  bgImage: PropTypes.string.isRequired,
};

export default Header;
