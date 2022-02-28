import { StyleSheet, Dimensions } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: '#d73a4a',
  },
  fields: {
    marginTop:5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#24292e',
    padding: 10,
    borderRadius: 10 / 2,
    width: Dimensions.get('window').width -50,
    alignSelf: 'center', 
    },
    error: {
    marginTop:5,
    marginBottom: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: '#d73a4a',
    borderRadius: 10 / 2,
    width: Dimensions.get('window').width -50,
    },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  
  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        style={showError ? styles.error : styles.fields}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;