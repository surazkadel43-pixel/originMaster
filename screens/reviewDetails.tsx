import { StyleSheet, Text, View, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard,   } from 'react-native';
import { globalStyles } from '../styles/global';
import CardReviews from '../commonFiles/card';
import { Button } from 'react-native';
import { Alert } from 'react-native';
import { useState } from 'react';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import EditForm from '../components/Myform copy';
// Define the structure of a review object
type Review = {
    id: string;
    title: string;
    body: string;
    rating: number;
  };
export default function ReviewDetails({ route, navigation,  }: { route: any | undefined, navigation: any }) {
   
  const[ modalOpen, setModalOpen] = useState(false)

  // Check if route.params exists and has reviewData
  let reviewData: Review = route?.params?.reviewData;
  let handleDeleteFunc: (id: string) => void = route?.params?.handleDeleteFunc;
  let handleEdit: (id: string, title: string, body: string, rating: number) => void = route?.params?.handelEditFunc;

  if(!reviewData){
    reviewData = { id: '', title: '', body: '', rating: 0}
    
  }
  
 

  // Delete handler: Show confirmation and perform deletion
  const handleDelete = (id: string) => {
    Alert.alert(
      'Delete Review',
      'Are you sure you want to delete this review?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => deleteReview(id) },
      ]
    );
   
  };
  // Function to delete the review (placeholder for your deletion logic)
  const deleteReview = (id: string) => {
    
    handleDeleteFunc(id)
    console.log('Review deleted:', reviewData.id);
    navigation.goBack(); // Go back to the previous screen after deletion
  };

  return (
    <View >
      
      <Modal visible= {modalOpen} animationType='slide'>
        
        <TouchableWithoutFeedback
                onPress={() => {
                  console.log('keybord  dismissed')
                  Keyboard.dismiss()
              }}
          >
            <View style={globalStyles.container}>
                <MaterialIcons 
                    name= 'close'
                    size={40}
                    onPress={() => setModalOpen(false)}
                  />
                  { <EditForm editReviews = {handleEdit} givenReviews= {reviewData} />  }
                  
            </View>
        </TouchableWithoutFeedback>  
      </Modal>

      <CardReviews review={reviewData} />

        {/* Edit and Delete Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setModalOpen(true)} style={[styles.button, styles.editButton]}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <View style={{ marginVertical: 8 }} />
        <TouchableOpacity onPress={() => handleDelete(reviewData.id)} style={[styles.button, styles.deleteButton]}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
  },
  editButton: {
    backgroundColor: '#4CAF50',
  },
  deleteButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
