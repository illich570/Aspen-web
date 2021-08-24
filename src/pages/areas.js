import Layout from '@/components/Layout'
import PracticeAreas from '@/components/sections/PracticeAreas'
import { GraphClient } from '@/lib'
import { getAllAreas, getAllRoutes, getAllLogos } from '@/graphql'

const Areas = ({ practiceAreas, practiceSections, routesNavbars, logoSections }) => {
	return (
		<Layout blackColor logos={logoSections} routes={routesNavbars} titleHead="Aspen Legal">
			<PracticeAreas dataAreaSection={practiceSections} dataAreas={practiceAreas} />
		</Layout>
	)
}

export default Areas

export async function getStaticProps() {
	const { practiceAreas, practiceSections } = await GraphClient.request(getAllAreas)
	const { routesNavbars } = await GraphClient.request(getAllRoutes)
	const { logoSections } = await GraphClient.request(getAllLogos)
	return {
		props: {
			practiceAreas,
			practiceSections,
			routesNavbars,
			logoSections,
		},
		revalidate: 60 * 2,
	}
}
