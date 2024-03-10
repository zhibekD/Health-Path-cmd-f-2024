import * as React from 'react';
import { Card, Text } from 'react-native-paper';

{/* TODO: get the actual info */}
const PlaceInfo = ({name, hours}) => (
  <Card style={{ height: '100%'}}>
    <Card.Content>
      <Text variant="titleLarge">{name}</Text>
      <Text variant="bodyMedium">{hours}</Text>
    </Card.Content>
  </Card>
);

export default PlaceInfo;