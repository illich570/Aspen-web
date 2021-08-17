import Layout from '@/components/Layout'
import International from '@/components/sections/International'
import Footer from '@/components/Footer'
import { GraphClient } from '@/lib'
import {getInternationalSection} from '@/graphql'

const Internacional = ({internationalSections}) => {
  return(
    <Layout titleHead="Aspen Legal">
      <International dataSection={internationalSections}/>
      <Footer/>
    </Layout>
  )
}


export default Internacional

export async function getStaticProps() {

	const { internationalSections } = await GraphClient.request(getInternationalSection)
	return {
		props: {
      internationalSections
		},
	}
}