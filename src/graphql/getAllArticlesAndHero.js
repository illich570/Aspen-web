const getAllArticlesAndHero = `
{
  presentSections{
    id
    title
    description
    icon{
      url
    }
    background{
      url
    }
  }
  articles{
    id
    title
    url
    image{
      url
    }
  }
}`

export default getAllArticlesAndHero