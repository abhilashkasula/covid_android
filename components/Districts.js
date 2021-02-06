import React from 'react';
import {View} from 'react-native';
import Header from './Header';
import District from './District';
import {descend} from './utils';

const Districts = ({districts}) => {
  return (
    <View>
      <Header />
      {districts
        .sort((a, b) => descend(a.confirmed, b.confirmed))
        .map((district) => (
          <District district={district} key={district.district} />
        ))}
    </View>
  );
};

export default Districts;
