import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';


const useSignUp = () => {
    const [mutate, result] = useMutation(CREATE_USER);
  
    const createUser = async ({ username, password }) => {
      
      console.log()
      // call the mutate function here with the right arguments
      const result = await mutate({ variables: { user: { username, password } }});
      console.log(result)
      return result
    };
    
    return [createUser, result];
  };


  export default useSignUp;