import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 60px;
`;

const Header = (): ReactElement => {
  return (
    <Nav>
      <Logo src="/UNO_Logo.svg" />
      <a href="">Reglamento</a>
    </Nav>
  );
};

export default Header;
