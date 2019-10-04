import ApolloClient, { gql } from 'apollo-boost';

export const client = new ApolloClient({ uri: 'http://localhost:4000' });

export const LAUNCHES = gql`
  query launchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        id
        isBooked
        rocket {
          id
          name
        }
        mission {
          name
          missionPatch
        }
      }
    }
  }
`;
