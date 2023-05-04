import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React from 'react';

const SearchBar = ({ searchTerm, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" size={30} style={styles.searchIconStyle} />
      <TextInput
        placeholder="search"
        autoCapitalize="none"
        autoCorrect={false}
        value={searchTerm}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={onTermSubmit}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginVertical: 15,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    backgroundColor: '#F0EEEE',
    flexDirection: 'row',
  },

  searchIconStyle: {
    alignSelf: 'center',
  },

  inputStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
  },
});

export default SearchBar;
