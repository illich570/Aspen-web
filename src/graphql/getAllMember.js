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
}`

export default getAllMember