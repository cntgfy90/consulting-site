import React, { Fragment } from 'react';

import BaseStyle from '../base/Styles';
import Header from '../components/Header';
import { Content } from '../shared/Content';
import Title from '../components/Contact/Title';
import ContactContainer from '../components/Contact/ContactContainer';

const Contact = () => {
  return (
    <Fragment>
      <BaseStyle />
      <Header bgImage={'../static/img/img1.jpeg'} />
      <Content>
        <Title>
          Связаться с нами
        </Title>
        <ContactContainer />
      </Content>
    </Fragment>
  );
};

export default Contact;
