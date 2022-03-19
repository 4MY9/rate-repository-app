import { Pressable, View } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import {  StyleSheet, Dimensions } from 'react-native';

const SignUpForm = ({ onSubmit }) => {
    
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
        <FormikTextInput name="username" placeholder="Username" />
        </View>
        <View style={styles.fields}>
        <FormikTextInput secureTextEntry={true} name="password" placeholder="Password" />
        </View>
        <View style={styles.fields}>
        <FormikTextInput secureTextEntry={true} name="passwordConfirm" placeholder="Password confirmation" />
        </View>
        <View style={styles.button}>
        <Pressable onPress={onSubmit}>
          <Text style={[{ color: "white", textAlign:'center' }]}>Sign Up</Text>
        </Pressable>
        </View>
        </View>
      </View>
    );
  };


export default SignUpForm;