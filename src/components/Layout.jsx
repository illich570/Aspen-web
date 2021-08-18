import Head from 'next/head'
import Navbar from '@/components/Navbar/Navbar'

export default function Layout({ children, titleHead, blackColor, routes }) {
	return (
		<>
			<Head>
				<title>{titleHead}</title>
			</Head>
			<Navbar blackColor={blackColor} routes={routes} />
			{children}
		</>
	)
}
