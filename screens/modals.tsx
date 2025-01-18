import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Button, ActivityIndicator, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';


const EditDeleteExample = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

    const increaseProgress = () => {
        setProgress((prev) => (prev + 0.1 > 1 ? 0 : prev + 0.1));
        setLoading((prev) => !prev);
    };
  const handleEdit = () => {
    // Handle Edit action
    console.log("Edit clicked");
    setModalVisible(false);
  };

  const handleDelete = () => {
    // Handle Delete action
    console.log("Delete clicked");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>

            {/* Circular Progress */}
            <Progress.Circle 
                size={100} 
                progress={progress} 
                showsText={true} 
                color="blue" 
            />

            {/* Linear Progress */}
            <Progress.Bar 
                progress={progress} 
                width={200} 
                color="green" 
                style={{margin: 10}}
            />
            {/* Display the ActivityIndicator */}
            {loading && <ActivityIndicator size="large" color="green" />}

            <Button title="Increase Progress" onPress={increaseProgress} />

      <TouchableOpacity
        style={styles.threeDotButton}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.threeDotText}>...</Text>
      </TouchableOpacity>

      
      {modalVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity
            style={styles.option}
            onPress={handleEdit}
          >
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.option}
            onPress={handleDelete}
          >
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  threeDotButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  threeDotText: {
    color: 'white',
    fontSize: 20,
  },
  dropdown: {
    position: 'absolute',
    top: 50, // Adjust based on your button position
    right: 20, // Adjust based on your button position
    backgroundColor: 'white',
    borderRadius: 21,
    borderWidth: 3,
    borderColor: '#ddd',
    zIndex: 1,
  },
  option: {
    padding: 10,
    width: 150,
  },
  editText: {
    color: 'blue',
    textAlign: 'center',
    borderBottomWidth: 1
  },
  deleteText: {
    color: 'red',
    textAlign: 'center',
    borderBottomWidth: 1
  },
});

export default EditDeleteExample;

