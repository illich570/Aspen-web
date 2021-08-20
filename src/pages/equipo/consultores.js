import Layout from '@/components/Layout'
import { GraphClient } from '@/lib'
import { getAllConsultantsMember, getAllRoutes, getAllLogos } from '@/graphql'
import ConsultantTeam from '@/components/sections/Team/ConsultantTeam'

const Consultants = ({ consultantMembers, routesNavbars, teamSections, logoSections }) => {
	return (
		<Layout blackColor logos={logoSections} routes={routesNavbars} titleHead="Aspen Legal">
			<ConsultantTeam dataSection={teamSections} dataTeam={consultantMembers} />
		</Layout>
	)
}

export default Consultants

export async function getStaticProps() {
	const { consultantMembers, teamSections } = await GraphClient.request(getAllConsultantsMember)
	const { routesNavbars } = await GraphClient.request(getAllRoutes)
	const { logoSections } = await GraphClient.request(getAllLogos)
	return {
		props: {
			consultantMembers,
			routesNavbars,
			teamSections,
			logoSections,
		},
	}
}
