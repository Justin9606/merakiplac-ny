/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ActiveStar, BackBtn, InActiveStar} from 'assets';
import CustomImage from 'components/common/CustomImage';
import {FilterButton, TouchableOpacityBtn} from 'components/common/buttons';
import {colors} from 'constants/colors';
import styled from 'styled-components/native';
import {Spacer} from 'components/common';

type Props = {
  title?: string;
  children?: JSX.Element;
  leftBtnType?: 'arrowLeft' | 'hidden';
  headerRight?: string;
  headerType?: 'native' | 'custom';
  onRightBtnPress?: () => void;
  isScrapped?: boolean;

  //custom header types
  headlineFilteredText?: string;
  dateFilteredText?: string;
  countryFilteredText?: string;
  onPressHeaderFilter?: () => void;
};

const ICONS = {
  arrowLeft: BackBtn,
};

const CustomHeader: React.FC<Props> = ({
  title,
  leftBtnType = 'arrowLeft',
  headerRight,
  headerType = 'navigation',
  isScrapped,
  onRightBtnPress,

  //custom header types
  headlineFilteredText,
  dateFilteredText,
  countryFilteredText,
  onPressHeaderFilter,
}) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    if (headerType === 'native') {
      navigation.setOptions({
        headerTitleAlign: 'center',
        headerShown: true,
        headerRight: () => (
          <TouchableOpacityBtn
            onPress={onRightBtnPress}
            style={{paddingLeft: 12}}>
            <CustomImage image={isScrapped ? ActiveStar : InActiveStar} />
          </TouchableOpacityBtn>
        ),
        headerLeft: () => (
          <TouchableOpacityBtn onPress={() => navigation.goBack()}>
            <CustomImage image={ICONS[leftBtnType]} />
          </TouchableOpacityBtn>
        ),
        headerTitle: () => <HeaderTitle>{title}</HeaderTitle>,
      });
    }
  }, [
    navigation,
    title,
    headerType,
    leftBtnType,
    headerRight,
    onRightBtnPress,
    isScrapped,
  ]);

  if (headerType === 'custom') {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <FilterButton
            text={headlineFilteredText ? headlineFilteredText : '전체 헤드라인'}
            iconType={'search'}
            active={!!headlineFilteredText}
            onPress={onPressHeaderFilter}
          />
          <Spacer width={7} />
          <FilterButton
            text={dateFilteredText ? dateFilteredText : '전체 날짜'}
            iconType={'calendar'}
            active={!!dateFilteredText}
            onPress={onPressHeaderFilter}
          />
          <Spacer width={7} />
          <FilterButton
            text={countryFilteredText ? countryFilteredText : '전체 국가'}
            active={!!countryFilteredText}
            onPress={onPressHeaderFilter}
          />
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
  return;
};

export default CustomHeader;

const HeaderWrapper = styled.View`
  justify-content: center;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  background-color: ${colors.white};
  align-items: center;
  height: 60px;
  padding-horizontal: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray};
`;

const HeaderTitle = styled.Text`
  text-align: center;
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
`;
