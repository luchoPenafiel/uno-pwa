import React, { ReactElement } from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import theme from '../../constants/theme';

const Wrapper = styled.li`
  width: 100%;

  margin-bottom: 10px;

  list-style: none;
  background-color: #fff;
`;

const StyledLink = styled.a`
  display: block;

  width: 100%;
  height: 100%;

  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 16px;

  span {
    color: ${theme.color.dark};
    font-size: 20px;
  }
`;

const Footer = styled.span`
  display: block;

  width: 100%;

  padding-top: 16px;

  color: ${theme.color.gray};
  text-align: center;
  font-size: 16px;

  border-top: 1px solid ${theme.color.gray};
`;

type PlayerTypes = {
  name: string;
  points: number;
  id: number;
};

const Player = ({ name, points, id }: PlayerTypes): ReactElement => {
  return (
    <Wrapper>
      <NextLink href={`/points/${id}`} passHref>
        <StyledLink>
          <Header>
            <span>{name}</span>
            <span>{points}</span>
          </Header>

          <Footer>Agregar puntos</Footer>
        </StyledLink>
      </NextLink>
    </Wrapper>
  );
};

export default Player;
