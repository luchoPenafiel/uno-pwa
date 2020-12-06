import React, { ReactElement } from 'react';
import styled from 'styled-components';
import theme from '../../constants/theme';

const Wrapper = styled.button`
  display: block;

  height: 75px;

  border-radius: 4px;
  border: 3px solid ${({ color }) => color};

  background-color: ${theme.color.white};

  color: ${theme.color.dark};
`;

const Card = ({ onClick, text, color }: any): ReactElement => {
  const hadleClick = () => {
    onClick && onClick();
  };

  return (
    <Wrapper onClick={hadleClick} color={color}>
      {text}
    </Wrapper>
  );
};

export default Card;
