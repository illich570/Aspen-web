import { GraphQLClient } from 'graphql-request'

const GraphClient = new GraphQLClient(process.env.URL_GRAPHCMS, {
  headers: {
    authorization: `Bearer ${process.env.TOKEN_GRAPHCMS}`,
  },
})

export {
  GraphClient
}