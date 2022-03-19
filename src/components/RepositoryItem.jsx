import React from 'react';
import { View, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
import * as Linking from 'expo-linking';
import theme from '../theme';


import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatarContainer: {
    flexGrow: 0,
    marginRight: 20,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  nameText: {
    marginBottom: 5,
  },
  descriptionText: {
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 20 / 2,
  },
  
  languageContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  languageText: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 10 / 2,
  },
  button: {
    padding: 15, 
    backgroundColor: '#0366d6', 
    alignSelf: 'center', 
    borderRadius: 10 / 2,
    width: Dimensions.get('window').width -50,
    textAlign: 'center',
    marginTop: 5
  }
});

const UrlButton = (url) => {

  return(
  <View style={styles.button}>
  <Pressable onPress={() => Linking.openURL(url.url)}><Text style={[{ color: "white", textAlign:'center' }]}>Open in Github</Text></Pressable>
  </View>
  )
};

const Numbers = ({item}) => {
  
  const numberWithCommas = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }
  return (
    <View style={styles.bottomContainer}>
      <Text fontWeight="bold" fontSize="subheading">{numberWithCommas(item.stargazersCount)}</Text>
      <Text fontWeight="bold" fontSize="subheading">{numberWithCommas(item.forksCount)}</Text>
      <Text fontWeight="bold" fontSize="subheading">{numberWithCommas(item.reviewCount)}</Text>
      <Text fontWeight="bold" fontSize="subheading">{numberWithCommas(item.ratingAverage)}</Text>
    </View>
  )
  }

const RepositoryItem = ({item}) => {
  if (item.url){
    console.log(item.url)
  }
  
    return(
      <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        </View>
        <View style={styles.contentContainer}>
          <Text
            style={styles.nameText}
            fontWeight="bold"
            fontSize="subheading"
            numberOfLines={1}
          >
            {item.fullName}
          </Text>
          <Text style={styles.descriptionText} color="textSecondary">
            {item.description}
          </Text>
          {item.language ? (
            <View style={styles.languageContainer}>
              <Text style={styles.languageText}>{item.language}</Text>
            </View>
          ) : null}
          <Numbers item={item}/>
          <View style={styles.bottomContainer}>
          <Text color="textSecondary">Stars</Text>
          <Text color="textSecondary">Forks</Text>
          <Text color="textSecondary">Reviews</Text>
          <Text color="textSecondary">Rating</Text>
      </View>
      {item.url ? (
            
            <UrlButton item={item}/>
          
          ) : null}
        
        </View>
      </View>
      </View>
          
        
    );
};



export default RepositoryItem;
