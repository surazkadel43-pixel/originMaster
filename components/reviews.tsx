import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

type Review = {
  id: string;
  title: string;
  body: string;
  rating: number;
};

export default function Reviews({ review, navigation, handleDelete }: { review: Review, navigation: any, handleDelete: (id: string) => void }) {
  // Handle press event (optional, e.g., navigation or interaction)
  const pressHandler = () => {
    navigation.navigate('ReviewDetails', { reviewData: review , handleDeleteFunc: handleDelete} )
  };

  return (
    <TouchableOpacity style={styles.container} onPress={pressHandler}>
      <View style={styles.reviewItem}>
        <Text style={styles.reviewTitle}>{review.title}</Text>
        <Text style={[globalStyles.textStyle]}>{review.body}</Text>
        <Text style={styles.rating}>Rating: {review.rating} / 5, key: {review.id}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    padding: 10,
    paddingBottom: 0,
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
    fontSize: 14,
    color: 'gray',
  },
});
