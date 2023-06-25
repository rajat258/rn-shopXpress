import {Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './categoryItemStyle';
import {Routes} from '../../../constants';

const CategoryItem = ({item}) => {
  const navigation = useNavigation();

  const openCategory = () => {
    navigation.navigate(Routes.product, {id: item.id});
  };

  return (
    <TouchableOpacity onPress={openCategory} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.categoryImage}
          source={{uri: item.assets[0].url}}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.categoryName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
