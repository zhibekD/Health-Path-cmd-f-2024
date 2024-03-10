import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/HomePage';
import Search from '../screens/SearchPage';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: 16
          },
          tabBarIcon: () => (
            <FontAwesome name="stethoscope" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen 
        name="Nearby" 
        component={Search}
        options={{
            tabBarLabel: 'Nearby',
            tabBarLabelStyle: {
              fontSize: 16
            },
            tabBarIcon: () => (
              <Ionicons name="location-outline" size={24} color="black" />
            ),
          }} />
    </Tab.Navigator>
  );
}


