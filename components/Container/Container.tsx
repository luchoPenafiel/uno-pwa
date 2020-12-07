import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 22px 16px;

  background-color: ${({ theme }) => theme.color.dark};
`;

type ContainerTypes = {
  children: ReactElement[];
};

const Container = ({ children }: ContainerTypes): ReactElement => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Container;
