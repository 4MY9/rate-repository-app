import { useQuery,  } from '@apollo/client';
import { useParams } from 'react-router-native';

import { GET_REPOSITORY } from '../graphql/queries';

const useSingleRepository = () => {
  const { id } = useParams()
  console.log(id)
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
    variables: { id: id }},
    {fetchPolicy: 'cache-and-network'}); 

    const handleFetchMore = () => {
      const canFetchMore =
        !loading && data?.repository.reviews.pageInfo.hasNextPage;
  
      if (!canFetchMore) {
        return;
      }
  
      fetchMore({
        variables: {
          after: data.repository.reviews.pageInfo.endCursor,
          ...{variables: { id: id }}
        }
      });
    };
  
    return {
      repository: data?.repository,
      fetchMore: handleFetchMore,
      loading,
      ...result
    };
};

export default useSingleRepository;


