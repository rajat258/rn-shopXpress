import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncKeys} from '../constants';

export const getAsyncId = async () => {
  try {
    const id = await AsyncStorage.getItem(AsyncKeys.id);
    return JSON.parse(id);
  } catch (error) {
    if (__DEV__) {
      console.error('AsyncStorage Error', error);
    }
  }
};

export const setAsyncId = async activeUser => {
  try {
    await AsyncStorage.setItem(AsyncKeys.id, JSON.stringify(activeUser));
  } catch (error) {
    if (__DEV__) {
      console.error('AsyncStorage Error', error);
    }
  }
};

export const killAsyncId = async () => {
  await AsyncStorage.removeItem(AsyncKeys.id);
};
