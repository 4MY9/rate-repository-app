import useSingleRepository from '../hooks/useSingleRepository';
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryView = () => {
 
    const { repository, fetchMore, loading, error } = useSingleRepository();
    const currentRepo = repository ? repository : null;
    const reviews = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];
    console.log(currentRepo)
    if (loading) {
      return <Text>Loading ...</Text>;
     }
     if (error) {
       return <Text>error</Text>
     }
    if (repository){
    return (
      <View >
       <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryItem item={currentRepo} />}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={() => fetchMore()}
        onEndReachedThreshold={0.5}
    />
      </View>
    );
    }
    
  };
  
  export default RepositoryView;
