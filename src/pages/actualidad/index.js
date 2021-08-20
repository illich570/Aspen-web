import Layout from '@/components/Layout'
import LegalPresent from '@/components/sections/Present/LegalPresent'
import { GraphClient } from '@/lib'
import { getAllArticlesAndHero, getAllRoutes, getAllLogos } from '@/graphql'

const Present = ({ articles, presentSections, routesNavbars, logoSections }) => {
	const presentSection = presentSections[0]
	return (
		<Layout logos={logoSections} routes={routesNavbars} titleHead="Aspen Legal">
			<LegalPresent dataArticles={articles} dataHero={presentSection} />
		</Layout>
	)
}

export default Present

export async function getStaticProps() {
	const { articles, presentSections } = await GraphClient.request(getAllArticlesAndHero)
	const { routesNavbars } = await GraphClient.request(getAllRoutes)
	const { logoSections } = await GraphClient.request(getAllLogos)
	return {
		props: {
			articles,
			presentSections,
			routesNavbars,
			logoSections,
		},
	}
}
