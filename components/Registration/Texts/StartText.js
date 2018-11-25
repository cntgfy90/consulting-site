import React from 'react';
import styled from 'styled-components';

import { FlowText } from '../../../shared/FlowText';

const StartTextStyled = styled(FlowText)`
  margin-bottom: 30px;
`;

const StartText = () => {
  return (
    <StartTextStyled>
      Старт работы официального бизнеса начинается с выбора формы субъекта хозяйствования и процедуры регистрации.
    </StartTextStyled>
  );
};

export default StartText;
