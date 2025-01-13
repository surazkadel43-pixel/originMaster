import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const EditDeleteExample = () => {
  const [modalVisible, setModalVisible] = useState(false);

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

