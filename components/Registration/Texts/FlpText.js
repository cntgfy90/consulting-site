import React from 'react';
import styled from 'styled-components';

import { FlowText } from '../../../shared/FlowText';

const FlpTextStyled = styled(FlowText)`
  margin-bottom: 20px;
`;

const FlpText = () => {
  return (
    <FlpTextStyled>
      Если Вы хотите попробовать себя как самостоятельная единица бизнеса с минимальными рисками,
      специалисты рекомендуют оформить свою деятельность в качестве ФОП.
    </FlpTextStyled>
  );
};

export default FlpText;
