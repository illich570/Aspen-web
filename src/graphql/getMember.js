const getArticle = `
query TeamMember($slug: String!){
  teamMember(where :{slug : $slug}){
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
  teamMembers(where: {slug_not : $slug}, skip: 1){
    slug
  }
}`

export default getArticle