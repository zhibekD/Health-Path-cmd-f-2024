import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/HomePage';
import Search from '../screens/SearchPage';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={Search}
        options={{
            tabBarLabel: 'Nearby',
            tabBarIcon: ({ color, size }) => (
                <EvilIcons name="location" size={24} color="black" />
            ),
          }} />
    </Tab.Navigator>
  );
}


