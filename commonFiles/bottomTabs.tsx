import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

type Review = {
  id: string;
  title: string;
  body: string;
  rating: number;
};

export default function CardReviews({ review, navigation }: { review: Review, navigation?: any }) {
  
  if(!review){
    review = { id: '', title: '', body: '', rating: 0}
  }

  return (
    <View style={styles.container}>
      <View style={styles.reviewItem}>
        <Text style={styles.reviewTitle}>{review.title}</Text>
        <Text style={[globalStyles.textStyle]}>{review.body}</Text>
        <Text style={styles.rating}>Rating: {review.rating} / 5</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  reviewItem: {
    padding: 10,
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    fontSize: 19,
    color: 'gray',
  },
  newCss: {
    color: 'red',
  }
});
