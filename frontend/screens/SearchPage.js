import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GoogleMapView from '../component/googleMapView';
import DropDownPicker from '../component/dropDown';

const Search = () => {

  const [selectedValue, setSelectedValue] = useState();

  const [placeList, setplaceList] = useState([]);

  function setValue(value) {
    this.setSelectedValue(value);
  }

  useEffect(()=>{
    console.log("Updated place list");
  },[placeList])
 
  return (
    <View style={styles.container}>
      <DropDownPicker setSelectedValue={() => setSelectedValue} setplaceList={setplaceList}/>
      <View style={styles.mapView}>
        <GoogleMapView value={selectedValue} placeList={placeList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  mapView: {
    flex: 11,
  },
});

export default Search;
