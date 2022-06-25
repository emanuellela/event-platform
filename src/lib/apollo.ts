import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4tfppsl02po01uofoe4286l/master',
    cache: new InMemoryCache()
  })
