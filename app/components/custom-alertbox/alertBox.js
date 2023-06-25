import {Alert} from 'react-native';
import {Strings} from '../../constants';

const alertBox = (
  title,
  message,
  okFunction = null,
  okText = Strings.ok,
  cancelText = Strings.cancelString,
  cancelFunction = null,
) => {
  const okObject = {
    text: okText,
    onPress: okFunction,
    style: 'default',
  };
  const cancelObject = {
    text: cancelText,
    onPress: cancelFunction,
    style: 'cancel',
  };
  if (cancelText) {
    Alert.alert(title, message, [okObject, cancelObject]);
  } else {
    Alert.alert(title, message, [okObject]);
  }
};

export default alertBox;
