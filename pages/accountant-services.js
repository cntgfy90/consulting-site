import React, { Fragment } from 'react';

import BaseStyle from '../base/Styles';
import Header from '../components/Header';
import { Content } from '../shared/Content';
import Title from '../components/AccountantService/Title';
import { FlowText } from '../shared/FlowText';
import { PriceText } from '../components/AccountantService/Texts/PriceText';
import LegalEntityTable from '../components/AccountantService/Tables/LegalEntity';
import IndividualTable from '../components/AccountantService/Tables/Individual';

const AccountantServices = () => {
  return (
    <Fragment>
      <BaseStyle />
      <Header bgImage={'../static/img/img1.jpeg'} />
      <Content>
        <Title>
          Цены на бухгалтерское обслуживание
        </Title>
        <FlowText>
          Ценовая политика нашей компании гибкая и договорная
        </FlowText>
        <PriceText>
          Ориентироваться Вы можете по данным, предоставленным ниже в таблице.
          Но учитывайте, что все зависит от специфики Вашей деятельности, поэтому цены могут варьироваться
        </PriceText>
        <Title>
          Юридическое лицо
        </Title>
        <LegalEntityTable />
        <Title>
          Физическое лицо-предприниматель
        </Title>
        <IndividualTable />
      </Content>
    </Fragment>
  );
};

export default AccountantServices;
