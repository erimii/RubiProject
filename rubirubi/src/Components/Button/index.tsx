import React from 'react';
import Styled from 'styled-components/native';

const StyleButton = Styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  border: 1px;
  border-color: #ffffff;
  margin-left:5%;
`;
const Label = Styled.Text`
  color: #FFFFFF;
  font-size: 25px;
`;

interface Props {
  label: string;
  style?: Object;
  onPress?: () => void;
}

const Button = ({label, style, onPress}: Props) => {
  return (
    <StyleButton style={style} onPress={onPress}>
      <Label>{label}</Label>
    </StyleButton>
  );
};

export default Button;
