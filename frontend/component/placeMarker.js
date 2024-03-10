import React from 'react';
import { Marker } from 'react-native-maps';

const PlaceMarker = ({ item }) => {
  const { latitude, longitude } = item;

  return (
    <Marker
      coordinate={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    />
  );
};

export default PlaceMarker;
