import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import BlockContainer from './BlockContainer';
import BlockText from './BlockText';
import IconContainer from './IconContainer';

const EmailBlock = () => {
  return (
    <BlockContainer>
      <IconContainer>
        <FontAwesomeIcon icon={faEnvelope} color="#fff" size="3x" />
      </IconContainer>
      <BlockText>
        super_kolan27@urk.net
      </BlockText>
    </BlockContainer>
  );
};

export default EmailBlock;
