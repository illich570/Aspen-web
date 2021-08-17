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
}`

export default getAllConsultantsMember