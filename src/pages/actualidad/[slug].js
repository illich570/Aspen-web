import Layout from '@/components/Layout'
import PresentPostLayout from '@/components/sections/Present/PresentPostLayout'
import { GraphClient } from '@/lib'
import {getAllArticlesSlug, getArticle, getAllRoutes, getAllLogos} from '@/graphql'


const Present = ({article, routesNavbars,logoSections}) => {
  return (
    <Layout blackColor logos={logoSections} routes={routesNavbars} titleHead="Aspen Legal">
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
  const {logoSections} = await GraphClient.request(getAllLogos)


  if (!data.article) {
    return {
      notFound: true,
    };
  }
  return {
    props: { article: data, routesNavbars, logoSections},
    revalidate: 60 * 2, // Cache response for 1 hour (60 seconds * 60 minutes)
  };
}