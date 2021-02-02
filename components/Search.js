import React from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components';

const Search = ({style, text, onChange}) => (
  <TextInput
    value={text}
    onChangeText={onChange}
    placeholder="Search a state here"
    style={style}
  />
);

const StyledSearch = styled(Search)`
  border: 1px solid #ccc;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 27px;
  border-radius: 3px;
  padding: 13px 28px;
  width: 350px;
`;

export default StyledSearch;
