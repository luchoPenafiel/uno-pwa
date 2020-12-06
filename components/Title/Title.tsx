import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  margin-bottom: 24px;

  text-align: center;
  font-size: 24px;
`;

type TitleType = {
  text: string;
};

const Title = ({ text }: TitleType): ReactElement => {
  return <Text>{text}</Text>;
};

export default Title;
