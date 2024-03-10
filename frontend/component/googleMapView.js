import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const GoogleMapView = () => {
  return (
    <View style={{ flex: 1 }}> 
      <MapView
        style={{ flex: 1 }} 
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        region={{
            latitude: 49.2623,  // UBC Location
            longitude: -123.2454,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
      />
    </View>
  );
};

export default GoogleMapView;
