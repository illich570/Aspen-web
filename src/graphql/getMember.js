const getArticle = `
query TeamMember($slug: String!){
  teamMember(where :{slug : $slug}){
    id
    name
    email
    description
    order
    resume{
      html
    }
    image{
      url
    }
  }
  teamSections(first: 1){
    teamTitle
    consultantsTitle
  }
}`

export default getArticle
