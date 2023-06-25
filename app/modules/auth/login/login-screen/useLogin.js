import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {useState} from 'react';
import {alertBox} from '../../../../components';
import {Routes, Strings} from '../../../../constants';
import {commonUtils, validationSchema} from '../../../../utils';

const useLogin = () => {
  const navigation = useNavigation();
  const {loginUser, checkEmail} = commonUtils();
  const initialValues = {email: '', password: ''};
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
    validationSchema: validationSchema.login,
    initialValues: {...initialValues},
  });

  const checkCredential = async () => {
    setLoad(true);
    handleSubmit();
    if (checkEmail(values.email) && isValid) {
      const userExist = await loginUser({
        email: values.email,
        password: values.password,
      });
      if (!userExist) {
        alertBox(
          Strings.userNotExist,
          Strings.pleaseSignup,
          jumpToSignup,
          Strings.signup,
        );
      } else if (userExist === 'wrongPassword') {
        alertBox(Strings.invalidPass, Strings.checkCredentials);
      } else {
        setLoad(false);
        navigation.replace(Routes.drawer);
      }
    }
    setLoad(false);
  };

  const jumpToSignup = () => navigation.replace(Routes.signup);

  return {
    jumpToSignup,
    checkCredential,
    handleChange,
    errors,
    setFieldTouched,
    touched,
    values,
    load,
  };
};

export default useLogin;
