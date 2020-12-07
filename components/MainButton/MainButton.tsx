import React, { ReactElement } from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import theme from '../../constants/theme';

const SlyledLink = styled.a`
  position: relative;

  width: 200px;
  height: 200px;

  padding: 5px;
  margin-bottom: 75px;
  margin-top: 50px;

  background: #000;
  background: linear-gradient(
    to bottom,
    ${theme.color.blue},
    ${theme.color.yellow},
    ${theme.color.green},
    ${theme.color.red}
  );

  border-radius: 100%;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: #000;
    border-radius: inherit;

    font-size: 24px;
  }
`;

type MainButtonType = {
  text: string;
  href: string;
};

const MainButton = ({ text, href }: MainButtonType): ReactElement => {
  return (
    <NextLink href={href} passHref>
      <SlyledLink>
        <span>{text}</span>
      </SlyledLink>
    </NextLink>
  );
};

export default MainButton;
