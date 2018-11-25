import styled, { css } from 'styled-components';

const pseudoStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  content: '';
  width: 1px;
  height: 80%;
  background-color: #fff;
`;

const BlockContainer = styled.div`
  position: relative;
  padding: 50px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
  width: 100%;

  ::before {
    ${pseudoStyles}
    left: 0;
  }

  ::after {
    ${pseudoStyles}
    right: 0;
  }

  :first-child {
    ::before {
      display: none;
    }
  }

  :last-child {
    ::after {
      display: none;
    }
  }
`;

export default BlockContainer;
