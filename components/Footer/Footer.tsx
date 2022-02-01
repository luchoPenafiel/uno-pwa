import React, { ReactElement } from 'react';
import styled from 'styled-components';
import theme from '../../constants/theme';

const Wrapper = styled.footer`
  text-align: center;

  margin-top: 75px;

  a {
    color: ${theme.color.yellow};
  }
`;

const Footer = (): ReactElement => {
  return (
    <Wrapper>
      <p>
        by <a href="https://lucho.codes">Lucho</a> with ♥️
      </p>
    </Wrapper>
  );
};

export default Footer;
