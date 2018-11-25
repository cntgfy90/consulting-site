import React from 'react';
import styled from 'styled-components';

import PhoneBlock from './PhoneBlock';
import EmailBlock from './EmailBlock';
import AddressBlock from './AddressBlock';

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: #4f4f4f;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const ContactContainer = () => {
  return (
    <Container>
      <PhoneBlock />
      <EmailBlock />
      <AddressBlock />
    </Container>
  );
};

export default ContactContainer;
