import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import OverallCount from './OverallCount';

const getTotalCount = function (data) {
  return data.reduce(
    (total, state) => {
      state.districtData.forEach((dist) => {
        total.confirmed += dist.confirmed;
        total.confirmedDelta += dist.delta.confirmed;
        total.recoveredDelta += dist.delta.recovered;
        total.deceasedDelta += dist.delta.deceased;
        total.active += dist.active;
        total.recovered += dist.recovered;
        total.deceased += dist.deceased;
      });
      return total;
    },
    {
      confirmed: 0,
      confirmedDelta: 0,
      active: 0,
      recovered: 0,
      recoveredDelta: 0,
      deceased: 0,
      deceasedDelta: 0,
    },
  );
};

const Overall = ({style, data}) => {
  const {
    confirmed,
    active,
    recovered,
    deceased,
    confirmedDelta,
    recoveredDelta,
    deceasedDelta,
  } = getTotalCount(data);
  return (
    <View style={style}>
      <OverallCount
        label="Confirmed"
        delta={confirmedDelta}
        cases={confirmed}
        rgba={[255, 5, 55]}
      />
      <OverallCount
        label="Active"
        delta={0}
        cases={active}
        rgba={[0, 123, 255]}
      />
      <OverallCount
        label="Deceased"
        delta={deceasedDelta}
        cases={deceased}
        rgba={[108, 117, 125]}
      />
      <OverallCount
        label="Recovered"
        delta={recoveredDelta}
        cases={recovered}
        rgba={[40, 167, 69]}
      />
    </View>
  );
};

const StyledOverall = styled(Overall)`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export default StyledOverall;
