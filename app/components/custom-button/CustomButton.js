import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({
  onPress,
  text,
  buttonStyle,
  textStyle,
  disable = false,
}) => {
  return (
    <TouchableOpacity disabled={disable} onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
