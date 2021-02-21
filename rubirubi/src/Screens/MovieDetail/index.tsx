import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import {RouteProp} from '@react-navigation/native';
import Modal from "react-native-modal";
import Button from '~/Components/Button';
import BigCatalog from '~/Screens/MovieDetail/BigCatalog';
import ScreenShotList from './ScreenShotList';

const Container = Styled.ScrollView`
  flex: 1;
  background-color: #000000;
`;

const LabelTitle = Styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
  padding: 8px 16px 4px 16px;
`;
const LabelGenres = Styled.Text`
  font-size: 15px;
  color: #FFFFFF;
  padding: 0 0 0 4px;
`;
const LabelYear = Styled.Text`
  color: #d35353;
  font-size: 13px;
  padding: 1px 0 0 14px;
`;

const ContainerTitle = Styled.Text`
  font-size: 21px;
  color: #ffffff;
  font-weight: bold;
  padding: 15px 16px 8px 16px;
`;
const DescriptionContainer = Styled.View``;
const Description = Styled.Text`
  padding: 0 16px;
  color: #ffffff;
`;
const SubInfoContainer = Styled.View``;
const InfoContainer = Styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 16px;
`;

const StyledModalContainer = Styled.View`
  flex-direction: column;
  align-items: flex-start;
  /* 모달창 크기 조절 */
  width: 100%;
  height: 50%;
  background-color: #000000;
  border: 1px;
  border-color: #ffffff;
  border-radius: 10px;
`;

const Loading = Styled.Text`
  font-size: 30px;
  color: #000000;
  font-weight: bold;
`;

type ProfileScreenRouteProp = RouteProp<MovieNaviParamList, 'MovieDetail'>;
interface Props {
  route: ProfileScreenRouteProp;
}

const MovieDetail = ({route}: Props) => {
  const [data, setData] = useState<IMovieDetail>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const {id} = route.params;
    fetch(
      `https://yts.lt/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`,
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.data.movie);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data ? (
    <Container>
      <BigCatalog
        id={data.id}
        image={data.large_cover_image}
        year={data.year}
        title={data.title}
        genres={data.genres}
      />
      <SubInfoContainer>
        <LabelTitle>{data.title}</LabelTitle>
        <InfoContainer>
          <LabelGenres>{data.genres}</LabelGenres>
          <LabelYear>{data.year}년</LabelYear>
        </InfoContainer>
      </SubInfoContainer>
      <DescriptionContainer>
        <ContainerTitle>줄거리</ContainerTitle>
        <Description>{data.description_full}</Description>
      </DescriptionContainer>
      <Button
        style={{margin:24}}
        label="Screen Shot"
        onPress={()=> {
          setModalVisible(true);
        }}
      />
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        /* style={{ flex: 1}} */
      >
        <StyledModalContainer>
        <ScreenShotList
        images={[
          data.large_screenshot_image1,
          data.large_screenshot_image2,
          data.large_screenshot_image3,
        ]}
      />
        </StyledModalContainer>
      </Modal>
    </Container>
  ) : (
    <Loading>```로딩중```</Loading>
  );
};

export default MovieDetail;
