import { gql } from '@apollo/client';


export const GET_REPOSITORIES = gql`
query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $after: String
  $first: Int) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, after: $after
    first: $first) {
      edges {
        node {
          id
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          ownerAvatarUrl
          description
          language
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;




export const GET_REPOSITORY = gql`
query Repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id)  {
        id
        fullName
        url
        ratingAverage
        reviewCount
        stargazersCount
        forksCount
        ownerAvatarUrl
        description
        language
        reviews(first: $first, after: $after) {
            edges {
              node {
                id
                text
                rating
                createdAt
                user {
                  id
                  username
                }
              }
              cursor
            }
            pageInfo {
              endCursor
              startCursor
              hasNextPage
            }
          }
        }
      }
`;

export const ME = gql`
  query me($includeReviews: Boolean = false) {
    me {
      username
      id
    reviews @include(if: $includeReviews) {
      edges {
        node {
          repository {
            id
            fullName
          }
          id
          text
          rating
          createdAt
          user {
            username
            id
          }
        }
      }
    }
  }
}
`;


