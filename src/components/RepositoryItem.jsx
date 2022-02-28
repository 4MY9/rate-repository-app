
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from './Text';

const cardHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20 / 2,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
  },
});

const CardHeader = ({item}) => {
  return (
    <View style={cardHeaderStyles.container}>
      <View style={cardHeaderStyles.avatarContainer}>
      <Image style={cardHeaderStyles.avatar} source={{uri:item.ownerAvatarUrl}} />
      </View>
      <View style={cardHeaderStyles.infoContainer}>
        <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
        <Text color="textSecondary" >{item.description}</Text>
        <Text style={{padding: 5, backgroundColor: '#0366d6', alignSelf: 'flex-start', color: 'white', borderRadius: 10 / 2}} >{item.language}</Text>
      </View>
    </View>
  );
};

const cardFooterStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-evenly',
    textAlign: 'left',
    marginLeft: -1,
  },
});

const cardFooterStyles2 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-evenly',
    textAlign: 'left',
    marginLeft: 20,
  },
});

const CardFooter = ({item}) => {
  
  const numberWithCommas = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }
  
  return (
    <View style={cardFooterStyles.container}>
      <Text fontWeight="bold" fontSize="subheading">{numberWithCommas(item.stargazersCount)}</Text>
      <Text fontWeight="bold" fontSize="subheading">{numberWithCommas(item.forksCount)}</Text>
      <Text fontWeight="bold" fontSize="subheading">{numberWithCommas(item.reviewCount)}</Text>
      <Text fontWeight="bold" fontSize="subheading">{numberWithCommas(item.ratingAverage)}</Text>
    </View>
    
  );
};
const TextFooter = () => {
  return (
    <View style={cardFooterStyles2.container}>
      <Text color="textSecondary">Stars</Text>
      <Text color="textSecondary">Forks</Text>
      <Text color="textSecondary">Reviews</Text>
      <Text color="textSecondary">Rating</Text>
      </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    padding: 10, 
    flex: 1,
    borderBottomColor: '#e1e4e8',
    borderBottomWidth: 10,
  }
});

const RepositoryItem = ({item}) => {
  return (
    <View style={cardStyles.container}>
      
      <CardHeader item={item}/>
      <CardFooter item={item}/>
      <TextFooter item={item}/>
    </View>
  );
};

export default RepositoryItem;
