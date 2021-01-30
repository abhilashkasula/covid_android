import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const Delta = ({style, delta}) => <Text style={style}>{delta}</Text>;

const StyledDelta = styled(Delta)`
  font-family: monospace;
`;

export default StyledDelta;
