const getAllMember = `
{
  teamMembers{
    id
    name
    slug
    image{
      url
    }
  }
  consultantMembers{
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
