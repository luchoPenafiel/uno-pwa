import React, { ReactElement } from 'react';
import styled from 'styled-components';

import theme from '../../constants/theme';
import { CgArrowsExchangeAltV } from 'react-icons/cg';
import { MdBlock } from 'react-icons/md';

const Wrapper = styled.button<{ scale: number }>`
  display: block;
  position: relative;

  height: 75px;
  width: 53px;

  border-radius: 4px;
  border: 4px solid ${theme.color.white};

  background-color: ${({ color }) => color};

  color: ${theme.color.dark};
  font-size: 22px;

  cursor: pointer;

  overflow: hidden;

  ${({ scale }) => (scale ? `transform: scale(${scale});` : '')};

  &::after {
    content: '';
    display: block;

    position: absolute;
    top: 18px;
    left: -5px;

    width: 55px;
    height: 30px;
    background: ${theme.color.white};
    border-radius: 50%;

    transform: rotate(-45deg);

    z-index: 1;
  }

  span {
    position: relative;

    color: ${({ color }) => color};
    z-index: 2;

    svg {
      path {
        color: ${({ color }) => color};
      }
    }
  }
`;

const Value = styled.span<{ value: string }>`
  &::before {
    content: '${({ value }) => value}';

    position: absolute;
    top: -22px;
    left: ${({ value }) => (value !== '+2' ? '-16px' : '-10px')};

    font-size: 12px;
  }

  &::after {
    content: '${({ value }) => value}';

    position: absolute;
    bottom: -22px;
    right: ${({ value }) => (value !== '+2' ? '-16px' : '-10px')};

    font-size: 12px;

    transform: rotate(180deg);
  }
`;

const Return = styled.div`
  position: relative;
  z-index: 2;

  transform: rotate(45deg);

  color: ${({ color }) => color};

  svg {
    path {
      color: ${({ color }) => color};
    }
  }
`;

const Block = styled.div`
  position: relative;
  z-index: 2;

  transform: translateY(2px);

  color: ${({ color }) => color};

  svg {
    path {
      color: ${({ color }) => color};
    }
  }
`;

const FourMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 2;

  &::after {
    content: '+4';

    position: absolute;
    bottom: -35px;
    right: 0;

    font-size: 12px;

    transform: rotate(180deg);
  }

  &::before {
    content: '+4';

    position: absolute;
    top: -35px;
    left: 0;

    font-size: 12px;
  }

  div {
    position: absolute;

    width: 10px;
    height: 15px;

    border-radius: 2px;

    &:nth-of-type(1) {
      background-color: ${theme.color.red};
      transform: translateX(-5px);
    }

    &:nth-of-type(2) {
      background-color: ${theme.color.blue};
      transform: translateY(-5px);
    }

    &:nth-of-type(3) {
      background-color: ${theme.color.yellow};
      transform: translateY(5px) translateX(1px);
    }

    &:nth-of-type(4) {
      background-color: ${theme.color.green};
      transform: translateX(5px);
    }
  }
`;

const Comodin = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 15px);

  width: 30px;
  height: 57px;
  border-radius: 50%;

  transform: rotate(45deg);

  overflow: hidden;
  position: relative;
  left: 7px;

  z-index: 3;
  div {
    height: 30px;

    &:nth-of-type(1) {
      background-color: ${theme.color.red};
    }

    &:nth-of-type(2) {
      background-color: ${theme.color.blue};
    }

    &:nth-of-type(3) {
      background-color: ${theme.color.yellow};
    }

    &:nth-of-type(4) {
      background-color: ${theme.color.green};
    }
  }
`;

const Card = ({ onClick, text, color, especial, scale }: any): ReactElement => {
  const hadleClick = () => {
    onClick && onClick();
  };

  return (
    <Wrapper onClick={hadleClick} color={color} scale={scale}>
      {text && <Value value={text}>{text}</Value>}
      <span>
        {
          <>
            {especial === 'R' ? (
              <Return color={color}>
                <CgArrowsExchangeAltV color={color} />
              </Return>
            ) : null}

            {especial === 'B' ? (
              <Block>
                <MdBlock color={color} />
              </Block>
            ) : null}

            {especial === '+4' ? (
              <FourMore>
                <div />
                <div />
                <div />
                <div />
              </FourMore>
            ) : null}

            {especial === '*' ? (
              <Comodin>
                <div />
                <div />
                <div />
                <div />
              </Comodin>
            ) : null}
          </>
        }
      </span>
    </Wrapper>
  );
};

export default Card;
