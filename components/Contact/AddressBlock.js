import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import BlockContainer from './BlockContainer';
import BlockText from './BlockText';
import IconContainer from './IconContainer';

const EmailBlock = () => {
  return (
    <BlockContainer>
      <IconContainer>
        <FontAwesomeIcon icon={faHome} color="#fff" size="3x" />
      </IconContainer>
      <BlockText>
        г. Киев, Софиевская Борщаговка. Ул. Промышленная, 11
      </BlockText>
    </BlockContainer>
  );
};

export default EmailBlock;
