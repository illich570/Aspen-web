import Layout from '@/components/Layout'
import Home from '@/components/sections/Home/Home'
import { GraphClient } from '@/lib'
import {getAllHomeSlides} from '@/graphql'

export default function Index({homeSections}) {
	return (
		<>
			<Layout titleHead="Aspen Legal">
				<Home dataHome={homeSections} />
			</Layout>
		</>
	)
}

export async function getStaticProps() {

	const { homeSections } = await GraphClient.request(getAllHomeSlides)
	return {
		props: {
			homeSections
		},
	}
}
