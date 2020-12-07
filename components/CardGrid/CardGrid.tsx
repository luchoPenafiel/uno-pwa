import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 53px);
  grid-gap: 12px;

  justify-content: center;

  width: 100%;
`;

type CardGridType = {
  children: ReactElement[];
};

const CardGrid = ({ children }: CardGridType): ReactElement => {
  return <Wrapper>{children}</Wrapper>;
};

export default CardGrid;
