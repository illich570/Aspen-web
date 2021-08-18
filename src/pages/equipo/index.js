import Layout from '@/components/Layout'
import { GraphClient } from '@/lib'
import {getAllMember, getAllRoutes} from '@/graphql'
import Team from '@/components/sections/Team'

const Areas = ({teamMembers,consultantMembers, routesNavbars}) => {
	return (
		<Layout blackColor routes={routesNavbars} titleHead="Aspen Actualidad">
			<Team  dataConsultant={consultantMembers} dataTeam={teamMembers}/>
		</Layout>
	)
}

export default Areas

export async function getStaticProps() {

	const { teamMembers,consultantMembers } = await GraphClient.request(getAllMember)
	const {routesNavbars} = await GraphClient.request(getAllRoutes)
	return {
		props: {
			teamMembers,
			consultantMembers,
			routesNavbars
		},
	}
}