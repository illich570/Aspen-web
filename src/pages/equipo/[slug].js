import Layout from '@/components/Layout'
import TeamMember from '@/components/sections/Team/TeamMember'
import { GraphClient } from '@/lib'
import {getAllMembersSlug, getMember, getAllRoutes, getAllLogos} from '@/graphql'


const Member = ({teamMember, routesNavbars,logoSections}) => {
  return (
    <Layout blackColor logos={logoSections} routes={routesNavbars} titleHead="Aspen Legal">
      <TeamMember dataMember={teamMember}/>
    </Layout>
  )
}


export default Member

export const getStaticPaths = async () => {
  const { teamMembers } = await GraphClient.request(getAllMembersSlug)
  return {
    paths: teamMembers.map((element) => ({ params: { slug: element.slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({params}) => {
  const slug = params.slug
  const data = await GraphClient.request(getMember,{slug})
  const {routesNavbars} = await GraphClient.request(getAllRoutes)
	const {logoSections} = await GraphClient.request(getAllLogos)

  if (!data.teamMember) {
    return {
      notFound: true,
    };
  }
  return {
    props: { teamMember: data, routesNavbars,logoSections},
    revalidate: 60 * 2, // Cache response for 1 hour (60 seconds * 60 minutes)
  };
}