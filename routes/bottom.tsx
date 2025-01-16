import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReviewDetails from '../screens/reviewDetails';
import NavigationHeader from '../commonFiles/navigationHeader';
import About from '../screens/about';
import HomeScreens from './homeStack';
import EditDeleteExample from '../screens/modals';
import AboutScreens from './aboutStack';

const Tab =  createBottomTabNavigator();

export default function BottomTabs({ navigation }: {navigation: any}){

    return(
     
            <Tab.Navigator
            screenOptions={ {
                tabBarLabelPosition: "below-icon",
                tabBarShowLabel: true,
                tabBarActiveTintColor: 'purple',
                //tabBarInactiveTintColor: 'grey',
                
                tabBarStyle: { backgroundColor: '#eee' , margin: 0, paddingBottom: 10, height: 60,},
                tabBarLabelStyle: {
                    fontSize: 20, // Increase label font size
                    fontWeight: '600',
                  },
            }}
            
            >
                <Tab.Screen name="HomeScreens" component={HomeScreens}
                options={{
                    headerShown: false, 
                        }}
                />
                <Tab.Screen name="About" component={AboutScreens}
                options={{
                    headerShown: false,
                 
                }}
                />
                <Tab.Screen name="ReviewDetails" component={ReviewDetails}/>
            </Tab.Navigator>
      
    )
}
