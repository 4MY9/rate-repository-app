
import React from 'react';
import { View, FlatList, StyleSheet, Pressable, Alert } from 'react-native';
import theme from '../theme';
import Text from './Text';
import { format, parseISO } from 'date-fns'

import { useQuery, useMutation } from '@apollo/client';
import { ME } from "../graphql/queries";
import { DELETE_REVIEW } from "../graphql/mutations";
import { useNavigate  } from "react-router-native";

const styles = StyleSheet.create({
    separator: {
    height: 10,
    },
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
      padding: 15
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
    button: {
        padding: 20, 
        backgroundColor: '#0366d6', 

        borderRadius: 10 / 2,
        
        textAlign: 'center',
      },
    button2: {
        padding: 20, 
        backgroundColor: 'red', 
        borderRadius: 10 / 2,
        
        textAlign: 'center',
      },
  });



const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
    const { data, loading, error } = useQuery(ME, {
        variables: { includeReviews: true },
        fetchPolicy: "cache-and-network",
      });
    
    
    if (loading) {
     return <Text>Loading ...</Text>;
    }
    if (error) {
      return <Text>error</Text>
    }

    const reviewsNodes = data
    ? data.me.reviews.edges.map((edge) => edge.node)
    : [];



     
 const MyReviewItem = ({ review }) => {

    const navigate = useNavigate();
    const [mutate] = useMutation(DELETE_REVIEW,{
        refetchQueries: [{ query: ME }]
       });
     const date = format(parseISO(review.createdAt), 'dd.MM.yyyy')
      const id = review.id
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
                {review.repository.fullName}
                {review.repository.id}
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
          
          <View style={styles.button}>
          <Pressable onPress={() => navigate(`/repositories/${review.repository.id}`)}>
          <Text style={[{ color: "white",  fontWeight: "bold" }]}>View repository</Text>
              </Pressable>
              </View>
          <View style={styles.button2}>
          <Pressable onPress={() => {
            Alert.alert(
              "Delete review",
              "Are you sure you want to delete this review?",
              [
                {
                  text: "Cancel"
                },
                { text: "DELETE", onPress: () => mutate({variables: {deleteReviewId: id}} ) }
              ]
            );
          }}>
          <Text style={[{ color: "white",  fontWeight: "bold" }]}>Delete review</Text>
              </Pressable>
              </View>
        </View>
        </View>
        );
      };
 
    return (
        <FlatList
        data={reviewsNodes}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <MyReviewItem review={item} />}
        ItemSeparatorComponent={ItemSeparator} 
        
        />
    );
    
}
export default MyReviews;
