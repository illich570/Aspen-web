const getAllAreas = `
{
  practiceAreas{
    id
    title
    content{
      html
    }
    icon{
      url
    }
    memberArea{
      url
    }
  }
  practiceSections(first: 1){
    title
    icon{
      url
    }
    description
  }
}`

export default getAllAreas