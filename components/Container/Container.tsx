import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 22px 16px;

  background-color: ${({ theme }) => theme.color.dark};

  transform: translateY(-42px);
`;

const EsterEgg = styled.p`
  text-align: center;

  margin-bottom: 12px;
`;

type ContainerTypes = {
  children: ReactElement[];
};

const Container = ({ children }: ContainerTypes): ReactElement => {
  return (
    <Wrapper>
      <EsterEgg>by Lucho with ♥️</EsterEgg>
      {children}
    </Wrapper>
  );
};

export default Container;
