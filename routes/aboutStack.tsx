import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pressable, Text } from 'react-native';
import About from '../screens/about';
import NavigationHeader from '../commonFiles/navigationHeader';
import EditDeleteExample from '../screens/modals';

const AboutStack = createStackNavigator();


export default function AboutScreens({ navigation }: {navigation: any}) {
  
    return (
      
        <AboutStack.Navigator initialRouteName="About">

          <AboutStack.Screen name="About" component={About}
          options={{
                    headerTitle: () => <NavigationHeader title="About" navigation={navigation} />,
                    headerStyle: { backgroundColor: '#eee' , height: 100, width: '80%', },
                    headerRight: () => (
                      <Pressable
                        onPress={() => alert('menu item pressed')}
                        style={({ pressed }) => ({
                          //paddingLeft: 0,
                          opacity: pressed ? 0.5 : 1,
                        })}
                      >
                        <Text style={{ fontSize: 18, color: 'black' }}>Menu</Text>
                      </Pressable>
                    ),
                  }}
          />
          <AboutStack.Screen name="EditDeleteExample" component={EditDeleteExample}
          
          />
          
        </AboutStack.Navigator>
      
    );
  }