import gql from 'graphql-tag';

import { LAUNCH_TILE_DATA } from './fragments';

export const GET_LAUNCHES = gql`
  query launchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`;

export const GET_LAUNCH_DETAILS = gql`
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
      # isInCart @client
      site
      date
      rocket {
        type
      }
      ...LaunchTile
    }
  }
  ${LAUNCH_TILE_DATA}
`;

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;
