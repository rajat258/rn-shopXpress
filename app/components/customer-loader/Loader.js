import {Image} from 'react-native';
import React from 'react';
import images from '../../assets/images';

const Loader = ({style, load}) => {
  return <>{load && <Image style={style} source={{uri: images.loader}} />}</>;
};

export default Loader;
