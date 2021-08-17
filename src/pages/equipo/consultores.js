import Layout from '@/components/Layout'
import { GraphClient } from '@/lib'
import {getAllConsultantsMember} from '@/graphql'
import ConsultantTeam from '@/components/sections/ConsultantTeam'

const Consultants = ({consultantMembers}) => {
	return (
		<Layout blackColor titleHead="Aspen Actualidad">
			<ConsultantTeam  dataTeam={consultantMembers}/>
		</Layout>
	)
}

export default Consultants

export async function getStaticProps() {

	const { consultantMembers } = await GraphClient.request(getAllConsultantsMember)
	return {
		props: {
      consultantMembers
		},
	}
}