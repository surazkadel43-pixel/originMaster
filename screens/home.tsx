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
export default function Home({ navigation }: {navigation: any}) {

  //const {reviews, isPending, error} = useFetch("http://10.0.2.2:8000/reviews");

  let Reriews = [
    {
      id: '1',
      title: 'Great Product!',
      body: 'I really enjoyed using this product. It met all my expectations.',
      rating: 5,
    },
    {
      id: '2',
      title: 'Not bad, could improve',
      body: 'The product works fine, but the design could be better.',
      rating: 3,
    },
    {
      id: '3',
      title: 'Amazing experience!',
      body: 'This product exceeded my expectations! Highly recommend it to others.',
      rating: 5,
    },
    {
      id: '4',
      title: 'Okay for the price',
      body: 'It’s good for the price, but there are better options out there.',
      rating: 3,
    },
    {
      id: '5',
      title: 'Terrible quality',
      body: 'The product broke within a week. Really disappointing.',
      rating: 1,
    },
    {
      id: '6',
      title: 'Excellent Value',
      body: 'For the price, this product delivers excellent value.',
      rating: 4,
    },
    {
      id: '7',
      title: 'Would buy again',
      body: 'Loved it! I would definitely buy this product again.',
      rating: 5,
    },
    {
      id: '8',
      title: 'Too expensive',
      body: 'The product works well, but it’s way overpriced.',
      rating: 2,
    },
    {
      id: '9',
      title: 'Just average',
      body: 'There’s nothing special about this product. It does the job.',
      rating: 3,
    },
    {
      id: '10',
      title: 'Highly recommended!',
      body: 'Amazing performance and quality. Would recommend to everyone.',
      rating: 5,
    },
    {
      id: '11',
      title: 'Not worth it',
      body: 'I regret buying this. It doesn’t live up to the description.',
      rating: 1,
    },
    {
      id: '12',
      title: 'Good for beginners',
      body: 'This is a great option for beginners. Simple and easy to use.',
      rating: 4,
    },
    {
      id: '13',
      title: 'Exceeded expectations',
      body: 'This product is even better than I expected. Truly great.',
      rating: 5,
    },
    {
      id: '14',
      title: 'Average performance',
      body: 'It performs okay, but there are better alternatives available.',
      rating: 3,
    },
    {
      id: '15',
      title: 'Durable and reliable',
      body: 'This product is very durable and works perfectly.',
      rating: 5,
    },
    {
      id: '16',
      title: 'Low quality materials',
      body: 'The materials feel cheap and low quality.',
      rating: 2,
    },
    {
      id: '17',
      title: 'Great for the price',
      body: 'Excellent performance at this price point.',
      rating: 4,
    },
    {
      id: '18',
      title: 'Perfect gift!',
      body: 'I bought this as a gift and the recipient loved it!',
      rating: 5,
    },
    {
      id: '19',
      title: 'Not user-friendly',
      body: 'The instructions were unclear and difficult to follow.',
      rating: 2,
    },
    {
      id: '20',
      title: 'Fantastic support',
      body: 'The customer support team was very helpful and resolved my issue.',
      rating: 5,
    },
  ];
    //Initialize the reviews state with an array of review objects
    const [reviews, setReviews] = useState<Review[]>([]);
    const[isPending, setIsPending] = useState(true)
    const[name, setName] = useState('suraj')
    const[ modalOpen, setModalOpen] = useState(false)
    const [error, setError] = useState(null)

    const newPromise = new Promise((resolve, reject) => {

    });
   
    const pathFolder = '../data/db';
      useEffect(() =>
        {
          
          setTimeout(() => 
            {
              console.log(name)
              fetch('http://10.0.2.2:3000/reviews').then(res => { 
              
                  if(!res.ok){
                    throw new Error(`HTTP error! Status: ${res.status}`);
                  }
                        return res.json()}).then((data) => 
                      {
                    // console.log(data)
                    console.log('i am inside data')
                    setReviews(data)
                    setIsPending(false)  
                    setError(null)
                  }).catch(err => {
                    setError(err.message)
                    setIsPending(false)
                    console.log(err.message)
                  })
            }, 1000);

            
        },[]);

      const addReviews = (title: string, body: string, rating: number) => {
        console.log(reviews.length)

        const lastId = reviews.length > 0 ? parseInt(reviews[reviews.length - 1].id, 10) : 0;
        const newId = (lastId + 1).toString();
          let userReviews: Review = {
            id: newId,
            title: title,
            body: body,
            rating: rating || 0
          }
          console.log(userReviews)
          setReviews((initialValues) => {
          let newReviews: Review[] = [...initialValues]
          newReviews.push(userReviews)
         
          return [userReviews, ...initialValues];
        });
        
      }
      const handleDelete = (id: string) => {
        setReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));
      };
      
      const editReviews = (id: string, title: string, body: string, rating: number) => {
        setReviews((prevReviews) =>
          prevReviews.map((review) =>
            review.id === id ? { ...review, title, body, rating } : review
             
          )
          
        );

        navigation.goBack();
      };
      
      // const getReviews = async () => {

        
      //   const  response = await fetch('http://10.0.2.2:8000/reviews')
        
      //   if(response.status !== 200){
      //     throw new Error(`HTTP error! Status: ${response.status}`)
      //   }
      //   const data = await response.json()
      //   return data;
      // }

      // const allReviews = getReviews()
      //     .then((data) => {
      //        setReviews(data)
      //        setIsPending(false)  
      //        setError(null)  })
      //     .catch((error) => { 
      //        setError(error)
      //        setIsPending(false)})
             
      //console.log(allReviews)


  return (
    <View style={styles.container}>

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
                  <MyForm addReviews = {addReviews}
                  />
            </View>
        </TouchableWithoutFeedback>  
      </Modal>
       <MaterialIcons
              style={styles.Addicon}
              name='add'
              size={40}
              onPress={() => {
                  setModalOpen(true)
                  setName('ninja')
              }}
       />
       {error && 
        <Text style ={globalStyles.errorText}> {error}</Text>
        }
       {isPending && <View> 
        <Text style ={globalStyles.errorText}> Loading.....</Text>
       </View> }
       
       {reviews && 
       <FlatList
       keyExtractor={(item) => item.id}
       data = {reviews}
       renderItem={({ item}) =>
         
         <Reviews 
         review= {item}
         navigation = {navigation}
         handleDelete = {handleDelete}
         handleEdit = {editReviews }
         />
       }
       />
       }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  textStyle: {
    fontFamily: 'roboto-regular'
  },
  Addicon: {
    position: 'absolute',
    top: -50,
    right: 20,
    zIndex: 1,
}
});

