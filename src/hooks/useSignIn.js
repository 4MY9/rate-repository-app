import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    const authStorage = useAuthStorage()
    const [mutate, result] = useMutation(AUTHENTICATE);
    const apolloClient = useApolloClient();
  
    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
      const result = await mutate({ variables: { credentials: { username, password } } });
      const { data } = result;
      
      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore();
      return result
    };
    
    return [signIn, result];
  };


  export default useSignIn;