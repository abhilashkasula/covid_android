import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import Delta from './Delta';

const StateCases = ({style, cases, delta}) => (
  <Text style={style}>
    {<Delta delta={delta} />} {cases}
  </Text>
);

const StyledStateCases = styled(StateCases)`
  text-align: right;
  font-size: 12.5px;
  margin: 1px;
  color: ${({confirmed, active, deceased, recovered}) =>
    confirmed
      ? 'rgba(255, 5, 55, 1)'
      : active
      ? 'rgba(0, 123, 255, 1)'
      : deceased
      ? 'rgba(108, 117, 125, 1)'
      : 'rgba(40, 167, 69, 1)'};
`;

export default StyledStateCases;
