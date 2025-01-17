import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as  yup from 'yup';

 const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(10),
  rating: yup.string().required().min(1).test('isNum1-5', 'Rating must be a number 1-5', (val)=> {
    return parseInt(val) < 6 && parseInt(val) > 0;
  })
 })

 
// Define the structure of a review object
type Review = {
    id: string;
    title: string;
    body: string;
    rating: number;
  };

export default function EditForm({editReviews, givenReviews, } : {editReviews: (id: string, title: string, body: string, rating: number) => void , givenReviews: Review,} ) {
  

  return (
    
        <View style= {globalStyles.container}>
            <Formik 
                initialValues={{title: givenReviews.title, rating: givenReviews.rating.toString(), body: givenReviews.body}}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions) => {
                    console.log(values)
                    console.log('values')
                    editReviews(givenReviews.id, values.title, values.body, parseInt(values.rating)) 
                    
                    
                    
                }}
            >
                {(props) => {
                    return(
                            <View  >
                                <TextInput
                                
                                style= {globalStyles.input}
                                placeholder=' Review Title'
                                onChangeText={props.handleChange('title')}
                                value= {props.values.title}
                                onBlur={props.handleBlur('title')}
                                />
                                <Text style = {globalStyles.errorText}> {props.touched.title && props.errors.title}</Text>

                                <TextInput
                                multiline  
                                style= {globalStyles.input}
                               
                                placeholder=' Review Body'
                                onChangeText={props.handleChange('body')}
                                value= {props.values.body}
                                onBlur={props.handleBlur('body')}
                                />
                                <Text style = {globalStyles.errorText}> {props.touched.body && props.errors.body}</Text>
                                <TextInput
                                style= {globalStyles.input}
                                placeholder=' Review Rating'
                                onChangeText={props.handleChange('rating')}
                                value= {props.values.rating}
                                keyboardType='numeric'
                                onBlur={props.handleBlur('rating')}
                                />
                                <Text style = {globalStyles.errorText}> {props.touched.rating && props.errors.rating}</Text>

                                <TouchableOpacity
                                                style={globalStyles.button}
                                                onPress={() => props.handleSubmit()}
                                            >
                                                <Text style={globalStyles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                                                                
                            </View>
                        
                    )
                }}

            </Formik>
        </View>
    
  );
}
const styles = StyleSheet.create({
    
})