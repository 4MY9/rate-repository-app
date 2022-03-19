import { Pressable, View } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import {  StyleSheet, Dimensions } from 'react-native';

const ReviewForm = ({ onSubmit }) => {
    
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#e1e4e8',
      
    },
    container2: {
      backgroundColor: 'white',
      padding: 10,
    },
    
    button: {
      padding: 15, 
      backgroundColor: '#0366d6', 
      alignSelf: 'center', 
      borderRadius: 10 / 2,
      width: Dimensions.get('window').width -50,
      textAlign: 'center',
    }
    })
    return (
      <View style={styles.container}>
          <View style={styles.container2}>
          <View style={styles.fields}>
        <FormikTextInput name="repositoryName" placeholder="Repository name" />
        </View>
        <View style={styles.fields}>
        <FormikTextInput name="ownerName" placeholder="Repository owner name" />
        </View>
        <View style={styles.fields}>
        <FormikTextInput name="rating" type="number" placeholder="Rating between 0 and 100" />
        </View>
        <View style={styles.fields}>
        <FormikTextInput name="text" placeholder="Review" />
        </View>
        <View style={styles.button}>
        <Pressable onPress={onSubmit}>
          <Text style={[{ color: "white", textAlign:'center' }]}>Create a review</Text>
        </Pressable>
        </View>
        </View>
      </View>
    );
  };


export default ReviewForm;