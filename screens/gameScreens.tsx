import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback , Keyboard, Alert} from 'react-native';
import { globalStyles } from '../styles/global';
import { useState, useEffect, useCallback } from 'react';
import Reviews from '../components/reviews';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import MyForm from '../components/Myform';
import useFetch from '../api/useFetch';
import { Timestamp } from 'react-native-reanimated/lib/typescript/commonTypes';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';

// Define the structure of a review object
type Review = {
    id: string;
    title: string;
    body: string;
    rating: number;
  };
// to run the server npx json-server --watch data/db.json --port 8000
export default function Game({ navigation }: {navigation: any}) {

  const route = useRoute();
  const nav = useNavigation();
  //console.log('Current route name:', route.name);  // Logs the name of the current route

  // Random target number
  let randomNumber = 20 + Math.floor(50 * Math.random());
  
  const [target, setTarget] = useState(randomNumber); // Target number
  const [clickedIndices, setClickedIndices] = useState<number[]>([]); // Indices of clicked numbers
  const [sum, setSum] = useState<number>(0); // Sum of selected numbers
  const [numbers, setNumbers] = useState<number[]>(Array.from({ length: 6 }, () => Math.floor(Math.random() * 29) + 1)); // Numbers to choose from
  const [time, setTime] = useState<number>(10); // Countdown timer
  
  
   // The effect that runs when the Game screen comes into focus
   useFocusEffect(
    useCallback(() => {
      const timeout = setTimeout(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            Alert.alert(
              'Sorry',
              'You Lost. Best of Luck Next time?',
              [{ text: 'Ok', style: 'destructive', onPress: pressHandler }]
            );
            return 0; // Ensure time doesn't go below 0
          }
          return prevTime - 1; // Decrease time
        });
      }, 1000);

      // Cleanup timeout when the screen goes out of focus or time changes
      return () => clearTimeout(timeout);

    }, [time]) // Depend on 'time' so it runs each time 'time' changes
  );

  useEffect(() => {
    if (route.name === 'Game') {
      setTime(10); // Reset time if entering the 'Game' screen (optional, for initial state)
    }
  }, [route.name]); // Only reset time when route changes

  const pressHandler = () => {
      const newTarget = 10 + Math.floor(50 * Math.random()); // Generate a new target
      setTarget(newTarget);

      let guaranteedSum: number[] = [];
      let remainingTarget = newTarget;

      // Generate a valid combination that adds up to the target
      while (remainingTarget > 0) {
        const nextNumber = Math.min(Math.floor(Math.random() * remainingTarget) + 1, remainingTarget);
        guaranteedSum.push(nextNumber);
        remainingTarget -= nextNumber;
      }

      // Fill remaining spots with random numbers
      const remainingNumbers = Array.from({ length: 6 - guaranteedSum.length }, () => Math.floor(20 * Math.random()) + 1);

      // Combine and shuffle the numbers
      const allNumbers = [...guaranteedSum, ...remainingNumbers];
      for (let i = allNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
      }

      setNumbers(allNumbers); // Update numbers state
      setClickedIndices([]); // Reset clicked indices
      setSum(0); // Reset sum
      setTime(10); // Reset timer
  };

  const onNumberPress = (index: number, value: number) => {
    setClickedIndices((prev) => {
      let newIndices: number[] = [];
      let newSum = sum;

      if (prev.includes(index)) {
        newSum -= value; // Remove value from sum if clicked again
        newIndices = prev.filter((i) => i !== index); // Remove from clicked indices
      } else {
        newSum += value; // Add value to sum if clicked
        newIndices = [...prev, index]; // Add to clicked indices
      }

      // Check if sum matches target
      if (newSum === target) {
        Alert.alert(
          'Hurray',
          'You Won. Best of Luck?',
          [{ text: 'Ok', style: 'destructive', onPress: () => pressHandler() }]
        );
        setTime(1000); // Reset timer when won
      }

      setSum(newSum); // Update sum
      return newIndices; // Return new clicked indices
    });
  };

   

  return (
    <View style={styles.container}>
      

        <View style = {styles.targetView}>
            <Text style ={styles.target} >  { target }  </Text>

            <TouchableOpacity style={styles.button} onPress={pressHandler}>

                <Text style={{fontSize: 20}}> New Game </Text>
                
            </TouchableOpacity>

            <Text style ={styles.sum} > Sum:{ sum }  </Text>
        </View>

        <View >

        <Text style ={styles.sum} > Time:{ time }  </Text>
        </View>

     
        <View style = {styles.sixRandomNumber}>
            
               {numbers.map((value, index) => (

                    <TouchableOpacity key={index} onPress={() => onNumberPress(index, value)}
                    style={[
                        
                        
                      ]}
                    >
                    <Text style={[styles.targetChoose, clickedIndices.includes(index) && styles.clicked, ]}> {value} </Text>

                    </TouchableOpacity>

                ))}

        </View>
      
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    marginBottom: 2,

  },
 target: {
    fontSize: 50,
    backgroundColor: '#aaa',
    marginHorizontal: 50,
    textAlign: 'center'
 },
 button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
 },
 sixRandomNumber: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    marginHorizontal: 50,
    padding: 20,


 },
 targetView: {
   
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
 },
 targetChoose: {
    fontSize: 50,
    backgroundColor: '#aaa',
    margin: 20,
    textAlign: 'center',
    color: 'purple',
    padding: 5,


 },
 clicked: {
    backgroundColor: 'red', // Light blue background for clicked items
  },
  sum: {
    fontSize: 30,
    backgroundColor: '#aaa',
    marginHorizontal: 20,
    textAlign: 'center',
    
  }

});

