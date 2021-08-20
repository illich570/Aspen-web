import Layout from '@/components/Layout'
import International from '@/components/sections/International'
import Footer from '@/components/Footer'
import { GraphClient } from '@/lib'
import { getInternationalSection, getAllRoutes, getFooterSection, getAllLogos } from '@/graphql'

const Internacional = ({ internationalSections, routesNavbars, footerSections, logoSections }) => {
	return (
		<Layout logos={logoSections} routes={routesNavbars} titleHead="Aspen Legal">
			<International dataSection={internationalSections} />
			<Footer dataFooter={footerSections} logos={logoSections} routes={routesNavbars} />
		</Layout>
	)
}

export default Internacional

export async function getStaticProps() {
	const { internationalSections } = await GraphClient.request(getInternationalSection)
	const { routesNavbars } = await GraphClient.request(getAllRoutes)
	const { footerSections } = await GraphClient.request(getFooterSection)
	const { logoSections } = await GraphClient.request(getAllLogos)
	return {
		props: {
			internationalSections,
			routesNavbars,
			footerSections,
			logoSections,
		},
	}
}
