import SignUpForm from './SignUpForm';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from "react-router-native";

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    
    const { username, password } = values;
    try {
      const { data } = await signUp({ username, password });
      console.log(data);
      const { data2 } = await signIn({ username, password });
      console.log(data2)
      navigate("/");
    } 
    catch (e) {
      console.log(e);
    }
  };

  const initialValues = {
    username: '',
    password: '',
    passwordConfirm:''
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .required('Password confirm is required')
  });
  

    
  return <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
  {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
</Formik>
};

export default SignUp;