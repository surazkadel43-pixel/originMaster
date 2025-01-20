import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReviewDetails from '../screens/reviewDetails';
import Drawer from './drawer';
import modals from '../screens/modals';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Directions } from 'react-native-gesture-handler';
import Game from '../screens/gameScreens';
import { StyleSheet, Text, View, Image, TouchableOpacity,  } from 'react-native';

const Tab =  createBottomTabNavigator();
const styles = StyleSheet.create( {
    shadowS: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
})

export default function BottomTabs(){

    return(
     
        <NavigationContainer>
            <Tab.Navigator

            
            
            screenOptions={ {
                tabBarLabelPosition: "below-icon",
                tabBarShowLabel: true,
                tabBarActiveTintColor: 'purple',
                //tabBarInactiveTintColor: 'red',
                
                tabBarStyle: {
                    backgroundColor: "pink",
                    height: 80,
                    borderRadius: 15,
                    borderWidth: 5,
                   
                    
                    ...styles.shadowS,
                  },
                tabBarLabelStyle: {
                    fontSize: 20, // Increase label font size
                    
                  },
            }}

           
            initialRouteName="Game"
            >

              <Tab.Screen name="Home" component={Drawer}
                    options={{
                    headerShown: false,
                    headerTitle: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                      ),
                 
                }}
                />
                
                <Tab.Screen name="modals" component={modals}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                                  <FontAwesome name="history" color={color} size={40} />
                                ),
                 
                }}
                />
                <Tab.Screen name="Game" component={Game}  
                options={{
                    headerShown: true,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="article" color={color} size={40} />
                      ),
                 
                }}
                />
                
                
                
            </Tab.Navigator>
        </NavigationContainer>
      
    )
    
}
