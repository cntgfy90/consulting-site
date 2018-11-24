import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

export const ContactLinkStyled = styled.a`
  font-family: 'Montserrat-Medium';
  font-size: 14px;
  color: #0b4eb7;
  cursor: pointer;
`;

const ContactLink = ({
  href,
  children,
}) => {
  return (
    <Link href={href}>
      <ContactLinkStyled>
        {children}
      </ContactLinkStyled>
    </Link>
  );
};

ContactLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ContactLink;
