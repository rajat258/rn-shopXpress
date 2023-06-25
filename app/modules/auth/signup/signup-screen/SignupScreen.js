import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './signupScreenStyle';
import images from '../../../../assets/images';
import {AppStyle, globalMetrics} from '../../../../theme';
import {CustomButton, FormikTextInput, Loader} from '../../../../components';
import {Strings} from '../../../../constants';
import {useCustomRef} from '../../../../hooks';
import useSignup from './useSignup';

const SignupScreen = () => {
  const {emailRef, passwordRef, confirmPasswordRef, mobileRef, nameRef} =
    useCustomRef();

  const {
    jumpToSignIn,
    checkCredential,
    handleChange,
    errors,
    setFieldTouched,
    touched,
    values,
    load,
  } = useSignup();

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
                ref={nameRef}
                customRef={mobileRef}
                handleChange={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
                value={values.name}
                placeholderValue={Strings.enterName}
              />
              {errors.name && touched.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
              <FormikTextInput
                style={styles.formikTextInput}
                ref={mobileRef}
                customRef={emailRef}
                handleChange={handleChange('mobileNo')}
                onBlur={() => setFieldTouched('mobileNo')}
                value={values.mobileNo}
                placeholderValue={Strings.enterMobileNo}
              />
              {errors.mobileNo && touched.mobileNo && (
                <Text style={styles.errorText}>{errors.mobileNo}</Text>
              )}
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
                ref={passwordRef}
                customRef={confirmPasswordRef}
                handleChange={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                value={values.password}
                placeholderValue={Strings.enterPassword}
                password
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <FormikTextInput
                style={styles.formikTextInput}
                onSubmit={checkCredential}
                ref={confirmPasswordRef}
                handleChange={handleChange('confirmPassword')}
                onBlur={() => setFieldTouched('confirmPassword')}
                value={values.confirmPassword}
                placeholderValue={Strings.enterConfirmPass}
                password
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}

              <CustomButton
                onPress={checkCredential}
                textStyle={styles.loginButtonText}
                text={Strings.signup}
                buttonStyle={styles.loginButton}
              />
              <View style={styles.noAccountContainer}>
                <Text style={styles.noAccountText}>
                  {Strings.alreadyAccount}
                </Text>
                <TouchableOpacity
                  onPress={jumpToSignIn}
                  style={styles.signupButton}>
                  <Text style={styles.signupButtonText}>{Strings.login}</Text>
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

export default SignupScreen;
