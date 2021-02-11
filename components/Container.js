import React, {useEffect, useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import Title from './Title';
import Overall from './Overall';
import States from './States';
import Search from './Search';
import {filterStates} from './utils';
import Loading from './Loading';

const STATES_API = 'https://api.covid19india.org/v2/state_district_wise.json';

const Container = () => {
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState('');

  const updateLatestData = () =>
    fetch(STATES_API)
      .then((response) => response.json())
      .then((json) => setData(json));

  useEffect(() => {
    setInterval(updateLatestData, 5000);
  }, []);

  return data ? (
    <ScrollView>
      <Title text="Covid India" />
      <Overall data={data} />
      <Search text={searchText} onChange={setSearchText} />
      <States states={filterStates(data, searchText)} />
    </ScrollView>
  ) : (
    <Loading />
  );
};

export default Container;
