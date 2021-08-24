const getNextArticle = `
query Article($order: Int!){
  articles(first: 1, skip: $order){
    url
  }
}`

export default getNextArticle
