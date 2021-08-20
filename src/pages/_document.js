import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import theme from '@/theme'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="es">
				<Head>
					<meta content={theme.palette.primary.main} name="theme-color" />
					<link href="https://fonts.googleapis.com" rel="preconnect" />
					<link href="https://fonts.gstatic.com" rel="preconnect" usecrossorigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400&family=Montserrat:wght@300;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
					<link
						charSet="UTF-8"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
						rel="stylesheet"
						type="text/css"
					/>
					<link
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
						rel="stylesheet"
						type="text/css"
					/>
					<link
						as="font"
						crossOrigin=""
						href="/fonts/Trajan/TrajanPro-Regular.woff"
						rel="preload"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const sheets = new ServerStyleSheets()
	const originalRenderPage = ctx.renderPage

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		})

	const initialProps = await Document.getInitialProps(ctx)

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
	}
}
