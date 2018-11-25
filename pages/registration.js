import React, { Fragment } from 'react';

import BaseStyle from '../base/Styles';
import Header from '../components/Header';
import { Content } from '../shared/Content';
import StartText from '../components/Registration/Texts/StartText';
import FlpText from '../components/Registration/Texts/FlpText';
import ConsultText from '../components/Registration/Texts/ConsultText';
import StepsList from '../components/Registration/StepsList';
import Title from '../components/Registration/Title';
import PackagesContainer from '../components/Registration/Packages/Container';
import ProcedureList from '../components/Registration/ProcedureList';

const Registration = () => {
  return (
    <Fragment>
      <BaseStyle />
      <Header bgImage={'../static/img/img5.jpeg'} />
      <Content>
        <StartText />
        <Title>Наша компания:</Title>
        <StepsList />
        <Title>Цены</Title>
        <PackagesContainer />
        <Title>Регистрация ФОП</Title>
        <FlpText />
        <ConsultText />
        <ProcedureList />
      </Content>
    </Fragment>
  );
};

export default Registration;
