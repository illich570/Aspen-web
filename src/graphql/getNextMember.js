const getNextTeamMember = `
query TeamMember($order: Int!){
  teamMembers(first: 1, skip: $order, orderBy: order_ASC){
    slug
  }
}`

export default getNextTeamMember
