import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import State from './State';
import {getStateCount} from './utils';

const sortOnConfirmedCases = (a, b) => {
  const {c: confirmedA} = getStateCount(a.districtData);
  const {c: confirmedB} = getStateCount(b.districtData);
  return confirmedA > confirmedB ? -1 : confirmedA < confirmedB ? 1 : 0;
};

const States = ({style, states}) => {
  return (
    <View style={style}>
      {states.sort(sortOnConfirmedCases).map((state) => {
        return <State key={state.statecode} state={state} />;
      })}
    </View>
  );
};

const StyledStates = styled(States)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default StyledStates;
