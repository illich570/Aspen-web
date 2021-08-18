import Layout from '@/components/Layout'
import PracticeAreas from '@/components/sections/PracticeAreas'
import { GraphClient } from '@/lib'
import {getAllAreas, getAllRoutes} from '@/graphql'

const Areas = ({practiceAreas,practiceSections, routesNavbars}) => {
	return (
		<Layout  blackColor routes={routesNavbars} titleHead="Aspen Actualidad">
			<PracticeAreas dataAreaSection={practiceSections} dataAreas={practiceAreas} />
		</Layout>
	)
}

export default Areas

export async function getStaticProps() {

	const { practiceAreas,practiceSections } = await GraphClient.request(getAllAreas)
	const {routesNavbars} = await GraphClient.request(getAllRoutes)
	return {
		props: {
			practiceAreas,
			practiceSections,
			routesNavbars
		},
	}
}
