import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StackNavigationProp} from '@react-navigation/stack';
import Styled from 'styled-components/native';


import BitCatalogList from './BigCatalogList';
import SubCatalogList from './SubCatalogList';

const Container = Styled.ScrollView`
  flex: 1;
  background-color: #090909;
`;

type NavigationProp = StackNavigationProp<MovieNaviParamList, 'MovieHome'>;
interface Props {
  navigation: NavigationProp;
}


const MovieHome = ({navigation}: Props) => {
  
  return (
    <Container>
      <DropDownPicker
          items={[
             {label: '전체 보기', value: '1'},
              {label: 'Action', value: '2'},
              {label: 'Documentary', value: '3', selected: true},
          ]}
          defaultValue="1"
          containerStyle={{height: 40, width: 130, marginLeft:30}}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          labelStyle={{fontSize: 15, color: '#000'}}
          showArrow={true}
          onChangeItem={item => console.log(item.label, item.value)}
      />
      <SubCatalogList
        url="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
    </Container>
  );
};

export default MovieHome;
