import React, { ReactElement } from 'react';
import styled from 'styled-components';
import theme from '../../constants/theme';

const StyledInput = styled.input`
  display: block;

  width: 100%;
  padding: 8px;

  margin-top: 0;
  margin-right: 0;
  margin-bottom: 14px;
  margin-left: 0;

  color: ${theme.color.dark};
  font-size: 16px;
  text-align: center;

  background: ${theme.color.white};
  box-shadow: none;
  border: none;
`;

type InputType = {
  type: string;
  placeholder: string;
  name: string;
  register: any;
};

const Input = ({ type, placeholder, name, register }: InputType): ReactElement => {
  return <StyledInput type={type} placeholder={placeholder} name={name} ref={register()} />;
};

export default Input;
