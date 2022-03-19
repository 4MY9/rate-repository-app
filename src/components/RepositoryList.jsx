import useRepositories from '../hooks/useRepositories';
import { useState } from "react";
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RepositoryItem from './RepositoryItem';
import { useNavigate  } from "react-router-native";
import { Picker } from '@react-native-picker/picker';
import { useDebounce } from 'use-debounce';

import theme from '../theme';



const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    height: 60, 
    backgroundColor: theme.colors.mainBackground, 
    padding: 20
    },
  });

  const RepositoryHeader = ({ selectedOrder, setSelectedOrder, searchQuery, setSearchQuery}) => {

    const onChangeSearch = query => setSearchQuery(query);

    return (
      <><Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery} /><Picker
          selectedValue={selectedOrder}
          style={{ height: 60, backgroundColor: theme.colors.mainBackground, padding: 20 }}
          // eslint-disable-next-line no-unused-vars
          onValueChange={(itemValue, itemIndex) => setSelectedOrder(itemValue)}>
          <Picker.Item label="Latest repositories" value="CREATED_AT DESC" />
          <Picker.Item label="Lowest rated" value="RATING_AVERAGE ASC" />
          <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE DESC" />
        </Picker></>
      );
    };

const ItemSeparator = () => <View style={styles.separator} />;


const RepositoryListContainer = ({ repositories, selectedOrder, setSelectedOrder, searchQuery, setSearchQuery, onEndReach,}) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories
  ? repositories.edges.map((edge) => edge.node)
  : [];


  return (
    <FlatList
        data={repositoryNodes}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={<RepositoryHeader searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder}/>}
        renderItem={({ item }) => <Pressable onPress={() => navigate(`repositories/${item.id}`)}><RepositoryItem item={item} /></Pressable>}
        ItemSeparatorComponent={ItemSeparator} 
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        />
        
        );
      
    }



const RepositoryList = () => {
  
  const [ selectedOrder, setSelectedOrder ] = useState("CREATED_AT DESC");

  const [searchQuery, setSearchQuery] = useState("");
  const [searchValue] = useDebounce(searchQuery, 500)
  
  let parameterArray = selectedOrder.split(" ");
  
  
  let parameters = {
    orderBy: parameterArray[0],
    orderDirection: parameterArray[1],
    searchKeyword: searchValue,
    first: 8
  }

  const { repositories, fetchMore } = useRepositories(parameters);

  const onEndReach = () => {
    fetchMore();
  };

    return <RepositoryListContainer 
      repositories={repositories}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onEndReach={onEndReach}
       />;
  
};

export default RepositoryList;