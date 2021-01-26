import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const STATES_API = 'https://api.covid19india.org/v2/state_district_wise.json';

const Title = styled.Text`
  font-size: 25px;
  font-family: monospace;
  margin: 20px 0;
  font-weight: bold;
`;

const ContainerView = styled.View`
  flex: 1;
  align-items: center;
`;

const Container = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(STATES_API)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return data ? (
    <ContainerView>
      <Title>Covid India</Title>
    </ContainerView>
  ) : (
    <Text>Loading</Text>
  );
};

export default Container;
