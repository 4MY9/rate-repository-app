
import { useContext } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useQuery, useApolloClient } from '@apollo/client';
import { ME } from '../graphql/queries';

import React from "react";
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    flexDirection: 'row',
    
  },
  flexItemA: {
    padding: 20,
    backgroundColor: '#24292e',

  },
  innerText: {
    color: '#FFFFFF',
    
    
  }
});

const AppBarTab = () => {
  const authStorage = useContext(AuthStorageContext)
  const token = authStorage.getAccessToken()
  const apolloClient = useApolloClient();
  console.log(token)
  const { data } = useQuery(ME,  {
    fetchPolicy: 'cache-and-network',

  })
  const currentUser = data ? data.me : null;
  console.log('User', currentUser);
  
  const onPressFunction = () => {
    authStorage.removeAccessToken()
    apolloClient.resetStore();
  }
  
  const signing = () =>{
    if (currentUser === null){
      return <><View style={styles.flexItemA}>
        <Link to="/signin">
          <Text style={styles.innerText}>Sign in</Text></Link>
      </View><View style={styles.flexItemA}>
          <Link to="/signup">
            <Text style={styles.innerText}>Sign up</Text></Link>
        </View></>
    }
    return <><View style={styles.flexItemA}>
      <Link to="/review">
        <Text style={styles.innerText}>Create a review</Text></Link>
    </View>
    <View style={styles.flexItemA}>
      <Link to="/myreviews">
        <Text style={styles.innerText}>My reviews</Text></Link>
    </View>
    <View style={styles.flexItemA}>
        <Pressable onPress={onPressFunction}><Text style={styles.innerText}>Sign out</Text></Pressable>
      </View></>
      
         
         
        
  }
    
  return <View style={styles.container}>
      <View style={styles.flexItemA}>
    <Link to="/">
      <Text style={styles.innerText}>Repositories</Text>
    </Link>
    </View>
      {signing()}
        </View>
  };

export default AppBarTab;
