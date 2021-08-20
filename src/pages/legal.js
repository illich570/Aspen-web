import Layout from '@/components/Layout'
import LegalTech from '@/components/sections/LegalTech'
import { GraphClient } from '@/lib'
import {getAllTechAreas, getAllRoutes, getAllLogos} from '@/graphql'


const Legal = ({techSections, techAreas, routesNavbars,logoSections}) => {
  return(
    <Layout blackColor logos={logoSections} routes={routesNavbars} titleHead="Aspen Legal">
      <LegalTech dataTechAreas={techAreas} dataTechSection={techSections} />
    </Layout>
  )
}


export default Legal

export async function getStaticProps() {

	const { techSections,techAreas } = await GraphClient.request(getAllTechAreas)
	const {routesNavbars} = await GraphClient.request(getAllRoutes)
	const {logoSections} = await GraphClient.request(getAllLogos)
	return {
		props: {
			techSections,
			techAreas,
			routesNavbars,
			logoSections
		},
	}
}