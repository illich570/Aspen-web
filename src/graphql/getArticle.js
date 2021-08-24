const getArticle = `
query Article($slug: String!){
  article(where :{url : $slug}){
    id
    title
    order
    image{
      url
    }
    content{
      html
    }
    noteContent{
      html
    }
  }
  articles(where: {url_not : $slug}){
    image{
      url
    }
    url
    title
  }
  presentSections{
    id
    title
    iconArticle{
      url
    }
  }
}`

export default getArticle
