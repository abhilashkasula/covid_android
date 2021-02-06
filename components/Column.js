import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const Column = ({style, text}) => {
  return <Text style={style}>{text}</Text>;
};

const colors = {
  cnfrmd: '#ff0537',
  active: '#007bff',
  dcsd: '#6c757d',
  rcvrd: '#28a745',
  default: 'rgb(61, 67, 72)',
};

const StyledColumn = styled(Column)`
  margin: 1px;
  padding: 9px 5px;
  padding-left: ${({firstCol, firstHeader}) =>
    firstCol || firstHeader ? '10px' : '0px'};
  border-left-width: ${({firstCol}) => (firstCol ? '5px' : '0px')};
  background-color: ${({firstCol, header}) =>
    header ? '#6c757d33' : firstCol ? '#ffa50033' : 'rgba(155, 164, 173, 0.1)'};
  border-left-color: #ffa500;
  border-radius: 3px;
  width: ${({firstCol, firstHeader}) =>
    firstCol || firstHeader ? '121px' : '58px'};
  text-align: ${({firstCol, header}) =>
    header ? 'center' : firstCol ? 'left' : 'right'};
  font-family: monospace;
  color: ${({color}) => colors[color] || 'black'};
  font-weight: ${({header}) => (header ? 'bold' : 'normal')};
  font-size: 12px;
`;

export default StyledColumn;
