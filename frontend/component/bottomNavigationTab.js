import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/HomePage';
import Search from '../screens/SearchPage';
import Fav from '../screens/FavouritePlaces';
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
          tabBarIcon: ({ color }) => ( 
            <FontAwesome name="stethoscope" size={24} color={color} />
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
            tabBarIcon: ({ color }) => ( 
              <Ionicons name="location-outline" size={24} color={color} />
            ),
          }} />
        <Tab.Screen 
        name="Favourite Places" 
        component={Fav}
        options={{
            tabBarLabel: 'Favourites',
            tabBarLabelStyle: {
              fontSize: 16
            },
            tabBarIcon: ({ color }) => ( 
              <FontAwesome name="heartbeat" size={24} color={color} />
            ),
          }} />
    </Tab.Navigator>
    
  );
}


