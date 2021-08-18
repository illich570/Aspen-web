import Layout from '@/components/Layout'
import Home from '@/components/sections/Home/Home'
import { GraphClient } from '@/lib'
import {getAllHomeSlides,getAllRoutes} from '@/graphql'

export default function Index({homeSections,routesNavbars}) {
	return (
		<>
			<Layout routes={routesNavbars} titleHead="Aspen Legal" >
				<Home dataHome={homeSections} />
			</Layout>
		</>
	)
}

export async function getStaticProps() {

	const { homeSections } = await GraphClient.request(getAllHomeSlides)
	const {routesNavbars} = await GraphClient.request(getAllRoutes)
	return {
		props: {
			homeSections,
			routesNavbars
		},
	}
}
