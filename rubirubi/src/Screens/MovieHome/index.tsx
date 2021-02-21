import React,{useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import Styled from 'styled-components/native';
import DropDownPicker from 'react-native-dropdown-picker';
import SubCatalogList from './SubCatalogList';

const Container = Styled.ScrollView`
  flex: 1;
  background-color: #090909;
`;

const DropDownContainer = Styled.View`
  margin-left: 270px;
  margin-bottom:10px;
`;

type NavigationProp = StackNavigationProp<MovieNaviParamList, 'MovieHome'>;
interface Props {
  navigation: NavigationProp;
}

const urlSibal=(category)=>(`https://yts.mx/api/v2/list_movies.json?&sort_by=add_date&order_by=asc&limit=20&genre=${category}`);

const MovieHome = ({navigation}: Props) => {
  const [category, setCategory] = useState<string>('');

  useEffect(() => {console.log(category);}, [category]);

  return (
    <Container>
      <DropDownContainer>
        <DropDownPicker
            items={[
              {label: '전체 장르', value:''},
              {label: '드라마', value:'Drama'},
              {label: '코메디', value:'Comedy'},
            ]}
            placeholder="장르"
            containerStyle={{height: 30, width: 100}}
            itemStyle={{justifyContent: 'flex-start'}}
            labelStyle={{fontSize: 13, color: '#000'}}
            showArrow={true}
            dropDownStyle={{backgroundColor: '#eeeeee'}}
            onChangeItem={(items) => setCategory(items.value)}
        />
      </DropDownContainer>
      <SubCatalogList
        url={urlSibal(category)}
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
        genre={category}
      />
    </Container>
  );
};

export default MovieHome;

