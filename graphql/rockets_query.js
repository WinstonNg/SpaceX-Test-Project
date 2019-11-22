import gql from 'graphql-tag';

const ROCKETS_QUERY = gql`
  query Rockets {
    rockets {
      name
      country
      type
    }
  }
`;

export default ROCKETS_QUERY;