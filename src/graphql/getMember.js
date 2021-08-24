const getArticle = `
query TeamMember($memberId: Int!, $count : Int!){
  teamMember: teamMembers(first: 1, skip: $memberId, orderBy: order_ASC){
    id
    name
    email
    description
    resume{
      html
    }
    image{
      url
    }
  }
  teamMembers(first: 1, skip: $count, orderBy: order_ASC){
    slug
  }
  teamSections(first: 1){
    teamTitle
    consultantsTitle
  }
}`

export default getArticle
