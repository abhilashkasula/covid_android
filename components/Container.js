import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Title from './Title';
import Overall from './Overall';

const STATES_API = 'https://api.covid19india.org/v2/state_district_wise.json';

const Container = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(STATES_API)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return data ? (
    <View>
      <Title text="Covid India" />
      <Overall data={data} />
    </View>
  ) : (
    <Text>Loading</Text>
  );
};

export default Container;
