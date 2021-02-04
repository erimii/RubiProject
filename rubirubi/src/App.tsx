import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from '~/Screens/Navigator';
import Styled from 'styled-components/native';

const Contianer =  Styled.View`
  flex:1;
`

interface Props {}

const App = ({ }:Props) =>
 {
  return (
    <Contianer>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </Contianer>
  );
};
export default App;
