import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const Label = ({style, text}) => <Text style={style}>{text}</Text>;

const StyledLabel = styled(Label)`
  color: ${({rgba, label, cases}) =>
    `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${
      label ? 1 : cases ? 0.8 : 0.6
    })`};
  font-weight: bold;
  font-size: ${({label, cases}) => (label ? 13 : cases ? 20 : 11)};
  font-family: monospace;
  margin-bottom: 1.25;
  margin-top: 1.25;
`;

export default StyledLabel;
