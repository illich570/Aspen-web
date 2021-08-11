const getArticle = `
query Article($slug: String!){
  article(where :{url : $slug}){
    id
    title
    image{
      url
    }
  }
  articles(where: {url_not : $slug}){
    image{
      url
    }
    url
    title
  }
}`

export default getArticle