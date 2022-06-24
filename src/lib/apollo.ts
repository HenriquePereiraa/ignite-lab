import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4pfyeox1syv01z43dbt69u2/master',
    cache: new InMemoryCache()
})