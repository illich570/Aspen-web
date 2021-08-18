import Layout from '@/components/Layout'
import LegalTech from '@/components/sections/LegalTech'
import { GraphClient } from '@/lib'
import {getAllTechAreas, getAllRoutes} from '@/graphql'
const Legal = ({techSections, techAreas, routesNavbars}) => {
  return(
    <Layout blackColor routes={routesNavbars} titleHead="Aspen Actualidad">
      <LegalTech dataTechAreas={techAreas} dataTechSection={techSections} />
    </Layout>
  )
}


export default Legal

export async function getStaticProps() {

	const { techSections,techAreas } = await GraphClient.request(getAllTechAreas)
	const {routesNavbars} = await GraphClient.request(getAllRoutes)
	return {
		props: {
			techSections,
			techAreas,
			routesNavbars
		},
	}
}