import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import NavigationHeader from '../commonFiles/navigationHeader';


const Stack = createStackNavigator();

export default function HomeScreens({ navigation }: {navigation: any}) {
  //let reviewData: any = { id: '', title: '', body: '', rating: 0}

  let num = navigation.getState().routes.length;
  console.log("number of screens",num)


  useEffect(() => {
    const state = navigation.getState();
    const numberOfScreens = state.routes.length;
    console.log('Number of screens in the stack:', numberOfScreens);
  }, [navigation]);
  
  
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        
        headerStyle: { backgroundColor: '#eee' , height: 110 }
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <NavigationHeader title="Home" navigation={navigation} />,
          
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
       
        component={ReviewDetails}
        
      />
      
    </Stack.Navigator>
  );
}
