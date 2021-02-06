import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import Column from './Column';

const Header = ({style}) => {
  return (
    <View style={style}>
      <Column text="State" header firstHeader />
      <Column text="Cnfrmd" header color="cnfrmd" />
      <Column text="Active" header color="active" />
      <Column text="Dcsd" header color="dcsd" />
      <Column text="Rcvrd" header color="rcvrd" />
    </View>
  );
};

const StyledHeader = styled(Header)`
  flex: 1;
  flex-direction: row;
`;

export default StyledHeader;
