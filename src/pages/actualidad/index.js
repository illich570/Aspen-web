import Layout from '@/components/Layout'
import LegalPresent from '@/components/sections/Present/LegalPresent'
import { GraphClient } from '@/lib'
import {getAllArticlesAndHero, getAllRoutes} from '@/graphql'


const Present = ({articles, presentSections,routesNavbars}) => {

const presentSection = presentSections[0]
  return (
    <Layout routes={routesNavbars} titleHead="Aspen Actualidad">
      <LegalPresent dataArticles={articles} dataHero={presentSection}/>
    </Layout>
  )
}


export default Present


export async function getStaticProps() {

	const { articles, presentSections} = await GraphClient.request(getAllArticlesAndHero)
  const {routesNavbars} = await GraphClient.request(getAllRoutes)
	return {
		props: {
			articles,
      presentSections,
      routesNavbars
		},
	}
}