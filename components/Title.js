import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const Title = ({text, style}) => <Text style={style}>{text}</Text>;

const StyledTitle = styled(Title)`
  font-size: 25px;
  font-family: monospace;
  margin: 20px 0;
  font-weight: bold;
  text-align: center;
`;

export default StyledTitle;
