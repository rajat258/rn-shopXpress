import {Image, TextInput, View} from 'react-native';
import React from 'react';
import {Strings} from '../../constants';
import styles from './searchBarStyle';
import {colors} from '../../theme';
import images from '../../assets/images';
import useSearch from './useSearch';

// SearchBar at the top of HomeScreen.
const SearchBar = ({search, setSearch, setSearchedData}) => {
  useSearch({search, setSearchedData});

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          onChangeText={val => setSearch(val)}
          autoCapitalize="none"
          style={styles.textInput}
          placeholder={Strings.search}
          placeholderTextColor={colors.grey}
        />
      </View>
      <View style={styles.searchIconContainer}>
        <Image source={images.search} style={styles.searchIcon} />
      </View>
    </View>
  );
};

export default SearchBar;
