
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { format, parseISO } from 'date-fns'


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
        marginTop: 5,
        marginRight: 10,
        paddingVertical: 15,
        borderWidth: 2,
        borderColor: "blue",
        borderRadius: 60/2,
        
        color: "#20232a",
        textAlign: "center",
      
        fontWeight: "bold",
        height: 60,
        width: 60
      
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
    
    languageContainer: {
      marginTop: 10,
      flexDirection: 'row',
    },
    languageText: {
      borderRadius: theme.roundness,
      flexGrow: 0,
      paddingVertical: 2,
      paddingHorizontal: 6,
      color: "black"
    },
  });

const ReviewItem = ({ review }) => {
  
  const date = format(parseISO(review.createdAt), 'dd.MM.yyyy')
    

        return (
            <View style={styles.container}>
              <View style={styles.topContainer}>
                <View style={styles.avatarContainer}>
                  <Text style={[{ fontSize:20, color: "blue", fontWeight: "bold", textAlign: 'center' }]}>{review.rating}</Text> 
                </View>
                <View style={styles.contentContainer}>
                  <Text
                    style={styles.nameText}
                    fontWeight="bold"
                    fontSize="subheading"
                    numberOfLines={1}
                  >
                    {review.user.username}
                  </Text>
                  <Text style={styles.descriptionText} color="textSecondary">
                    {date}
                  </Text>
                  <View style={styles.languageContainer}>
                <Text style={styles.languageText}>{review.text}</Text>
                </View>
                </View>
              </View>
              <View style={styles.bottomContainer}>
              </View>
            </View>
          );

                  }
export default ReviewItem;