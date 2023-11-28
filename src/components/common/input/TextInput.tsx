import {ActiveCalendar, InActiveCalendar} from 'assets';
import {colors} from 'constants/colors';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import CustomImage from '../CustomImage';
import {Spacer} from 'components/common';

export type TextInputProps = {
  label?: string;
  value?: string;
  placeholder?: string;
  rightItemType?: 'calendar' | 'clear' | 'none';
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onPressDatePicker?: () => void;
};

const InputField: React.FC<TextInputProps> = ({
  label,
  value,
  placeholder,
  rightItemType,
  onChangeText,
  onFocus,
  onBlur,
  onPressDatePicker,
}) => {
  const [focused, setFocused] = useState(false);

  const ICONS = {
    calendar: focused ? ActiveCalendar : InActiveCalendar,
  };
  const _onFocus = () => {
    if (onFocus) {
      onFocus();
    }
    setFocused(true);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputWrapper focused={focused}>
        <Input
          onChangeText={onChangeText}
          defaultValue={value}
          placeholder={placeholder}
          onFocus={_onFocus}
          onBlur={() => {
            setFocused(false);
            if (onBlur) {
              onBlur();
            }
          }}
        />
        {rightItemType !== 'none' && (
          <AbSoluteItem onPress={onPressDatePicker}>
            <CustomImage image={ICONS[rightItemType]} />
          </AbSoluteItem>
        )}
      </InputWrapper>
      <Spacer height={40} />
    </Wrapper>
  );
};

export default InputField;

const Wrapper = styled.View`
  margin-horizontal: 20px;
`;

const InputWrapper = styled.View<{focused?: boolean}>`
  border-width: 1px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  border-radius: 8px;
  border-color: ${props => (props.focused ? colors.primary : colors.gray)};
`;

const Input = styled.TextInput`
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: ${colors.black};
`;

const Label = styled.Text`
  font-family: Apple SD Gothic Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 8px;
  color: ${colors.black};
`;

const AbSoluteItem = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 20px;
`;
