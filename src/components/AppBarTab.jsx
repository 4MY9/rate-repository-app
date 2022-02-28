
import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

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
    backgroundColor: '#24292e'
  },
  innerText: {
    color: '#FFFFFF',
    
    
  }
});


const AppBarTab = () => {
    
  return <View style={styles.container}>
      <View style={styles.flexItemA}>
    <Link to="/">
      <Text style={styles.innerText}>Repositories</Text>
    </Link>
    </View>
    <View style={styles.flexItemA}>
        <Link to="/signin">
            <Text style={styles.innerText}>Sign in</Text></Link>
            </View>
            
            
        </View>
        
  };

export default AppBarTab;
