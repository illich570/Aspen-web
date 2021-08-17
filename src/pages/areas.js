import Layout from '@/components/Layout'
import PracticeAreas from '@/components/sections/PracticeAreas'
import { GraphClient } from '@/lib'
import {getAllAreas} from '@/graphql'

const Areas = ({practiceAreas,practiceSections}) => {
	return (
		<Layout blackColor titleHead="Aspen Actualidad">
			<PracticeAreas dataAreaSection={practiceSections} dataAreas={practiceAreas} />
		</Layout>
	)
}

export default Areas

export async function getStaticProps() {

	const { practiceAreas,practiceSections } = await GraphClient.request(getAllAreas)
	return {
		props: {
			practiceAreas,
			practiceSections
		},
	}
}
