import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleStyled = styled.h1`
  font-family: 'Montserrat-Bold';
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: #4f4f4f;
  margin-bottom: 50px;
`;

const MainTitle = ({
  children,
}) => {
  return (
    <TitleStyled>
      {children}
    </TitleStyled>
  );
};

MainTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MainTitle;
