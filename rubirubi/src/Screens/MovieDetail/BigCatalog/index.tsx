import React from 'react';
import {Dimensions} from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const CatalogImage = Styled.Image`
  margin-top: 3px;
`;

interface Props {
  id: number;
  image: string;
  year: number;
  title: string;
  genres: Array<string>;
  onPress?: (id: number) => void;
}

const BigCatalog = ({id, image, year, title, genres, onPress}: Props) => {
  return (
    <Container
      activeOpacity={1}
      onPress={() => {
        if (onPress && typeof onPress === 'function') {
          onPress(id);
        }
      }}>
      <CatalogImage
        source={{uri: image}}
        style={{width: Dimensions.get('window').width, height: 300}}
      />
    </Container>
  );
};

export default BigCatalog;
