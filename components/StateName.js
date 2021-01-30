import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const StateName = ({style, name}) => <Text style={style}>{name}</Text>;

const StyledStateName = styled(StateName)`
  font-family: monospace;
  font-size: 20px;
  font-weight: bold;
  max-width: 260px;
`;

export default StyledStateName;
