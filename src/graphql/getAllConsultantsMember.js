const getAllConsultantsMember = `
{
  consultantMembers{
    id
    name
    description
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

export default getAllConsultantsMember
