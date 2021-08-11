import Layout from '@/components/Layout'
import LegalPresent from '@/components/sections/Present/LegalPresent'
import { GraphClient } from '@/lib'
import {getAllArticlesAndHero} from '@/graphql'


const Present = ({articles, presentSections}) => {

const presentSection = presentSections[0]
  return (
    <Layout titleHead="Aspen Actualidad">
      <LegalPresent dataArticles={articles} dataHero={presentSection}/>
    </Layout>
  )
}


export default Present


export async function getStaticProps() {

	const { articles, presentSections } = await GraphClient.request(getAllArticlesAndHero)
	return {
		props: {
			articles,
      presentSections
		},
	}
}