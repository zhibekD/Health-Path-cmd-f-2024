import React from 'react';
import { View, StyleSheet } from 'react-native';
import MySearchBar from '../component/searchBar';
import GoogleMapView from '../component/googleMapView';

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <MySearchBar />
      </View>
      <View style={styles.mapView}>
        <GoogleMapView />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  searchBar: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  mapView: {
    flex: 10,
  },
});
