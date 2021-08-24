import Layout from '@/components/Layout'
import TeamMember from '@/components/sections/Team/TeamMember'
import { GraphClient } from '@/lib'
import { getAllMembersSlug, getMember, getAllRoutes, getAllLogos } from '@/graphql'

const Member = ({ teamMember, routesNavbars, logoSections }) => {
	return (
		<Layout blackColor logos={logoSections} routes={routesNavbars} titleHead="Aspen Legal">
			<TeamMember dataMember={teamMember} />
		</Layout>
	)
}

export default Member

export const getStaticPaths = async () => {
	const { teamMembers } = await GraphClient.request(getAllMembersSlug)
	return {
		paths: teamMembers.map((_, index) => ({ params: { memberId: String.toString(index + 1) } })),
		fallback: 'blocking',
	}
}

export const getStaticProps = async ({ params }) => {
	const memberId = parseInt(params.memberId) - 1 //consultar el actual
	const count = parseInt(params.memberId) //consultar el siguiente
	const data = await GraphClient.request(getMember, { memberId, count })
	const { routesNavbars } = await GraphClient.request(getAllRoutes)
	const { logoSections } = await GraphClient.request(getAllLogos)

	if (!data.teamMember) {
		return {
			notFound: true,
		}
	}
	return {
		props: { teamMember: { ...data, count }, routesNavbars, logoSections, count },
		revalidate: 60 * 2, // Cache response for 1 hour (60 seconds * 60 minutes)
	}
}
