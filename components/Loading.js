import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';
import LoadImg from './loading.gif';

const LoadContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Loading = ({style}) => (
  <LoadContainer>
    <Image style={style} source={LoadImg} />
  </LoadContainer>
);

const StyledLoading = styled(Loading)`
  height: 50px;
  width: 50px;
`;

export default StyledLoading;
