import ReviewForm from './ReviewForm';
import { Formik } from 'formik';
import * as yup from 'yup';
import useCreateReview from '../hooks/useCreateReview';
import { useNavigate } from "react-router-native";


const Review = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();
  const onSubmit = async (values) => {

    const { repositoryName, ownerName, rating, text } = values;
    try {
      const { data } = await createReview({ repositoryName, ownerName, rating, text });
      const id = data ? data.createReview.repositoryId : null;
      navigate(`/repositories/${id}`)
    } 
    catch (e) {
      console.log(e);
    }
  };

  const initialValues = {
    repositoryName: '',
    ownerName: '',
    rating: '',
    text: '',
  };

  const validationSchema = yup.object().shape({
    repositoryName: yup
      .string()
      .required('Repository name is required'),
    ownerName: yup
      .string()
      .required('Repository owner name is required'),
    rating: yup
      .number()
      .required('Rating is required'),
    text: yup
      .string()
      .optional()
  });
  

    
  return <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
  {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
</Formik>
};

export default Review;