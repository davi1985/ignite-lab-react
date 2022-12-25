import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl4otx5u011zh01xs54cv9qzc/master',
  cache: new InMemoryCache(),
});
