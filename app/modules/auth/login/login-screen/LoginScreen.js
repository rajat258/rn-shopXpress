import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './loginScreenStyle';
import {useCustomRef} from '../../../../hooks';
import images from '../../../../assets/images';
import {AppStyle, globalMetrics} from '../../../../theme';
import {CustomButton, Loader} from '../../../../components';
import {FormikTextInput} from '../../../../components';
import {Strings} from '../../../../constants';
import useLogin from './useLogin';

const LoginScreen = () => {
  const {emailRef, passwordRef} = useCustomRef();
  const {
    jumpToSignup,
    checkCredential,
    handleChange,
    errors,
    setFieldTouched,
    touched,
    values,
    load,
  } = useLogin();

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={AppStyle.imageBackground}
        source={images.background}>
        <KeyboardAvoidingView
          style={styles.flex}
          keyboardVerticalOffset={-500}
          behavior={globalMetrics.isAndroid ? 'height' : 'padding'}>
          <View style={styles.innerBoxContainer}>
            <ScrollView style={styles.scrollViewAlign}>
              <FormikTextInput
                style={styles.formikTextInput}
                ref={emailRef}
                customRef={passwordRef}
                handleChange={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                value={values.email}
                placeholderValue={Strings.enterEmail}
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <FormikTextInput
                style={styles.formikTextInput}
                onSubmit={checkCredential}
                ref={passwordRef}
                handleChange={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                value={values.password}
                placeholderValue={Strings.enterPassword}
                password
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <CustomButton
                onPress={checkCredential}
                textStyle={styles.loginButtonText}
                text={Strings.login}
                buttonStyle={styles.loginButton}
              />
              <View style={styles.noAccountContainer}>
                <Text style={styles.noAccountText}>{Strings.noAccount}</Text>
                <TouchableOpacity
                  onPress={jumpToSignup}
                  style={styles.signupButton}>
                  <Text style={styles.signupButtonText}>{Strings.signup}</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <Loader style={styles.loader} {...{load}} />
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
