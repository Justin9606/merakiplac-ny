import {
  ActiveCalendar,
  ActiveSearch,
  InActiveCalendar,
  InActiveSearch,
} from 'assets';
import React from 'react';
import styled from 'styled-components/native';
import CustomImage from '../CustomImage';
import TouchableOpacityBtn from './TouchableOpacityBtn';
import {colors} from 'constants/colors';

type Props = {
  text?: string;
  iconType?: 'calendar' | 'search' | 'hidden';
  active?: boolean;
  onPress?: () => void;
};

const FilterButton: React.FC<Props> = ({text, active, iconType, onPress}) => {
  const ICONS = {
    calendar: active ? ActiveCalendar : InActiveCalendar,
    search: active ? ActiveSearch : InActiveSearch,
  };
  return (
    <Wrapper active={active} onPress={onPress}>
      <CustomImage image={ICONS[iconType]} />
      <Text active={active}>{text}</Text>
    </Wrapper>
  );
};

export default FilterButton;

const Wrapper = styled(TouchableOpacityBtn)<{active?: boolean}>`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  padding: 6px 12px 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-width: 1px;
  border-radius: 30px;
  border-color: ${props => (props.active ? colors.primary : colors.gray)};
`;

const Text = styled.Text<{active?: boolean}>`
  text-align: right;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${props => (props.active ? colors.primary : colors.black_80)};
`;
