import Layout from '@/components/Layout'
import TeamMember from '@/components/sections/TeamMember'
import { GraphClient } from '@/lib'
import {getAllMembersSlug, getMember, getAllRoutes} from '@/graphql'


const Member = ({teamMember, routesNavbars}) => {
  return (
    <Layout blackColor routes={routesNavbars} titleHead="Aspen Actualidad">
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


  if (!data.teamMember) {
    return {
      notFound: true,
    };
  }
  return {
    props: { teamMember: data, routesNavbars},
    revalidate: 60 * 2, // Cache response for 1 hour (60 seconds * 60 minutes)
  };
}