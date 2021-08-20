const getAllTechAreas = `
{
  techSections(first: 1){
    title
    content
    iconLinkedinUrl
    icon{
      url
    }
    iconLinkedin{
      url
    }
  }
  techAreas{
    id
    title
    content{
      html
    }
  }
}`

export default getAllTechAreas
