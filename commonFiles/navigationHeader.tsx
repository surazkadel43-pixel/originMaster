import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';

import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';

type name = {
  name?: string | null,
  age?: number | null,
}

let suraj: string| undefined;


export default function NavigationHeader({ title, navigation }: { title: string, navigation: any }) {
    //source={require('../assets/icon.png')}
    const navigateToReviewDetails = () => {
        navigation.navigate('HomeScreens', {
          screen: 'ReviewDetails',
          params: {
            reviewData: { id: 'dsg', title: 'fsfsf', body: 'fsfsf', rating: 0 }, // Example data
          },
        });
      };
      
      
    return(
        <ImageBackground style= {styles.header} source={require('../assets/icon.png')} >
               


         <MaterialIcons name="menu" size={24} style={styles.icon} onPress={() => navigation.openDrawer()} />
            <View  style ={styles.headerView} >
                <Image source={require('../assets/favicon.png')} style= {{alignItems: 'center'}}  />
                <Text style = {globalStyles.textStyle}> {title} </Text>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#333',
    },

    headerView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        position: 'absolute',
        left: 15,
    },
    Addicon: {
        position: 'absolute',
        right: 15,
    }
  });
  