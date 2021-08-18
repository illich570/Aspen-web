import Layout from '@/components/Layout'
import { GraphClient } from '@/lib'
import {getAllConsultantsMember, getAllRoutes} from '@/graphql'
import ConsultantTeam from '@/components/sections/ConsultantTeam'

const Consultants = ({consultantMembers, routesNavbars}) => {
	return (
		<Layout blackColor routes={routesNavbars} titleHead="Aspen Actualidad">
			<ConsultantTeam  dataTeam={consultantMembers}/>
		</Layout>
	)
}

export default Consultants

export async function getStaticProps() {

	const { consultantMembers } = await GraphClient.request(getAllConsultantsMember)
	const {routesNavbars} = await GraphClient.request(getAllRoutes)
	return {
		props: {
      consultantMembers,
			routesNavbars
		},
	}
}