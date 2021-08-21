const getAllMember = `
{
  teamMembers(orderBy: order_ASC){
    id
    name
    slug
    image{
      url
    }
  }
  consultantMembers(orderBy: order_ASC){
    id
    name
    image{
      url
    }
  }
    teamSections(first: 1){
      teamTitle
      consultantsTitle
    }
}`

export default getAllMember
