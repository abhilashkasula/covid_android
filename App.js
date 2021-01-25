/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components';

const Title = styled.Text`
  font-size: 25px;
  font-family: monospace;
  margin: 20px 0;
  font-weight: bold;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const App = () => (
  <Container>
    <Title>Covid India</Title>
  </Container>
);

export default App;
