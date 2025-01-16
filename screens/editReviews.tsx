import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import CardReviews from '../commonFiles/card';
// Define the structure of a review object
type Review = {
    id: string;
    title: string;
    body: string;
    rating: number;
  };
export default function ReviewDetails({ route, navigation }: { route: any | undefined, navigation: any }) {
   
  // Check if route.params exists and has reviewData
  let reviewData: Review = route?.params?.reviewData;

  if(!reviewData){
    reviewData = { id: '', title: '', body: '', rating: 0}
    
  }
  

  return (
    <CardReviews review ={ reviewData } />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
