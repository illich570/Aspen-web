import Head from 'next/head'
import Navbar from '@/components/Navbar/Navbar'

export default function Layout({ children, titleHead, blackColor }) {
	return (
		<>
			<Head>
				<title>{titleHead}</title>
			</Head>
			<Navbar blackColor={blackColor} />
			{children}
		</>
	)
}
