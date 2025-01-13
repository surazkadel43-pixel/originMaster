import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import AboutScreens from './aboutStack';
import HomeScreens from './homeStack';

const RootDrawerNavigator = createDrawerNavigator();

export default function Drawer() {

  
  
    return (
      <NavigationContainer>
        <RootDrawerNavigator.Navigator initialRouteName="HomeScreens"
        screenOptions={{
            headerShown: false
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
              <FontAwesome name="info-circle" color={color} size={size} />
            ),
          }}
          />
          
          
        </RootDrawerNavigator.Navigator>
      </NavigationContainer>
    );
  }
  