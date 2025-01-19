import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import AboutScreens from './aboutStack';
import HomeScreens from './homeStack';
import BottomTabs from './bottom';

const RootDrawerNavigator = createDrawerNavigator();

export default function Drawer() {

  
  
    return (
      
        <RootDrawerNavigator.Navigator initialRouteName="HomeScreens"
        screenOptions={{
            headerShown: false,
            drawerActiveTintColor: 'red',
            drawerInactiveTintColor: 'purple',
            drawerStyle: {
              backgroundColor: 'white'
            }
        }}
        >

          <RootDrawerNavigator.Screen name="HomeScreens" component={HomeScreens} 
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
          />
          <RootDrawerNavigator.Screen name="AboutScreens" component={AboutScreens} 
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="info" color={color} size={size} />
            ),
          }}
          />
          
          
          
          
        </RootDrawerNavigator.Navigator>
      
    );
  }
  