import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import BlockContainer from './BlockContainer';
import BlockText from './BlockText';
import IconContainer from './IconContainer';

const PhoneBlock = () => {
  return (
    <BlockContainer>
      <IconContainer>
        <FontAwesomeIcon icon={faPhone} color="#fff" size="3x" />
      </IconContainer>
      <BlockText>
        0935197124
      </BlockText>
      <BlockText>
        0660757447
      </BlockText>
    </BlockContainer>
  );
};

export default PhoneBlock;
