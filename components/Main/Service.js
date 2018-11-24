import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FlowText } from '../../shared/FlowText';

const Container = styled.div`
  padding: 30px 15px;
  background-color: #fcfcfc;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  border-radius: 2px;
  height: 320px;
`;

const IconContainer = styled.span`
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background: ${({ icon }) => `url(${icon}) no-repeat center / cover`};
  margin-bottom: 20px;
`;

const Text = styled(FlowText)`
  font-family: 'Montserrat-Medium';
  font-size: 16px;
  text-align: center;
`;

const Service = ({
  className,
  icon,
  children,
}) => {
  return (
    <Container className={className}>
      <IconContainer icon={icon} />
      <Text>
        {children}
      </Text>
    </Container>
  );
};

Service.defaultProps = {
  className: '',
};

Service.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Service;
