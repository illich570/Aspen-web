import Layout from '@/components/Layout'
import { GraphClient } from '@/lib'
import {getAllMember} from '@/graphql'
import Team from '@/components/sections/Team'

const Areas = ({teamMembers,consultantMembers}) => {
	return (
		<Layout blackColor titleHead="Aspen Actualidad">
			<Team  dataConsultant={consultantMembers} dataTeam={teamMembers}/>
		</Layout>
	)
}

export default Areas

export async function getStaticProps() {

	const { teamMembers,consultantMembers } = await GraphClient.request(getAllMember)
	return {
		props: {
			teamMembers,
			consultantMembers
		},
	}
}