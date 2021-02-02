import React from 'react';
import {TextInput} from 'react-native';

const Search = ({text, onChange}) => (
  <TextInput
    value={text}
    onChangeText={onChange}
    placeholder="Search a state here"
  />
);

export default Search;
