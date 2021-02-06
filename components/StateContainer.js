import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import State from './State';
import Districts from './Districts';

const StateContainer = ({style, state}) => {
  const [isClicked, setClick] = useState(false);
  return (
    <View style={style}>
      <State state={state} onClick={() => setClick((clicked) => !clicked)} />
      {isClicked && <Districts districts={state.districtData} />}
    </View>
  );
};

const StyledStateContainer = styled(StateContainer)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 357px;
`;

export default StyledStateContainer;
