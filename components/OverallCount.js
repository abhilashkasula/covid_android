import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import Label from './Label';

const OverallCount = ({style, rgba, delta, label, cases}) => {
  const deltaText = delta > 0 ? `[+${delta}]` : delta < 0 ? `[${delta}]` : ' ';
  return (
    <View style={style}>
      <Label text={label} rgba={rgba} label />
      <Label text={cases} rgba={rgba} cases />
      <Label text={deltaText} rgba={rgba} />
    </View>
  );
};

const StyledOverallCount = styled(OverallCount)`
  flex-direction: column;
  padding-left: 25;
  padding-right: 25;
  padding-top: 10;
  padding-bottom: 10;
  border-radius: 2;
  margin-left: 10;
  margin-right: 10;
  margin-bottom: 10;
  margin-top: 10;
  align-items: center;
  background-color: ${({rgba}) =>
    `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, 0.2)`};
`;

export default StyledOverallCount;
