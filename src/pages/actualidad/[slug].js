import Layout from '@/components/Layout'
import PresentPostLayout from '@/components/sections/Present/PresentPostLayout'
import { GraphClient } from '@/lib'
import {getAllArticlesSlug, getArticle, getAllRoutes} from '@/graphql'


const Present = ({article, routesNavbars}) => {
  return (
    <Layout  blackColor routes={routesNavbars} titleHead="Aspen Actualidad">
      <PresentPostLayout dataArticle={article}/>
    </Layout>
  )
}


export default Present

export const getStaticPaths = async () => {
  const { articles } = await GraphClient.request(getAllArticlesSlug)
  return {
    paths: articles.map((article) => ({ params: { slug: article.url } })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({params}) => {
  const slug = params.slug
  const data = await GraphClient.request(getArticle,{slug})
  const {routesNavbars} = await GraphClient.request(getAllRoutes)


  if (!data.article) {
    return {
      notFound: true,
    };
  }
  return {
    props: { article: data, routesNavbars},
    revalidate: 60 * 2, // Cache response for 1 hour (60 seconds * 60 minutes)
  };
}