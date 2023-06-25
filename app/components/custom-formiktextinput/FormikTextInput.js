import {TextInput} from 'react-native';
import React from 'react';
import {colors} from '../../theme';

const FormikTextInput = (
  {
    handleChange,
    placeholderValue,
    onBlur,
    value,
    customRef,
    onSubmit = null,
    defaultValue = '',
    password = false,
    keyboardType = 'default',
    maxLength = undefined,
    style,
  },
  ref,
) => {
  const changeFocus = () => {
    if (onSubmit) {
      onSubmit();
    } else {
      customRef.current?.focus();
    }
  };

  return (
    <TextInput
      autoComplete="off"
      {...{keyboardType, ref, value, defaultValue, style, onBlur, maxLength}}
      textContentType={password ? 'newPassword' : 'none'}
      onSubmitEditing={changeFocus}
      onChangeText={handleChange}
      autoCapitalize="none"
      secureTextEntry={password}
      placeholderTextColor={colors.grey}
      placeholder={placeholderValue}
    />
  );
};

export default React.forwardRef(FormikTextInput);
