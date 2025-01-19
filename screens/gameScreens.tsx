import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback , Keyboard} from 'react-native';
import { globalStyles } from '../styles/global';
import { useState, useEffect } from 'react';
import Reviews from '../components/reviews';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import MyForm from '../components/Myform';
import useFetch from '../api/useFetch';


// Define the structure of a review object
type Review = {
    id: string;
    title: string;
    body: string;
    rating: number;
  };
// to run the server npx json-server --watch data/db.json --port 8000
export default function Game({ navigation }: {navigation: any}) {

  
    let randomNumber = 20 +  Math.floor(50 * Math.random())

    const [target, setTarget] = useState(randomNumber)
      // State to track clicked items
  const [clickedIndices, setClickedIndices] = useState<number[]>([]);

  const [sum, setSum] = useState<number>(0)
    // State to hold six random numbers
  const [numbers, setNumbers] = useState<number[]>(
    Array.from({ length: 6 }, () => Math.floor(Math.random() * 29) + 1)
  );
  



   useEffect( () => {
        console.log(target,'from use effect')
   },[target])
        
   const pressHandler = () => {
    const newTarget = 10 + Math.floor(50 * Math.random()); // Generate a new target
    setTarget(newTarget); // Update target state
  
    let guaranteedSum: number[] = [];
    let remainingTarget = newTarget;
  
    // Step 1: Generate a valid combination that adds up to the target
    while (remainingTarget > 0) {
      const nextNumber = Math.min(
        Math.floor(Math.random() * remainingTarget) + 1,
        remainingTarget
      );
      guaranteedSum.push(nextNumber);
      remainingTarget -= nextNumber;
    }
  
    // Step 2: Fill remaining spots with random numbers if there are any slots left
    const remainingNumbers = Array.from({ length: 6 - guaranteedSum.length }, () =>
      Math.floor(20 * Math.random()) + 1
    );
  
    // Combine the valid numbers and the remaining random numbers
    const allNumbers = [...guaranteedSum, ...remainingNumbers];
  
    // Step 3: Shuffle the numbers so the valid combination isn't predictable
    for (let i = allNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
    }
  
    setNumbers(allNumbers); // Update numbers state
    setClickedIndices([]); // Clear clicked indices
    setSum(0)
  };
  
            
   const onNumberPress = (index: number, value: number) => {

    setClickedIndices((prev) =>
       { 
        let newIndices: number[] = []
        let newSum = sum;
        if(prev.includes(index)){
            // Remove the value from the sum if it was already clicked
            newSum -= value;

            prev.forEach(value => {
                if(value !== index){
                    newIndices.push(value)
                }
            });

        }
        else{
            // Add the value to the sum if it's clicked now
             newSum += value;
            newIndices = [...prev, index]
        }

        console.log(newIndices)
        // Update the sum state after modifying the clicked numbers
         setSum(newSum);

          // Check if the sum matches the target
            if (newSum === target) {
                // Here, you can perform actions like showing a win message or triggering a win event
                alert('You won! Target reached!');
                pressHandler();
            }
        return newIndices;
        //return prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index] 

       } 
      );


      

   }

   

  return (
    <View style={styles.container}>

        <View style = {styles.targetView}>
            <Text style ={styles.target} >  { target }  </Text>

            <TouchableOpacity style={styles.button} onPress={pressHandler}>

                <Text> ClickHere </Text>
                
            </TouchableOpacity>

            <Text style ={styles.sum} > Sum:  { sum }  </Text>
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
    justifyContent: 'space-around',
    marginBottom: 2,
  },
 target: {
    fontSize: 40,
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
    fontSize: 30,
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
    fontSize: 20,
    backgroundColor: '#aaa',
    marginHorizontal: 20,
    textAlign: 'center'
  }

});

