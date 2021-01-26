import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const Label = ({style, text}) => <Text style={style}>{text}</Text>;

const StyledLabel = styled(Label)`
  color: ${({rgba}) => `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, 1)`};
  font-weight: ${({label, cases}) => (label || cases ? 'bold' : 'normal')};
  font-size: ${({label, cases}) => (label ? 10 : cases ? 16 : 8.5)};
  font-family: monospace;
  margin-bottom: 1.25;
  margin-top: 1.25;
`;

export default StyledLabel;
