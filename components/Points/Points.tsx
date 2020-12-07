import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Value = styled.p`
  margin-bottom: 32px;

  text-align: center;
  font-size: 40px;
`;

type PointsType = {
  value: number;
};

const Points = ({ value }: PointsType): ReactElement => {
  return <Value>{value}</Value>;
};

export default Points;
