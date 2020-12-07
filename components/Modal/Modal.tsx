import React, { ReactElement } from 'react';
import styled from 'styled-components';
import theme from '../../constants/theme';
import { ImCancelCircle } from 'react-icons/im';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  padding: 20px;

  background-color: rgba(0, 0, 0, 0.5);

  overflow-y: scroll;

  z-index: 10;
`;

const Body = styled.div`
  background-color: ${theme.color.white};

  width: 100%;
  padding: 20px;

  h1,
  p,
  strong,
  ul,
  li {
    color: ${theme.color.dark};
  }

  li {
    margin-left: 20px;
  }

  h1 {
    margin-top: 22px;
  }
`;

const Button = styled.button`
  position: absolute;

  top: 26px;
  right: 26px;

  background: none;
  appearance: none;
  border: none;
  box-shadow: none;

  svg {
    path {
      color: #000;
    }
  }
`;

type ModalTypes = {
  children: ReactElement | ReactElement[];
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalTypes): ReactElement => {
  return (
    <Wrapper>
      <Button onClick={onClose}>
        <ImCancelCircle color="#000" fontSize={22} />
      </Button>
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default Modal;
