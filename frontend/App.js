import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './component/bottomNavigationTab';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer> 
        <TabNavigation/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
