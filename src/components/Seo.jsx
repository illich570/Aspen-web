import Head from 'next/head'

export default function SEO() {
	return (
		<Head>
			<link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="76x76" />
			<link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
			<link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
			<link color="#5bbad5" href="/safari-pinned-tab.svg" rel="mask-icon" />
		</Head>
	)
}
