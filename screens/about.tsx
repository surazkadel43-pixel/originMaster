import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import DropDownPicker from 'react-native-dropdown-picker';
import React,{useState} from 'react';


export default function About({ navigation }: {navigation: any}) {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState([
   
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
    { label: 'Others', value: 'O' },
  ]);

    const pressHandler = () => {
        //navigation.navigate('About')
        //navigation.push('ReviewDetails')
        //navigation.goBack()
        navigation.navigate('EditDeleteExample');
        
    }

  return (
    <View style={styles.container}>
      <Text>Select an Option:</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select an option"
        style= {styles.dropDown}
      />
      <Text>You selected: {value}</Text>
      <Text style= {[  globalStyles.textStyle]} >About Screens </Text>
      <Button
            title= 'go to about'
            onPress={pressHandler}
             />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    
    alignItems: 'center',
 
   
  },
  dropDown: {
    alignItems: 'center',
    
    alignSelf: 'stretch',
    //width: '50%',
  }
});