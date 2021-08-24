import Layout from '@/components/Layout'
import { GraphClient } from '@/lib'
import { getAllMember, getAllRoutes, getAllLogos } from '@/graphql'
import Team from '@/components/sections/Team/Team'

const Areas = ({ teamMembers, consultantMembers, routesNavbars, teamSections, logoSections }) => {
	return (
		<Layout blackColor logos={logoSections} routes={routesNavbars} titleHead="Aspen Legal">
			<Team dataConsultant={consultantMembers} dataSection={teamSections} dataTeam={teamMembers} />
		</Layout>
	)
}

export default Areas

export async function getStaticProps() {
	const { teamMembers, consultantMembers, teamSections } = await GraphClient.request(getAllMember)
	const { routesNavbars } = await GraphClient.request(getAllRoutes)
	const { logoSections } = await GraphClient.request(getAllLogos)
	return {
		props: {
			teamMembers,
			consultantMembers,
			routesNavbars,
			teamSections,
			logoSections,
		},
		revalidate: 60 * 2,
	}
}
