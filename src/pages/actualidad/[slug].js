import Layout from '@/components/Layout'
import PresentPostLayout from '@/components/sections/Present/PresentPostLayout'
import { GraphClient } from '@/lib'
import {getAllArticlesSlug, getArticle} from '@/graphql'


const Present = ({article}) => {
  return (
    <Layout blackColor titleHead="Aspen Actualidad">
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
  //eslint-disable-next-line
  console.log(data);


  if (!data.article) {
    return {
      notFound: true,
    };
  }
  return {
    props: { article: data},
    revalidate: 60 * 2, // Cache response for 1 hour (60 seconds * 60 minutes)
  };
}