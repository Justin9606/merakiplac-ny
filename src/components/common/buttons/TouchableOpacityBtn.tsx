import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  onPress?: () => void;
}

const TouchableOpacityBtn: React.FC<Props> = ({
  children,
  onPress,
  ...propsOthers
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} {...propsOthers}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchableOpacityBtn;
