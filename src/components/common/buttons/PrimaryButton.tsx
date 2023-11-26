import React from 'react';
import styled from 'styled-components/native';
import TouchableOpacityBtn from './TouchableOpacityBtn';
import {colors} from 'constants/colors';

type PrimaryButtonProps = {
  text: string;
  onPress: () => void;
  paddingHorizontal?: number;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onPress,
  text,
  paddingHorizontal,
}) => {
  return (
    <Wrapper paddingHorizontal={paddingHorizontal}>
      <Button onPress={onPress}>
        <Text>{text}</Text>
      </Button>
    </Wrapper>
  );
};

export default PrimaryButton;

const Wrapper = styled.View<{
  paddingHorizontal?: number;
}>`
  padding-horizontal: ${props =>
    props.paddingHorizontal !== null && props.paddingHorizontal !== undefined
      ? props.paddingHorizontal
      : 20}px;
`;

const Button = styled(TouchableOpacityBtn)`
  width: 100%;
  height: 60px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`;
const Text = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.white};
  font-style: normal;
  text-align: center;
  font-family: Apple SD Gothic Neo;
  line-height: 24px;
`;
