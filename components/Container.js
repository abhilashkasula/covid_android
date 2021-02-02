import React, {useEffect, useState} from 'react';
import {Text, ScrollView} from 'react-native';
import Title from './Title';
import Overall from './Overall';
import States from './States';
import Search from './Search';
import {filterStates} from './utils';

const STATES_API = 'https://api.covid19india.org/v2/state_district_wise.json';

const Container = () => {
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(STATES_API)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return data ? (
    <ScrollView>
      <Title text="Covid India" />
      <Overall data={data} />
      <Search text={searchText} onChange={setSearchText} />
      <States states={filterStates(data, searchText)} />
    </ScrollView>
  ) : (
    <Text>Loading</Text>
  );
};

export default Container;
