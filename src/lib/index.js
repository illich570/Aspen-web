import { GraphQLClient } from 'graphql-request'

const GraphClient = new GraphQLClient(process.env.NEXT_PUBLIC_URL_GRAPHCMS, {
	headers: {
		authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_GRAPHCMS}`,
	},
})

export { GraphClient }
