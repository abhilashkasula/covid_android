import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {getStateCount} from './utils';
import StateCases from './StateCases';
import StateName from './StateName';

const getDelta = (n) =>
  n > 0 ? `↑${Math.abs(n)}` : n < 0 ? `↓${Math.abs(n)}` : '';

const State = ({style, state}) => {
  const {c, cd, a, ad, d, dd, r, rd} = getStateCount(state.districtData);
  return (
    <View style={style}>
      <StateName name={state.state} />
      <View>
        <StateCases delta={getDelta(cd)} cases={c} confirmed />
        <StateCases delta={getDelta(ad)} cases={a} active />
        <StateCases delta={getDelta(dd)} cases={d} deceased />
        <StateCases delta={getDelta(rd)} cases={r} />
      </View>
    </View>
  );
};

const StyledState = styled(State)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: rgba(108, 117, 125, 0.09);
  width: 357px;
  border-radius: 3px;
  padding: 13px 27px;
  margin: 3px;
`;

export default StyledState;
