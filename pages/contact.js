import React, { Fragment } from 'react';

import BaseStyle from '../base/Styles';
import Header from '../components/Header';
import { Content } from '../shared/Content';


const Contact = () => {
  return (
    <Fragment>
      <BaseStyle />
      <Header bgImage={'../static/img/img1.jpeg'} />
      <Content>
      </Content>
    </Fragment>
  );
};

export default Contact;
