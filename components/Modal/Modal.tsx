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

  background-color: rgba(0, 0, 0, 0.9);

  overflow-y: scroll;

  z-index: 10;

  ${({ aling }) => (aling === 'center' ? 'display: flex; align-items: center;' : null)};
`;

const Body = styled.div`
  background-color: ${theme.color.white};

  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
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

  display: flex;

  padding: 5px;
  border-radius: 50%;

  top: 26px;
  right: 26px;

  background: #fff;
  appearance: none;
  border: none;
  box-shadow: none;

  cursor: pointer;

  svg {
    path {
      color: #000;
    }
  }
`;

type ModalTypes = {
  children: ReactElement | ReactElement[];
  onClose: () => void;
  aling?: string;
};

const Modal = ({ children, onClose, aling }: ModalTypes): ReactElement => {
  return (
    <Wrapper aling={aling}>
      <Button onClick={onClose}>
        <ImCancelCircle color="#000" fontSize={22} />
      </Button>
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default Modal;
