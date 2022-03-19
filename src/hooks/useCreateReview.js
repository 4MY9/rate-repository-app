import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';


const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);
  
    const createReview = async ({ repositoryName, ownerName, rating, text }) => {
      
      console.log(repositoryName, ownerName, rating, text)
      // call the mutate function here with the right arguments
      const result = await mutate({ variables: { review: { repositoryName, ownerName, rating: parseInt(rating), text } } });
      
      console.log(result)
      return result
    };
    
    return [createReview, result];
  };


  export default useCreateReview;