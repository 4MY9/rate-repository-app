//import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  }); 

  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>error</p>
  }
  return data;
};

export default useRepositories;