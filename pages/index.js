import React, { Fragment } from 'react';

import BaseStyle from '../base/Styles';
import Header from '../components/Header';

const Home = () => {
  return (
    <Fragment>
      <BaseStyle />
      <Header bgImage={'../static/img/img7.jpeg'} />
    </Fragment>
  );
};

export default Home;
