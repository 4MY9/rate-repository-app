
import SignInForm from './SignInForm';
import { Formik } from 'formik';
import * as yup from 'yup';

const SignIn = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required'),
  });
  

    
  return <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
  {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
</Formik>
};

export default SignIn;
