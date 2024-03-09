import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MySearchBar from '../component/searchBar';

export default function Search() {
  return (
    <View style={styles.searchBar}>
      <MySearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
});
