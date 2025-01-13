import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f8f8f8', // Light background color for a clean look
    },
    textStyle: {
      fontFamily: 'roboto-regular',
      fontSize: 25,
      //color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
      borderWidth: 5,
      borderColor: '#ddd',
      padding: 10,
      marginBottom: 1,
      borderRadius: 9,
      backgroundColor: '#fff', // White background for input
      fontSize: 20,
      // Box shadow for iOS
      shadowColor: '#fff', // Shadow color
      shadowOffset: { width: 1, height: 2 }, // Offset for shadow
      shadowOpacity: 0.2, // Shadow transparency
      shadowRadius: 4, // Blur radius
      // Box shadow for Android
      elevation: 3, // Adds shadow on Android
    },
    
    button: {
      backgroundColor: 'maroon',
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontFamily: 'roboto-semiBold',
      textTransform: 'capitalize',
      textAlign: 'center',
      fontSize: 25,
      
    },
    errorText: {
      color: 'red',
      fontSize: 20,
      fontFamily: 'roboto-regular',
      marginBottom: 0,
      textAlign: 'center',
    },
    gitStyle: {
      color: 'red',
    }
  });