import React, { Fragment } from 'react';

import Navigation from './Navigation';

const Header = () => {
  return (
    <Fragment>
      <header>
        <Navigation />
      </header>
      <style jsx>{`

        header {
          background: url('../static/img/img7.jpeg') no-repeat center / cover;
          height: 400px;
          width: 100%;
        }

        `}</style>
    </Fragment>
  );
};

export default Header;
