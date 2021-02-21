import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View`
  margin: 1px 6px;
`;

const CatalogContainer = Styled.SafeAreaView`
`;

const CatalogImageContainer = Styled.TouchableOpacity`
  padding: 0px 4px;
  margin: 10px;
`;
const CatalogImage = Styled.Image`
`;

interface Props {
  url: string;
  onPress: (id: number) => void;
  genre:string;
}

const SubCatalogList = ({url, onPress, genre}: Props) => {
  const [data, setData] = useState<Array<IMovie>>([]);

  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [genre]);

  return (
    <Container>
      <CatalogContainer>
        <FlatList
          nestedScrollEnabled={true}
          numColumns={2}
          data={data}
          keyExtractor={(item, index) => {
            return `catalogList-${(item as IMovie).id}-${index}`;
          }}
          renderItem={({item, index}) => (
            <CatalogImageContainer
              activeOpacity={1}
              onPress={() => {
                onPress((item as IMovie).id);
              }}>
              <CatalogImage
                source={{uri: (item as IMovie).large_cover_image}}
                style={{width: 170, height: 170}}
              />
            </CatalogImageContainer>
          )}
        />
      </CatalogContainer>
    </Container>
  );
};

export default SubCatalogList;
