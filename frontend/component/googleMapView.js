import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import PlaceInfo from './placeInfo';

const GoogleMapView = ({placeList}) => {

  return (
    <View style={{ flex: 1 }}> 
      <MapView
        style={{ flex: 1 }} 
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
            latitude: 49.2623,  // default UBC Location
            longitude: -123.2454,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
      >
        {console.log(placeList)}
        {placeList?.map((place, index) => index <= 20 && (
          <Marker
            key={index}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude
            }}
          >
            <Callout style={{ width: 250, height: 300 }}>
              <PlaceInfo name={place.name} hours={place.hours} />
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default GoogleMapView;
