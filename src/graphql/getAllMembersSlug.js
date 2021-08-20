const getAllMembersSlug = `
{
  teamMembers{
    slug
  }
  teamSections(first: 1){
    teamTitle
    consultantsTitle
  }
}`

export default getAllMembersSlug