import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReviewDetails from '../screens/reviewDetails';
import Drawer from './drawer';
import modals from '../screens/modals';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Directions } from 'react-native-gesture-handler';
import MyForm from '../components/Myform';

const Tab =  createBottomTabNavigator();

export default function BottomTabs(){

    return(
     
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={ {
                tabBarLabelPosition: "below-icon",
                tabBarShowLabel: true,
                tabBarActiveTintColor: 'purple',
                //tabBarInactiveTintColor: 'red',
                
                tabBarStyle: { backgroundColor: 'pink' , marginHorizontal:10, height: 60,borderRadius: 10,},
                tabBarLabelStyle: {
                    fontSize: 15, // Increase label font size
                    
                  },
            }}
            initialRouteName="Home"
            >

              <Tab.Screen name="Home" component={Drawer}
                    options={{
                    headerShown: false,
                    headerTitle: 'Homefh',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                      ),
                 
                }}
                />
                
                <Tab.Screen name="modals" component={modals}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                                  <MaterialIcons name="history" color={color} size={size} />
                                ),
                 
                }}
                />
                <Tab.Screen name="ReviewDetails" component={ReviewDetails}  
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="article" color={color} size={size} />
                      ),
                 
                }}
                />
                
                
                
            </Tab.Navigator>
        </NavigationContainer>
      
    )
}
