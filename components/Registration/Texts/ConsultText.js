import React from 'react';
import styled from 'styled-components';

import { FlowText } from '../../../shared/FlowText';

const ConsultTextStyled = styled(FlowText)`
  margin-bottom: 20px;
`;

const ConsultText = () => {
  return (
    <ConsultTextStyled>
      В зависимости от вида деятельности, объема предпологаемых оборотов мы проконсультируем
      и подберем для Вас оптимальный варинт субъекта хозяйствования.
    </ConsultTextStyled>
  );
};

export default ConsultText;
