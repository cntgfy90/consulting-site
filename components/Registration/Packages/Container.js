import React from 'react';
import styled from 'styled-components';

import StartPackage from './Start';
import StartPlusPackage from './StartPlus';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: stretch;
  margin-bottom: 50px;
`;

const PackagesContainer = () => {
  return (
    <Container>
      <StartPackage />
      <StartPlusPackage />
    </Container>
  );
};

export default PackagesContainer;
