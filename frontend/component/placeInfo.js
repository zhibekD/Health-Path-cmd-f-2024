import * as React from 'react';
import { Card, Text } from 'react-native-paper';

{/* TODO: get the actual info */}
const placeInfo = () => (
  <Card style={{ width: '90%', height: '30%'}}>
    <Card.Content>
      <Text variant="titleLarge">Place Name</Text>
      <Text variant="bodyMedium">Place Info</Text>
    </Card.Content>
  </Card>
);

export default placeInfo;