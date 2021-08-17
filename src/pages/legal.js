import Layout from '@/components/Layout'
import LegalTech from '@/components/sections/LegalTech'
import { GraphClient } from '@/lib'
import {getAllTechAreas} from '@/graphql'
const Legal = ({techSections, techAreas}) => {
  return(
    <Layout blackColor titleHead="Aspen Actualidad">
      <LegalTech dataTechAreas={techAreas} dataTechSection={techSections} />
    </Layout>
  )
}


export default Legal

export async function getStaticProps() {

	const { techSections,techAreas } = await GraphClient.request(getAllTechAreas)
	return {
		props: {
			techSections,
			techAreas
		},
	}
}