import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import Screens from './routes/homeStack';
import Drawer from './routes/drawer';

const getFonts = () =>{
  return Font.loadAsync({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
    'roboto-extraBold': require('./assets/fonts/Roboto-ExtraBold.ttf'),
    'roboto-semiBold': require('./assets/fonts/Roboto-SemiBold.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf'),
  })
}
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  

  useEffect(() => {
    // Keep the splash screen visible while the fonts are loading
    SplashScreen.preventAutoHideAsync();

    // Load fonts
    getFonts()
      .then(() => {
        setFontsLoaded(true); // Set fonts as loaded
        SplashScreen.hideAsync(); // Hide the splash screen
      })
      .catch((error) => {
        console.error('Error loading fonts', error);
      });
  }, []);

  if (!fontsLoaded) {
    return null; // Optionally, return a loading screen or a blank screen here
  }


    return (
      <Drawer />
    );
  
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
