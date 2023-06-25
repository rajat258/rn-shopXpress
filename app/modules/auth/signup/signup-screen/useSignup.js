import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {useState} from 'react';
import {alertBox} from '../../../../components';
import {Routes, Strings} from '../../../../constants';
import {commonUtils, validationSchema} from '../../../../utils';

const useSignup = () => {
  const navigation = useNavigation();
  const initialValues = {
    name: '',
    mobileNo: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const {signupUser, checkEmail} = commonUtils();
  const [load, setLoad] = useState(false);
  const {
    handleChange,
    handleSubmit,
    errors,
    isValid,
    setFieldTouched,
    touched,
    values,
  } = useFormik({
    enableReinitialize: true,
    validationSchema: validationSchema.signup,
    initialValues: {...initialValues},
  });

  const checkCredential = async () => {
    setLoad(true);
    handleSubmit();
    if (checkEmail(values.email) && isValid) {
      if (values.password !== values.confirmPassword) {
        alertBox(Strings.invalidPass);
      } else {
        const checkSignup = await signupUser({
          name: values.name,
          mobileNo: values.mobileNo,
          email: values.email,
          password: values.password,
        });
        if (!checkSignup) {
          alertBox(Strings.accExist);
        } else {
          jumpToSignIn();
        }
      }
    }
    setLoad(false);
  };

  const jumpToSignIn = () => {
    setLoad(false);
    navigation.replace(Routes.login);
  };

  return {
    jumpToSignIn,
    checkCredential,
    handleChange,
    errors,
    setFieldTouched,
    touched,
    values,
    load,
  };
};

export default useSignup;
