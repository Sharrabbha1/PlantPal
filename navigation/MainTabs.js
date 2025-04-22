import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import MyPlantsScreen from '../screens/MyPlantsScreen';
import EcoCheckScreen from '../screens/EcoCheckScreen';
import CareScreen from '../screens/CareScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: '🏠 Home' }} />
      <Tab.Screen name="My Plants" component={MyPlantsScreen} options={{ tabBarLabel: '🌿 My Plants' }} />
      <Tab.Screen name="Eco Check" component={EcoCheckScreen} options={{ tabBarLabel: '🌞 Eco Check' }} />
      <Tab.Screen name="Care" component={CareScreen} options={{ tabBarLabel: '💧 Care' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: '👤 Profile' }} />
    </Tab.Navigator>
  );
}
