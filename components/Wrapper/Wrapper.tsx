import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }): string => (justify ? justify : 'center')};
  align-items: ${({ aling }): string => (aling ? aling : 'center')};

  min-height: calc(100vh - 60px - 18px - 44px);

  padding-top: 32px;
  padding-bottom: 32px;
`;

type WrapperType = {
  children: ReactElement | ReactElement[];
  aling?: string;
  justify?: string;
};

const Wrapper = ({ children, aling, justify }: WrapperType): ReactElement => {
  return (
    <Main aling={aling} justify={justify}>
      {children}
    </Main>
  );
};

export default Wrapper;
