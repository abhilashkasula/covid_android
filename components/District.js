import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import Column from './Column';
import {getDelta} from './utils';

const District = ({style, district}) => {
  return (
    <View style={style}>
      <Column text={district.district} firstCol color="default" />
      <Column
        text={`${getDelta(district.delta.confirmed)} ${district.confirmed}`}
      />
      <Column text={`${getDelta(district.delta.active)} ${district.active}`} />
      <Column
        text={`${getDelta(district.delta.deceased)} ${district.deceased}`}
      />
      <Column
        text={`${getDelta(district.delta.recovered)} ${district.recovered}`}
      />
    </View>
  );
};

const StyledDistrict = styled(District)`
  flex: 1;
  flex-direction: row;
`;

export default StyledDistrict;
